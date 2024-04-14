let numeroSecreto = 0;  
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 100;

function asignarTexto (elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTexto("p", "Ya se sortearon todos los números posibles");
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroSecreto);
    if (numeroUsuario === numeroSecreto){
        asignarTexto("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else {
        if (numeroUsuario > numeroSecreto){
            asignarTexto("p", "El número secreto es menor");
        } else {
            asignarTexto("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
}

function condicionesIniciales(){
    asignarTexto("h1", "El Número Secreto");
    asignarTexto("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(); 
    intentos = 1;
}


function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}
  
condicionesIniciales();