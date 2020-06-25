export function paginaPrincipal (URL) {
    fetch(URL, {method: 'GET'})
        .then((res) => {
            res.json()
                .then((json) => { imprimeResultado(json) })
                .catch((err) => { console.error("Não foi possível converter a resposta em JSON", err) })
        })
        .catch((err) => { console.error("Não foi possível responder a sua solicitação", err) })
};
function imprimeResultado (log) {
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
};
function enviarDepoimento () {
    let titulo = window.document.getElementById("txtTitulo")
    let depoimento = window.document.getElementById("txtDepoimento")
    console.log(titulo.value, depoimento.value)
    titulo.value = ""
    depoimento.value = ""
};