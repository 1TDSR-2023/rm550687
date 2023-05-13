
function insereNumeroNoVisor(botao,visor) {
    visor.value += botao.value
}

const calculoDoVisor = (visor)=>{
   visor.value = eval(visor.value);
};

