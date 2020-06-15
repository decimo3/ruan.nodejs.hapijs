window.onload = paginaPrincipal
function paginaPrincipal () {
    URL = "http://localhost:3000/api/v1/publicacao/"
    fetch(URL)
        .then((res)=>{console.log(res.text)})
        .catch((err)=>{console.log(err)})
}
function imprimeResultado (log) {
}