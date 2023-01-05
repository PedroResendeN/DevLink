function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  // tag da imagem

  const img = document.querySelector("#profile img")

  // substituição
  if(html.classList.contains('light')) {
    img.setAttribute('src', 'assets/perfil.jpg')
    img.setAttribute('alt', "Avatar de perfil do usuário")
  } else {
    img.setAttribute('src', "assets/avatar.jpg")
    img.setAttribute('alt', "Imagem de perfil do usuário")
  }

}