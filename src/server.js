const express = require("express")
const server = express()

// pegar o banco de dados
const db = require("./database/db")

// configurar pasta publica
server.use(express.static("public"))

// habilitar o uso do req.body na aplicação
server.use(express.urlencoded({ extended: true }))

// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true // as vezes ele devolve o arquivo sem alguma alteração
})

// configurar caminhos da aplicação
// pagina inicial
// req: requisição
// res: resposta
server.get("/", function(req, res) {
    return res.render("index.html") //__dirname é C:\NLW\src - como estamos utilizando o nunjucks trocamos o sendFile por render, para que o nunjucks renderize a pagina, e o __dirname é removido porque já foi declarado no nunjucks
})

server.get("/create-point", function(req, res) {

    // seleciona os Query Strings da URL
    // req.query

    return res.render("create-point.html") //__dirname é C:\NLW\src
})

server.post("/savepoint", function(req, res) {
    
    // requisita o corpo do form
    // precisa habilitar o express para essa ação
    // req.body

    // inserir dados no banco de dados
    const query = `
        INSERT INTO places (
            name,
            image,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
        req.body.name,
        req.body.image,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if (err) {
            console.log(err)
            return res.render("partials/page-err.html")
        }

        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html", { saved: true })
    }

    db.run(query, values, afterInsertData)
})



server.get("/search", function(req, res) {

    const search = req.query.search
    
    if (search == "") {
        return res.render("search-results.html", { total: 0} ) 
    }
    


    // pegar os dados do banco de dados
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
        if (err) {
            return console.log(err)
        }

        const total = rows.length

        // mostrar a página HTML com os dados do banco de dados
        console.log("Aqui estão seus registros")
        console.log(rows)
        return res.render("search-results.html", { places: rows, total: total} ) //__dirname é C:\NLW\src
    })



})

// ligar o servidor na porta 3000
server.listen(3000)