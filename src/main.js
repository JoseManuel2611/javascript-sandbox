function sumar() {
    // Leer los valores de los inputs
    const sumando1 = document.getElementById("sumando1").value;
    const sumando2 = document.getElementById("sumando2").value;

    // Sumar los valores
    const resultado = parseInt(sumando1) + parseInt(sumando2); 
    /* parseInt convierte el string sumando1
    y sumando2 a número */

    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = HTML;
}

const botonSumar = document.getElementById("sumar");
botonSumar.addEventListener("click", sumar);
/* nos permite asociar una función (un evento) a ese
botón (es decir, cada vez que el usuario pulse el botón, 
se ejecutará la función que le hemos indicado). */