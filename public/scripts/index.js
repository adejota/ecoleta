const buttonSearch = document.querySelector("#page-home .content main a")
const modal = document.getElementById("modal")
const close = document.querySelector("#modal .header a")

buttonSearch.addEventListener("click", () => {
    modal.classList.toggle("hide")
})

close.addEventListener("click", () => {
    modal.classList.toggle("hide")
})
