// Sumar
function sumar() {
    // Leer los valores de los inputs
    const sumando1 = document.getElementById("sumando1").value;
    const sumando2 = document.getElementById("sumando2").value;
    // Sumar los dos números
    const resultado = parseInt(sumando1) + parseInt(sumando2);
    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = resultado;
    }

console.log(2 + 2);
console.log("Hello, World!");
console.log("This is a JavaScript sandbox environment.");
