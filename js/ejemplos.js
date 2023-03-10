'script'

function mostrarEdad() {
    var edad = document.getElementById("edad").value;
    edad = parseInt(edad);

    if (edad >= 18) alert("Esta persona tiene " + edad + " por lo tanto es mayor de edad");
    else alert("Esta persona tiene " + edad + " por lo tanto es menor de edad");
}