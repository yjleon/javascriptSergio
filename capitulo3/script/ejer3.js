let listaCompras=[];
listaCompras.push("leche","pan","manzanas");
listaCompras.splice(1,1,"platanos","huevos");
console.log(listaCompras.pop());
listaCompras.sort()
let indiceLeche=listaCompras.indexOf("leche");
let estaLeche=listaCompras.find(e=>e==="leche");
listaCompras.splice(1,0,"zanahoria","lechuga");
let neuvaLista=["jugo","pop"];
let listaFinal=listaCompras.concat(neuvaLista);
listaFinal=listaFinal.concat(neuvaLista)
listaFinal=listaFinal.concat(neuvaLista)
console.log(listaFinal);