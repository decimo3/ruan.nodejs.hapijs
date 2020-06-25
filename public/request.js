export function paginaPrincipal(URL) {
    fetch(URL, { method: 'GET' })
        .then((res) => {
            if (response.ok) {
                return res.json().then((json) => { imprimeResultado(json) })
            } else {
                console.error("Network response was not ok.", err)
                let quadro = window.document.getElementById("quadro")
                quadro.innerHTML = "Não foi possível responder a sua solicitação!"
                quadro.style.padding = "100px"
            }
        }).catch((err) => {
            console.error("Não foi possível responder a sua solicitação!", err)
            let quadro = window.document.getElementById("quadro")
            quadro.innerHTML = "Não foi possível responder a sua solicitação!"
            quadro.style.padding = "100px"
        })
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
async function enviarDepoimento() {
    let txtNome = window.document.getElementById("txtNome")
    let txtTitulo = window.document.getElementById("txtTitulo")
    let txtDepoimento = window.document.getElementById("txtDepoimento")
    let favorito = window.document.getElementById("favorito")
    nome.value = ""
    titulo.value = ""
    depoimento.value = ""
    const form = {nome: txtNome.value, titulo: txtTitulo.value,  depoimento: txtDepoimento.value, favorito: favorito.value}
    await form.json().then((json)=>{

    })
    .catch((err)=>{
        
    })
    
    
}