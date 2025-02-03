// function imc(peso, altura){
//     let calculo = peso / (altura * altura); 
//     return calculo < 18.5 ? "Por debajo del peso recomendado" : calculo < 24.9 ? "Peso normal" : calculo < 29.9 ? "Sobrepeso" : "Obesidad";
// }
// console.log(imc(59, 1.55));

// function factorial(num){
//     let resultado = 1;
//     while (num > 1){
//         resultado *= num;
//         num--;
//     }
//     return resultado;
// }
// console.log(factorial(5));

// function convertirAreales(soles){
//     let resultado = parseFloat(soles * (1.56613));
//     return resultado;
// }
// console.log(convertirAreales(100));

// function areaYperimetro(altura, anchura) {
//     return `El área es ${altura * anchura} y el perímetro es ${2 * (altura + anchura)}`;
// }
// console.log(areaYperimetro(5, 10));

// function areaYperimetroCircular(radio){
//     let pi = 3.14;
//     return `El área es ${pi * radio * radio} y el perímetro es ${2 * pi * radio}`;
// }
// console.log(areaYperimetroCircular(10));

// function tablaMultiplicar(numero){
//     let factor = 1;

//     while(factor < 13){
//         console.log( `${numero} x ${factor} = ${numero * factor}\n`);
//         factor++;
//     }
// }
// tablaMultiplicar(1);



let arregloNumerosSecretos = [];
let numeroMaximo = 10;
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("numeroUsuario").value);
    //let numeroUsuario = document.querySelector("input"); // Selecciona el input
    
    if (numeroDeUsuario == numeroSecreto) {
        asignarTextoElemento("h1", "¡Ganaste!");
        asignarTextoElemento("p", "El número secreto era " + numeroSecreto + `, acertaste en ${intentos} ${intentos === 1 ? "intento" : "intentos"}`);
        document.getElementById(`reiniciar`).removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor que " + numeroDeUsuario);
            asignarTextoElemento("h1", "¡Fallaste!");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor que " + numeroDeUsuario);
            asignarTextoElemento("h1", "¡Fallaste!");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector(`#numeroUsuario`).value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(arregloNumerosSecretos);
    
    if(arregloNumerosSecretos.length == numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los elementos posibles");
        asignarTextoElemento("h1", "Juego Número Secreto terminado");
        document.querySelector("#botonIntentar").setAttribute("disabled", "true");
    } else{
        if(arregloNumerosSecretos.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            arregloNumerosSecretos.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


function mensajesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}: `);
    console.log(numeroSecreto);
}

// Reiniciar el juego de número secreto
function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    mensajesIniciales();
    //Generar un nuevo número secreto aleatorio
    numeroSecreto = generarNumeroSecreto();
    //Desabilitar el botón de nuevo juego
    document.querySelector(`#reiniciar`).setAttribute("disabled", "true");
    //Inicializar el número de intentos
    intentos = 1;
}
mensajesIniciales();
