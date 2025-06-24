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

//APARTADO 3 VARIABLES
var descuento = 0.9; // Descuento del 10%
var iva = 0.21; // IVA del 21%
console.log(100 * descuento * iva + 30 * descuento * iva); // Cálculo del descuento y el IVA
//Una variable es un espacio en memoria que se utiliza para almacenar un valor.

var precio1 = 333; // Precio del primer producto
var precio2 = 30; // Precio del segundo producto

console.log(precio1 * descuento * iva +
             precio2 * descuento * iva); // Cálculo del precio total con descuento e IVA

//En JavaScript, se pueden declarar variables utilizando las palabras clave var, let o const.
//Let y const

let descount = 0.9; // Descuento del 10% utilizando let
let iva1 = 0.21; // IVA del 21% utilizando let
let price1 = 200; // Precio del primer producto utilizando let
let price2 = 25; // Precio del segundo producto utilizando let

iva1 = 0.22; // Modificación del IVA utilizando let
console.log(price1 * descount * iva1 + price2 * descount * iva1); // Cálculo del precio total con descuento e IVA utilizando let

//const solo se utiliza para declarar constantes, es decir, valores que no cambian a lo largo del tiempo.
//Por ejemplo, si se quiere declarar un descuento que no cambia, se puede utilizar const.

//Const Objetos
//Los objetos son colecciones de propiedades y métodos que se utilizan para almacenar datos relacionados.
//Podemos tener objetos dentro de objetos, lo que nos permite crear estructuras más complejas.
const client = {
    name: "Ana",
    age: 28,
    nif: "87654321B",
    address: {
        street: "Avenida Siempre Viva",
        number: 742,
        city: "Springfield",
        postalCode: "54321"
    },
};

client.name = "Ana María"; // Modificación del nombre del cliente
console.log(client); // Imprime el objeto client

const book = {
    title: "Thee Catcher in the Rye",
    autor: "J.D. Salinger",
    year: 1951,
    genre: "Fiction",
}

//libro = {
    title: "Spain"
//} // Se crea un nuevo objeto libro, nos dará error porque libro no está definido como const.

book.year = 1952; // Modificación del año del libro
console.log(book); // Imprime el objeto book

//Tipos de variables
let nombre = "Carlos";
let apellido = "Gómez";
console.log(nombre + " " + apellido); // Imprime el nombre y apellido

// nombre = {
 //   id: 1,
   // ciudad: "Madrid",
//}

// console.log(nombre + '' + apellido); // Dará error porque nombre ahora es un objeto y no una cadena de texto

//BlackTicks
const nom1 = "Juan";
const ape1 = "Vall";

const nomCompleto = `El nombre es ${nom1} y el apellido es ${ape1}`; // Utiliza template literals para concatenar el nombre y apellido
console.log(nomCompleto); // Imprime el nombre completo

//Ejercicio BlackTicks
const n1= "Anastasija";
const city = "Barcelona";
const age = 25;

const person = `Mi nombre es ${n1}, tengo ${age} años y vivo en ${city}.`;
console.log(person); // Imprime la información de la persona


//BlackTicks Ejercicio recetas

//Recetas
// Ensalada de alubias con aguacate y huevo Ingredientes: alubias, aguacate, huevo, cebolla, tomate, lechuga. 
// Preparación: cocer las alubias y dejar enfriar. 
// Mezclar con aguacate en cubos, 
// huevo cocido en rodajas, cebolla en juliana, tomate en cubos y lechuga troceada. Aliñar con aceite de oliva y vinagre.
// Ensalada de setas y bacon
// Ingredientes: setas, bacon, lechuga, tomate, cebolla, queso.
// Preparación: saltear las setas y el bacon hasta que estén dorados. Mezclar con
// lechuga troceada, tomate en cubos, cebolla en juliana y queso rallado. Aliñar con
// aceite de oliva y vinagre.
// Ensalada de arándanos y pollo
// Ingredientes: arándanos, pollo cocido, lechuga, zanahoria, queso, nueces.
// Preparación: mezclar los arándanos con el pollo cocido en cubos, lechuga troceada,zanahoria rallada, queso rallado y nueces picadas. 
// Aliñar con una vinagreta demiel y mostaza.
// Ensalada de maíz y piña
// Ingredientes: maíz, piña en cubos, lechuga, pepino, cebolla, aguacate.
// Preparación: mezclar el maíz con la piña en cubos, lechuga troceada, pepino en
// rodajas, cebolla en juliana y aguacate en cubos. Aliñar con una vinagreta de
// aceite de oliva y vinagre.
// Ensalada de mango y queso feta
// Ingredientes: mango en cubos, queso feta, lechuga, cebolla, pepino, aceitunas.
// Preparación: mezclar el mango en cubos con el queso feta desmenuzado, lechuga
// troceada, cebolla en juliana, pepino en rodajas y aceitunas. Aliñar con una
// vinagreta de limón y aceite de oliva.

console.log(`%cEnsalada de alubias con aguacate y huevo`, "color: blue; font-size: 18px" );