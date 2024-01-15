//me mostrata todo lo que esta dentro del body
console.dir(document.body)
//console.dir(document.body.childNodes[3].childNodes[3].childNodes[1].children.treasure);
//el parentElement me da el padre
console.log(document.body.children.forest.children.tree2.parentElement);
//con el sibling son los elementos que estan al mismo nuivel 
document.body.children.forest.children.tree2.previousElementSibling;
//al utilizqar greeting es el identificador de id que tiene un hijo que esta dentro del body y que tiene el id greeting es basicamente llo que hace el queryselector

//tambien podemos cambiar el texto que tenga adentro con textXContent o con innertext
//document.body.children.greeting.textContent="holaeeea";
document.body.children.greeting.innerText="holwweqaeeea";
//pero si queremos modificar la etiqueta html que contenga pues usamos innerHTML asi ponemos la etiqueta que necesitemos y comenzamos a modificar ej
document.body.children.greeting.innerHTML="<p>hol<strong>wweq</strong>aeeea</p>";
//AHOA SELEECIONAREMOS ELEMENTOS CON EL ID ~~
const loqueda=document.getElementById("two");
//esto meretornara todo el html <div id="two" class="example">Hi!</div>

console.log(loqueda);
//ara acceder a elementos de html por etiqueta usamos la funcion siguente la cual nso retornara todos lso elementos que encuentre en un arreglo tipo matrix htmlCollection
const etiq=document.getElementsByTagName("div");
console.log(etiq);
//para acceder a los eleemntos podemos acceder con el indice ej
console.log(etiq.item(1));
//y rambien podemos acceder a ellos segun su id de html en este caso lo haremos con el 3
console.log(etiq.namedItem("three"));
//aun que solo hala una etiqueta tambien devolvera un tagcoleccion
let elh1=document.getElementsByTagName("h1")
console.log(elh1)
//ahora para acceder por clase se usa ocument.getElementsByClassName para acceder also que compartan al etiqueta de clase es mejor que el queryselectorall ya que es mas rapido
const porclases = document.getElementsByClassName("example");
console.log(porclases)
//todo el QERYSELECTORALL() Y EL QUERYSELECTOR() HACE LO MISMO QUE LOS DE ARRIBA SE PUDE USAR EL QUE GUSTE MAS PERO EN TIEMPOS DE CARTA ES MEJRO SER ESPECIFICO SI GETELEMENTID() ETC...

//CONTROLADOR DE CLICK EN HTML USAMOS EN EL RECUADRO QEU QUERAMOS Y LA PESAMOS UAN FUNCION A JAVASCRIP USANDO .ONCLICK
document.getElementById("click").onclick = e=>(alert("eso duele cabron"));



