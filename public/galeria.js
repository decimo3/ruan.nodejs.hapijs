window.onload = () => {
  var albuns = {
    favoritos: ["favoritos01", "favoritos02"],
    paisagens: ["paisagem01", "paisagem02"],
    ruan: ["ruan01", "ruan02"],
    lidia: ["lidia01", "lidia02"],
    samuel: ["samuel01", "samuel02"],
    sarah: ["sarah01", "sarah02"],
  }
  console.log(albuns)
  function criarAlbuns() {
    let quadro = window.document.getElementById("quadro")
    for (const key in albuns) {
      console.log(key)
      let albumDiv = window.document.createElement("div")
      let thumbnail = window.document.createElement("img")
      let zelda = window.document.createElement("a")
      albumDiv.setAttribute("id", key)
      albumDiv.style.borderColor = "red"
      albumDiv.setAttribute("class", "col-3")
      thumbnail.setAttribute("src", `./galeria/${key}01.jpg`)
      zelda.setAttribute("id", key)
      zelda.innerText = `${key}`
      albumDiv.appendChild(thumbnail)
      albumDiv.appendChild(zelda)
      quadro.appendChild(albumDiv)
      let albumDivAtributes = albumDiv.getBoundingClientRect()
      albumDiv.style.height = `${albumDivAtributes.width}px`
      thumbnail.style.height = `${albumDivAtributes.width - 45}px`
      thumbnail.style.width = `${albumDivAtributes.width - 45}px`
      console.log(albumDivAtributes.width)
    }
  }
  criarAlbuns()
}