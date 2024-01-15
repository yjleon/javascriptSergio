//para manipular los elementos del html en el script usamos el querySelector() , o el querySelectorall() y le podemos pasar id , nombre de etiqueta , clase etc... recordar usar el documen.querySelector()

//Vamos a seleccionar el elemento h2 con querySelector(). Por lo tanto, si hay más de uno,  simplemente tomará el primero:
const ele1= document.querySelector("h2");
console.log(ele1);
//Si desea seleccionar varios elementos, puede utilizar querySelectorAll(). Este método devolverá todos los elementos que coincidan con el selector en una matriz. En este ejemplo, buscaremos instancias de la clase de salida , lo cual se hace anteponiendo el nombre de la clase con un punto.
const eles=document.querySelectorAll(".output");
console.log(eles);
