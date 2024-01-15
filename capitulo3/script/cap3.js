//MATRICES o arreglos aplica las mismas reglas que en python 
let arr22=[1,2,3,4,5,"hoa"];
let listaCompras=["leche","pan","manzanas"];
console.log(listaCompras.length);
listaCompras[1]="plantanos";
console.log(listaCompras)
//agregar elementos y reemplazarlos
//metodo push lo agrega al final de la lista y nos devuelve la longitud de la nueva lista que podemos almacenarla en una variable
let longitudNuevaLista=listaCompras.push("mandarina","naranja");
console.log(longitudNuevaLista);
//agregr elementos en un indice determinado se usa splice
listaCompras.splice(2,0,"cuadrado","TRAPEZOIDE");
// los dos primeros argumentos son el 2 indica desde el indice que queremos comenzar aagregarlos en este caso el dos 
//y el cero 0 es la cantidad de parametros que queremos eliminar comenzando en nuestro indice inicial previamente difenido que era el 2 
console.log(listaCompras);
listaCompras.splice(2,3,"cuadrado","TRAPEZOIDE")
console.log(listaCompras)
// si le paso un valor de mas de lo que le estoy metiendo por ejemplo este caso pues eliminara 3 y solo ingresara 2 
let arr5=[1,2,3]
let arr6=[4,5,6]
//metodo concat unir dos matrices en una 
let arr7=arr5.concat(arr6);
console.log(arr7);
// tambien podemos agregarle valores c on concact al array pero mejor usamos el push

//elminacion de elementos tenemos el poop que elimina el ultimo
arr7.pop();
console.log(arr7)
//para eliminar el primero usamos shift
arr7.shift()
// con splice tambien podemos eliminar elementos desde la posicion inicial en este caso 1 hasta donde queramos que elimine osa la posicion final ej
arr7.splice(1,3);
console.log(arr7);
//para encontrar un valor en una matriz tenemos que usar find  y dentro de find hacer una fuciooon para que me diga si esta o no ya uqe find buscara elemento por elemento para la coinciddencia uqe pongamos
//si solo pongo el find genera error por eos toca poner la funcion diciendo que estamos buscando
let arr8=[1,2,3,4,5,6,7,8,9,3]
//para esto podenos usar funciones anonimas que es la de la flechita o funciones delcaradas creo que se llama osea las que se guardan en una variable puedo estar en un error encuanto el nombre de la segunda
//es siempre mejor usar funcion anonima
let findValue=arr8.find(e=>e===6);
console.log("usando funcion anonima",findValue)
//y esta es la otra forma que no es ocn una funcion anonima
let findValue2=arr8.find(function(e){return e===6});
console.log("sin usar funcin anonima",findValue2);
//encontrar indices si no lo encuentra me devolvera un -1 si lo encuetntra mas de una vez me devuelve el indice de la priemra aparicion
let indiceposi=arr8.indexOf(10);
console.log(indiceposi);
//digamos que se tiene mas de una vez se puede hacer una busqueda indicando desde que indice comenzar
//primero se le pasa lo que busca luego desde inice que iniciara
let segundaposi=arr8.indexOf(2,3);
//para encontrar la ultima aparicion se hace con lastiindexof()
//ordenar matrices con sort
let nombres=['sergio','alicia','yamid','ana','camila'];
console.log(nombres.sort());
//poara ordenarlos de mayor a menor se hace con reverse
console.log(nombres.reverse())