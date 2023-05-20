const elementoBemVindo = document.querySelector("#welcome");

const usuarioValidado = JSON.parse (localStorage.getItem("user-validado"));

elementoBemVindo.innerHTML = usuarioValidado.nomeCompleto;