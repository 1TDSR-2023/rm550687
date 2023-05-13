//Desafio 1
//Utilizando uma função com passagem de parâmetros insira os números e operadores matemáticos no visor.
//Você pode se utilizar de eventos inline no html.
//Boa sorte você tem 5 minutos.

function insereNumeroNoVisor(botao,visor) {
    visor.value += botao.value
 
    
}

const calculoDoVisor = (visor)=>{
    visor.value = eval(visor.value);
}
//Desafio 3
//Impeça a entrada de mais de uma vez do operador matemático.
