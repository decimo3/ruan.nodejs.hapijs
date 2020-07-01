URL = "http://localhost:3000/api/v1/login"

let cacete = window.document.getElementById("cacete").addEventListener('click', (event) => {
    event.preventDefault();
    requestGetPublicações();
})
async function requestGetPublicações() {
    console.log("Iniciando Fetch...")
    let email = window.document.getElementById("email")
    let senha = window.document.getElementById("senha")
    let payload = JSON.stringify({email, senha})
     await fetch(URL, {method: "POST", body: payload})
        .then((res) => {
            if (response.ok) { res.json().then((json) => {console.log(json) })}
            else {console.error("Network response was not ok")}})
        .catch((err) => {console.error("Servidor está indisponível", err)})
}