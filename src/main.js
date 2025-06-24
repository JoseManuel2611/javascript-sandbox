// This is a simple JavaScript sandbox environment
console.log(2 + 2);
console.log("Hello, World!");
console.log("This is a JavaScript sandbox environment.");

//Calculo de la compra
console.log(53 - 17);
console.log(8 * 7);


//Tipos de datos
console.log(23);
console.log(2 + 2); //Suma los números
console.log("2" + "2"); // Concatena las cadenas de texto
console.log("2" - "2"); // Resta las cadenas de texto, lo que da como resultado 0
console.log("2" + 2); // Concatena las cadenas de texto, lo que da como resultado "22"

//Video
console.log(3 * 2); // Multiplica los números
console.log("3" * 2); // Multiplica la cadena de texto "3" por el número 2, lo que da como resultado 6
console.log("3" * "2"); // Multiplica las cadenas de texto "3" y "2", lo que da como resultado 6

//Suma con decimales
console.log(2.5 + 3.5); // Suma de números decimales
//area de un círculo
console.log(Math.PI * Math.pow(4, 2)); //FUnción Math.PI para obtener el valor de pi y Math.pow para elevar 4 al cuadrado

//Booleanos
console.log(true); // Valor booleano verdadero
console.log(false); // Valor booleano falso

//Objetos
console.log({
    nombre: "Juan",
    edad: 30,
    nif: "12345678A",
    dirección: {
        calle: "Calle Falsa",
        número: 123,
        ciudad: "Ciudad Imaginaria",
        codigoPostal: "12345"
    }
});

//Undefined y Null
//Se utiliza undefined para indicar que una variable no ha sido asignada o no tiene un valor definido.
console.log(undefined); // Valor undefined
//Se utiliza null para indicar que una variable tiene un valor nulo o vacío.
console.log(null); // Valor null
console.log(noexisto); // Intento de acceder a una variable no definida, lo que generará un error