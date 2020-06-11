window.onload = paginaPrincipal
function paginaPrincipal () {
    URL = "http://localhost:3001/"
    let a = fetch(URL)
        .then((res)=>{console.log(res.text)})
        .catch((err)=>{console.log(err)})
}