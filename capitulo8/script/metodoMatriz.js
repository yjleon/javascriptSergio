//metodo forEach() para matrices
/*o. No necesitamos controlar 
el flujo del bucle aquí y no podemos quedarnos estancados en un punto determinado. Solo necesitamos especificar qué función debe ejecutarse para cada elemento. Y el elemento será ingresado para esta función. Esto se usa mucho, especialmente para un estilo de  programación más funcional en el que se encadenan muchos métodos, por ejemplo, para  procesar datos.
*/

let arr = ["grapefruit", 4, "hello", 5.6, true];
function printStuff(element, index) {
    console.log("Printing stuff:", element, "on array position:", index);
   }
   arr.forEach(printStuff);

//con filter buscamos hasta tener las coincidencias y me encuentra me ladevuelve recordar qeu esto se 
let arr1 = ["squirrel", 5, "Tjed", new Date(), true];
function checkString(element, index) {
 return typeof element === "string";
}
let filterArr = arr1.filter(checkString);
console.log(filterArr);
//MAPEO DE MATRIZES¨, sirve para cambiar todos lso valores o lo qu queramos
//basicamebnte eso hace un bucle foreach que recorre toda la matriz eso es maperar recorrer la matriz
let arr2=[1,2,3,4];
let map_arr=arr2.map(x=>x+1);
console.log(map_arr);
//convertir una cadena en matriz
let resultado = "Hola JavaScript";
let matrizResultado = resultado.split(" ");
console.log(matrizResultado);
//CONVERTIR UNA MATRIZ EN UN STRING SE USA JOIN me laas motrara separados por una como si quiero que sea separado no se por guines bajos lo ponemso dentro dle join("_"); y ya
let letras = ['a','b','c'];
let cadaLetra= letras.join();
console.log(cadaLetra);
//crando subcadenas con slice lo mismo qu pasabaen python cuando haciamos arr[0:2]
let str = "Creando un sub string";
let substr1 = str.slice(5);
let substr2 = str.slice(0,3);
console.log("1:", substr1);
console.log("2:", substr2);
