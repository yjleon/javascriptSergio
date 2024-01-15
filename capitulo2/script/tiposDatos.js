let nombre = "sergio";
let mensaje =  `aprendamos ${nombre}`;            
console.log(mensaje);
let intNr=1n;
let bigNr = 90071992547409920n;
let resultado = bigNr + intNr;
console.log(resultado);
// el nuevo dato adquirodo en java es el tipo symbol este sirve  cuando es importante 
//que las variables no sean iguales, aunque su valor y tipo sean iguales 
//Estos tipos de datos de símbolos pueden ser muy útiles como propiedades de objetos, 
//que veremos en el Capítulo 3, Valores múltiples de JavaScript.

let sym1 = Symbol("javascript es divertido");
let sym2 = Symbol("javascript es divertido");

console.log("estos dossimbolos son iugales; ", sym1 === sym2);

// DATOS NULOS SOL OES PARA DEJAR UNA VRAAIRABLE VACIA
let vacio = null;

console.log(typeof(bigNr));

// conviertiendo en diferente tipos de datos
let nrToStr=6;
nrToStr=String(nrToStr)

console.log(nrToStr)

let strToNr='12';
strToNr=Number(strToNr)
console.log(strToNr)

strToBool='cualquier cadena devolvera verdadero'
strToBool=Boolean(strToBool)
console.log(typeof(strToBool))

let nombremio = "sergio";
let edadmia = 26;
let Boon = true;
console.log(`Hola mi nombre es ${nombremio} , tengo ${edadmia} , y puedo codificar en javascript: ${Boon}`)

// operadores logicos
let x =1;
let y= 2;
let z= 3;
// and
console.log(x<y && y < z);
//or
confirm.log(x>y||y>Z)
//NOT
console.log(!(X<Y));

