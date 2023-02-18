function mostrarNombre(nombre) {
    var saludo = "Hola " + nombre.value;
    document.getElementById("resultado").innerHTML = saludo;
}

function suma(numero1, numero2) {
    var x = document.getElementById(numero1).value;
    var y = document.getElementById(numero2).value;
    var sum = 0;
    sum = Number(x) + Number(y);
    if (isNaN(Number(x)) && isNaN(Number(y))) {
        document.getElementById("resultado_suma").innerHTML = "Introduciste mal los números.";
    } else if (isNaN(Number(x))) {
        document.getElementById("resultado_suma").innerHTML = "Introduciste mal el primer número.";
    } else if (isNaN(Number(y))) {
        document.getElementById("resultado_suma").innerHTML = "Introduciste mal el segundo número.";
    } else {
        document.getElementById("resultado_suma").innerHTML = sum;
    }
}

function contarNumeros(){
    var limite = 10;
    for(var i=0; i<limite ; i++){
        document.getElementById("contarNumeros").innerHTML += " " + i;
    }
}

function limpiar(elemento){
    document.getElementById(elemento).innerHTML = "";
}