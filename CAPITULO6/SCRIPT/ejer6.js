//FUNCIONES OARA ESCRIBIR DFUNCIOBNES PONENMOS FUNCTION

function sayHellow(){
    let you = prompt("INBGRESA TU NOMBRE");
    console.log("HOLA " , you);
}

sayHellow();
// TMABIEN PUEDE PONER PARAMATROS SIMILAR A PYTHON ETC..
function addTwoNumbers(x, y) {
    console.log(x + y);
   }
addTwoNumbers(5,2);
//tambien podemos dejar parametros predeterminados para que no genere error si la llamamos sin argumentos
function addTwoNumbers1(x=2, y=5) {
    console.log(x + y);
   }
//funcion de flecha si requiere mas de un parametro los ponemos en parentesis si es solo un paramentro sin parentecis si se necesita escribir mas de una linea se pone {} y se escribe lo qeu necesite en las funciones de flecha ya se tiene el return por defecto
//osea no toca escribir return

let haciendoCosasArrow = x => console.log(x);
haciendoCosasArrow("genial");
let addTwoNumbers3 = (x, y) => console.log(x + y);
addTwoNumbers3(2,3);

const arr = ["ardilla", "alpaca", "amigo"];
//podemos usar funciones flecha con metodos ej
arr.forEach(e => console.log(e));
//operador spread ... son esos tres puntos que generan el operador spread el cual el cual es uan expreson que distribuye  los valores de otra 
//. El operador de extensión extiende la matriz a elementos individuales de la nueva  matriz. También se puede utilizar para enviar múltiples argumentos a una función,
let otraMatrix = ["so", "much", "fun"];
let message = ["JavaScript", "is", ...otraMatrix, "and", "very",
 "powerful"];

function addTwoNumbers4(x, y) {
 console.log(x + y); 
} 
let arr2 = [5, 9];
addTwoNumbers4(...arr2);
//Este operador evita tener que copiar una matriz o cadena larga en una función, lo que ahorra 
//tiempo y reduce la complejidad del código. Puede llamar a una función con múltiples 
//operadores de extensión. Utilizará todos los elementos de las matrices como entrada
function addFourNumbers(x, y, z, a) { 
    console.log(x + y + z + a); 
   } 
   let arr4 = [5, 9];
   let arr5 = [6, 7];
   addFourNumbers(...arr4, ...arr5);
//operador resta es el spread pero aplicado a parametros pro is llegamos a resivir mas de un parametro este lo vuelve una matriz y asi podremos trabajr con ella si lo necesitamos
function someFunction(param1, ...param2) {
    console.log(param1, param2);
   }
someFunction("hi", "there!", "How are you?");
//aca tambien se aplcia lo del return a las funciones en pytho netc
//FUNCIONES ANONIMAS SON LAS QUE NOTIENEN NINGUN NOMBRE Y ESTAS FUNCIONES SIEMRPRE SE LE ASIGNAN A UNA VARIABLE ES MUY PODEROSO EN JAVASCRIPT
let anonimaa= function () {
    console.log("aun que no es muy anonimoeee");
};
anonimaa();
//esta es uan funcion que hace algo y recibe como parametro otra funcion la cual la va a ejecutar utilizandola con esos parentesis 
//esta funcion la usaremos para ejecutar otra funcion anonima y esto se le llama devolucion de llamada esto servira para funciones ASINCRONAS QUE VEREMOS MAS ADELANTE
function doFlexibleStuff(executeStuff) {
    executeStuff();
    console.log("Inside doFlexibleStuffFunction.");
   }

// devolucion de llamada cuando llamamos una funcion y le pasamos como aprametro una funcion anonima esta ejecutara tambien la funcion anonima
let anotherFunctionVariable = function() {
    console.log("Another anonymous function implementation.");
   }
doFlexibleStuff(anonimaa);



