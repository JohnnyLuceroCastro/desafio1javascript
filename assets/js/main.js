//funcion para borrar resultados obtenidos
function borra() {
    document.getElementById("titulo_resultado").innerHTML = "";
    document.getElementById("resultados").innerHTML = "";
    console.log("Boorando");

    document.getElementById("borrador").style.display = "none";
}
//realiza distintas operaciones matematicas
function matematicas() {

    borra();
//toma de datos
    var num1 = prompt("ingrese el primer número", 0);
    var num2 = prompt("ingrese el segundo número", 0);
//calculos
    var suma = num1 * 1 + num2 * 1;
    var resta = num1 - num2;
    var multi = num1 * num2;
    if (num2 !== 0) {
        var divi = num1 / num2;
        var modu = num1 % num2;
    }
//resultado a la var mensaje
    var mensaje = ""
    mensaje = mensaje + "  Usted ingresó los siguientes números:" + "<br/>";
    mensaje = mensaje + "     Número 1: " + num1 + "<br/>";
    mensaje = mensaje + "     Número 2: " + num2 + "<br/>";
    mensaje = mensaje + `     La suma de ${num1} mas ${num2} es igual a ${suma}` + "<br/>";
    mensaje = mensaje + `     La resta de ${num1} menos ${num2} es igual a ${resta}` + "<br/>";
    mensaje = mensaje + `     La multiplicación de ${num1} por ${num2} es igual a ${multi}` + "<br/>";
    if (num2 != 0) {
        mensaje = mensaje + `     La división de ${num1} entre ${num2} es igual a ${divi}` + "<br/>";
        mensaje = mensaje + `     Em módulo de ${num1} entre ${num2} es igual a ${modu}` + "<br/>";
    } else {
        mensaje = mensaje + `     Ya que el segundo número es igual a 0, no se puede calcular ni división ni módulo` + "<br/>";
    }
    //resultado por consola
    console.log(mensaje);
    //resultado en pantalla
    document.getElementById("titulo_resultado").innerHTML = "Matematicas";
    document.getElementById("resultados").innerHTML = mensaje;

    document.getElementById("borrador").style.display = "block";
}
//convierte grados celsius a kelvin y farenheit
function temperatura() {

    borra();
//toma de dato
    var tempc = prompt("ingrese un valor de temperatura en °C", 0);
//calculos
    var tempk = tempc * 1 + 273.15;
    var tempf = (tempc * 1.8) + 32;
//resultado a la var mensaje
    var mensaje = ""
    mensaje = mensaje + `     Temperatura en °C = ${tempc}` + "<br/>";
    mensaje = mensaje + `     Temperatura en K = ${tempk}` + "<br/>";
    mensaje = mensaje + `     Temperatura en °F = ${tempf}` + "<br/>";
    //resultado por consola
    console.log(mensaje);
    //resultados en pantalla
    document.getElementById("titulo_resultado").innerHTML = "Conversión de Temperaturas";
    document.getElementById("resultados").innerHTML = mensaje;

    document.getElementById("borrador").style.display = "block";
}
//convierte una cantidad de dias ingresados a años, semanas y dias
function dias() {

    borra();
//toma de dato
    var dias = prompt("ingrese una cantidad de días", 0);
//calculos
    var años = Math.floor(dias / 365)
    var diasrestantes = dias % 365;
    var sem = Math.floor(diasrestantes / 7);
    var diasrestantes = diasrestantes % 7;
//resultado a la var mensaje
    var mensaje = ""
    mensaje = mensaje + `     Usted ingresó ${dias}` + "<br/>";
    mensaje = mensaje + `     Eso representa:` + "<br/>";
    mensaje = mensaje + `     ${años} años, ${sem} semanas y ${diasrestantes} días` + "<br/>";
    //resultado por consola
    console.log(mensaje);
    //resultado en pantalla
    document.getElementById("titulo_resultado").innerHTML = "Conversión de Días.";
    document.getElementById("resultados").innerHTML = mensaje;

    document.getElementById("borrador").style.display = "block";
}
//calculo del promedio de 5 numeros ingresados
function promedio() {

    borra();
//toma de datos
    var num1 = prompt("Ingrese el primer número", 0);
    var num2 = prompt("Ingrese el segundo número", 0);
    var num3 = prompt("Ingrese el tercer número", 0);
    var num4 = prompt("Ingrese el cuarto número", 0);
    var num5 = prompt("Ingrese el quinto número", 0);
//calculos
    var suma = parseFloat(num1) + parseFloat(num2) + parseFloat(num3) + parseFloat(num4) + parseFloat(num5);
    var promedio = suma / 5;
//resultado a la var mensaje
    var mensaje = ""
    mensaje = mensaje + `Los números que usted ingresó fueron:` + "<br/>";
    mensaje = mensaje + `Número 1: ${num1}` + "<br/>";
    mensaje = mensaje + `Número 1: ${num2}` + "<br/>";
    mensaje = mensaje + `Número 1: ${num3}` + "<br/>";
    mensaje = mensaje + `Número 1: ${num4}` + "<br/>";
    mensaje = mensaje + `Número 1: ${num5}` + "<br/>";
    mensaje = mensaje + `La suma de ellos es: ${suma}` + "<br/>";
    mensaje = mensaje + `Y su promedio es: ${promedio}` + "<br/>";
    //resultado por consola
    console.log(mensaje);
    //resultado en pantalla
    document.getElementById("titulo_resultado").innerHTML = "Suma y promedio de 5 números ingresados.";
    document.getElementById("resultados").innerHTML = mensaje;

    document.getElementById("borrador").style.display = "block";
}