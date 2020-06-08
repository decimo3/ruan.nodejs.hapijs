window.onload = paginaPrincipal
function paginaPrincipal () {
    URL = "http://localhost:3001/"
    fetch(URL)
        .then((res)=>console.log(res))
}