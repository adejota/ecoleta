// importar a dependência do sqlite3

// verbose é uma function que mostra no terminal alterações no db
const sqlite3 = require("sqlite3").verbose() //function dentro de objeto é um metodo

// criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")


module.exports = db
// utilizar o objeto de banco de dados para nossas operações
db.serialize(() => { // serialize roda uma sequência de código
    
    
    // Criar uma tabela
/*     db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            image TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `) */
    

    // Inserir dados na tabela
/*     const query = `
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
        "Papersider",
        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "Guilherme Gemballa, Jardim América",
        "Numero 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]

    function afterInsertData(err) {
        if (err) {
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData) */


    // Consultar os dados da tabela
/*     db.all(`SELECT * FROM places`, function(err, rows) {
        if (err) {
            return console.log(err)
        }

        console.log("Aqui estão seus registros")
        console.log(rows)
    }) */

    // Deletar um dado da tabela
      
/*         db.run(`DELETE FROM places WHERE id = ?`, [14], function(err){
        if (err) {
            return console.log(err)
        }

        console.log("Registro deletado com sucesso")
    }) */


}) 