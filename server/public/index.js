window.onload = requestGetPublicações()
URL = "http://localhost:3000/api/v1/publicacoes"
async function requestGetPublicações() {
     await fetch(URL)
        .then((res) => {
            if (response.ok) {res.json().then((json) => {imprimeResultado(json)})}
            else {errorHandler("Network response was not ok")}})
        .catch((err) => {errorHandler("Servidor está indisponível", err)})
}
async function requestPostPublicações() {
    let txtNome = window.document.getElementById("txtNome")
    let txtTitulo = window.document.getElementById("txtTitulo")
    let txtDepoimento = window.document.getElementById("txtDepoimento")
    let favorito = window.document.getElementById("favorito")
    nome.value = titulo.value = depoimento.value = ""
    const form = { nome: txtNome.value, titulo: txtTitulo.value, depoimento: txtDepoimento.value, favorito: favorito.value }
    await fetch(URL, {method: 'POST', headers: {'Accept': 'application/json','Content-Type': 'application/json'}, body: JSON.stringify({form})})
}
function imprimeResultado(log) {
    for (let index = log.length - 1; index >= 0; index--) {
        let quadro = window.document.getElementById("quadro")
        let titulo = window.document.createElement("div")
        titulo.setAttribute("name", "barraTitulo")
        titulo.setAttribute("class", "barraTitulo")
        titulo.innerText = `Titulo: ${log[index].titulo} por ${log[index].nome}`
        quadro.appendChild(titulo)
        let depoimento = window.document.createElement("div")
        depoimento.setAttribute("name", "corpoDepoimento")
        depoimento.setAttribute("class", "corpoDepoimento")
        depoimento.innerText = `${log[index].depoimento}`
        titulo.appendChild(depoimento)
    }
}
function errorHandler(message, err) {
    console.error(message, err)
    let quadro = window.document.getElementById("quadro")
    quadro.innerHTML = message
    quadro.style.padding = "100px"
}