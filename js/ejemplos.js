'script'

// IF-ELSE
function mostrarEdad() {
    var edad = document.getElementById("edad").value;
    edad = parseInt(edad);

    if (edad >= 18) alert("Esta persona tiene " + edad + " por lo tanto es mayor de edad");
    else alert("Esta persona tiene " + edad + " por lo tanto es menor de edad");
}

// SWITCH

function respuestaCorrecta () {
    let opciones = document.getElementsByName("opciones");
    let valorSeleccionado;

    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            valorSeleccionado = parseInt(opciones[i].value);
            break;
        }
    }

    switch(valorSeleccionado) {
        case 1: alert("Respuesta incorrecta");
        break;

        case 2: alert("Respuesta Correcta");
        break;

        case 3: alert("Respuesta incorrecta");
        break;
    }
}

// TRY ... CATCH

function dividir() {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let resultado;
    try {
        resultado = numero1 / numero2;
        if (!isFinite(resultado)) throw new Error("División por cero");
        alert(resultado);
    }
    catch (error){
        alert(error.message);
    }
}


// CICLOS

function imprimirNumeros(event){
    event.preventDefault();
    let numero = document.getElementById("cantidad").value;
    let formulario = document.querySelector("#ciclos #formulario-for");
    for (let i = 0; i < numero; i++) {
        let label = document.createElement("label");
        label.textContent = i + " ";
        formulario.appendChild(label);
    }
}

// COMPARACIÓN

function compararPalabras(event) {
    event.preventDefault();
    let palabra1 = document.querySelector("#palabra1").value;
    let palabra2 = document.querySelector("#palabra2").value;

    if (palabra1 === palabra2) {
        alert("Las palabras son iguales");
    }
    else {
        alert("Las palabras son diferentes");
    }
}

// DATE

function imprimirFecha (event) {
    event.preventDefault();
    let fechaActual = new Date();
    let formulario = document.getElementById("Fecha");

    let fechas = ["El día actual: " + fechaActual.getDate(),
                    "El mes actual: " + fechaActual.getMonth(),
                        "El año actual: " + fechaActual.getFullYear(),
                            (fechaActual.getDate() + "/" + fechaActual.getMonth() + "/" + fechaActual.getFullYear())];

    for (let i = 0; i < fechas.length; i++) {
        let label = document.createElement("label");
        label.innerText = fechas[i] + " ";
        formulario.appendChild(label);
    }
}