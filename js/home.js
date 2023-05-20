

if(localStorage.getItem("user-token")){
    const elementoBemVindo = document.querySelector("#welcome");
    const usuarioValidado = JSON.parse (localStorage.getItem("user-validado"));
    elementoBemVindo.innerHTML = usuarioValidado.nomeCompleto;

    const botaoSair = document.querySelector("#btnSair");
    botaoSair.addEventListener("click", ()=>{

        localStorage.removeItem("user-token");
        localStorage.removeItem("user-validado");
        window.location.href="../login.html";
    });

}else{
    alert("Voce so pode acessar a pagina se estiver logado");
    window.location.href="../login.html";

}

//React+ vite
//Sass p/ react
//styled-components

//react: Components

//tutorialspoint.com ---