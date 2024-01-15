let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"]; 
for (let i = 0; i <= 5; i++){ 
 names.push("...");
}
console.log(names);
//for each pero aca uso of debido a que no es un objeto que estoy tratando
let names1 = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let nameee of names1){
   console.log("obteniendo los valores de un array con el for of",nameee)
}
//for each con in es para objetos que tengna propiedades como en este caso toma en cada iteracion toma model,make,yeart,color 
console.log("\n");
let car = {
   model: "Golf",
   make: "Volkswagen",
   year: 1999,
   color: "black",
  };
  for (let prop in car){
   console.log("obteniendo el balor de las propiedades con el for in ",car[prop]);
  }
// para obtener las porpiedades pues solo hacemos el prop
for (let prop in car){
   console.log("bteniendo solo el nombre de las propiedades con el for in ",prop);
  }
//convertir objetos en matriz 
//1) convertir la clave del objeto en matriz
//2) convertir los valoresdel obejto en una matriz
//3) Convertir las entradas clave-valor en una matriz ( la cual contiene matrices con dos elementos:claves elemento del objeto , clave del objeto y valor del objeto)
let carro = {
   model: "Golf",
   make: "Volkswagen",
   year: 1999,
   color: "black",
  };
console.log("\n");
//1) para hacer la primero usamos la funcion object.keys(objetoarrecoorrer); y esto volvera las pripiedades del objeto en un array

let arrKeys=Object.keys(carro);
console.log(arrKeys);
//tambien podemos recorrer losvalores de la matriz usando el for of recordar para matricers el for each es el for of y para objetos es el for in
for (const cave of arrKeys) {
    console.log(cave);
}

//2) convertir los valores del bojeto en matriz

let arrValue = Object.values(carro);
for (const value of arrValue) {
    console.log(value);
}
//object.entries(objetoarecorrer) me da una lista con la tupla clave valor
let arrCom=Object.entries(carro);
console.log(arrCom);
//para que nos entrege como debe ser entregada con clave valor al usar arrcom nos esta pasando dos valores pues guardamos dos valores en esa matriz y la imprimimos
for (const [clave,valor] of arrCom) {
    console.log(clave,":",valor);
}


