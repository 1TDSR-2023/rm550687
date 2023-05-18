

const inputEmail = document.querySelector("#idEmail");

inputEmail.addEventListener("keyup", () => {

    const lblEmail = document.querySelector("label[for='idEmail']");

    if (inputEmail.value.length < 5) {
        inputEmail.setAttribute("style", "outline-color:#ff0000;");
        lblEmail.setAttribute("style", "color:#ff0000;");
    } else {
        inputEmail.setAttribute("style", "outline-color:#00ff00;");
        lblEmail.setAttribute("style", "color:#00ff00;");
    }

});
const inputSenha =document.querySelector("#idPass");
const eyePass = document.querySelector(".fa");

eyePass.addEventListener("click", () => {

    const inputSenha = document.querySelector("#idPass");

    if (inputSenha.getAttribute("type") == "password") {
        inputSenha.setAttribute("type", "text");
        eyePass.setAttribute("class", "fa fa-eye-slash");
    } else {
        inputSenha.setAttribute("type", "password");
        eyePass.setAttribute("class", "fa fa-eye");
    }

});

// const usuario1 ={

//     nomeCompleto: "Jose das Couves", emailUsuario: "jose@email.com", senhaUsuario: "123"

// }

// const usuario2 ={

//     nomeCompleto: "Jose das Couves", emailUsuario: "jose@email.com", senhaUsuario: "123"

// }

// let listaDeUsuarios = [];
// listaDeUsuarios.push(usuario1);
// listaDeUsuarios.push(usuario2);

let listaDeUsuarios = [{
    nomeCompleto: "Jose das Couves", emailUsuario: "jose@email.com", senhaUsuario: "123"
}, {
    nomeCompleto: "Juan tulipa", emailUsuario: "juan@email.com", senhaUsuario: "123"
}, {
    nomeCompleto: "Derick Couves", emailUsuario: "derick@email.com", senhaUsuario: "123"
}, {
    nomeCompleto: "Phablo sss", emailUsuario: "phablo@email.com", senhaUsuario: "123"
}];


const botaoSubmit = document.querySelector("#btnSubmit");
botaoSubmit.addEventListener("click", () => {

    const userValidado = {
        emailUsuarioValidado: inputEmail.value,
        senhaUsuarioValidado: inputSenha.value
    }

    listaDeUsuarios.forEach((usuario) => {

        if (userValidado.emailUsuarioValidado == usuario.emailUsuario && userValidado.senhaUsuarioValidado == usuario.senhaUsuario) {
            userValidado = usuario;
        }
    });

    if (userValidado.emailUsuarioValidado == inputEmail.value && userValidado.senhaUsuarioValidado == inputSenha.value) {
        console.log("Usuario Validado")
    }
    else {
        console.log("Senha ou nome de usuario invalido!");
    }
});