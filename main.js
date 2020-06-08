window.onload = paginaPrincipal
function paginaPrincipal () {
    URL = "http://localhost:5500/"
    fetch(URL)
        .then((res)=>console.log(res))
}