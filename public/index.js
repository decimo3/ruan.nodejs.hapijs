import { paginaPrincipal, enviarDepoimento } from "./request.js";
URL = "http://localhost:3000/api/v1/publicacao"

window.onload = paginaPrincipal(URL)
function enviarDepoimento() {
  let nome = window.document.getElementById("txtNome")
  let titulo = window.document.getElementById("txtTitulo")
  let depoimento = window.document.getElementById("txtDepoimento")
  console.log(titulo.value, depoimento.value)
  titulo.value = ""
  depoimento.value = ""
}