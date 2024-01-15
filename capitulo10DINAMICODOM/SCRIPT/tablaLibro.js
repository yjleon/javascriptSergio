document.addEventListener('DOMContentLoaded', (event) => {
const nombres = ["SERGIO","YAMID","MAQUINOTE","KAISER"];
let mensaje= document.getElementById("message");
let salida= document.getElementById("output");
let tablaSalida;
let colNombre;
let filaTabla;
let colNumero;

function build(){
    let bienvenida = document.createElement('h1');
    bienvenida.innerHTML="hola pedazos de <span>CRACKS</span>";
    mensaje.appendChild(bienvenida);
    tablaSalida = document.createElement('table');
    filaTabla = document.createElement('tr')
    colNombre = document.createElement('td')
    colNumero = document.createElement('td')

    // colNombre.textContent="NOMBRES";
    // colNumero.textContent="NUMERO";
    // tablaSalida.setAttribute("id","html");
    // filaTabla.appendChild(colNumero);
    // filaTabla.appendChild(colNombre)
    // tablaSalida.appendChild(filaTabla);
    //salida.appendChild(tablaSalida)


    for (let i = 0; i < nombres.length; i++) {
        filaTabla = document.createElement('tr');
        colNombre = document.createElement('td');
        colNumero = document.createElement('td');
        filaTabla.className="box";

        filaTabla.setAttribute("nombre",nombres[i]);
        filaTabla.setAttribute("posicion",i+1);
        colNombre.textContent=nombres[i];
        colNumero.textContent=i+1;
        filaTabla.appendChild(colNombre);
        filaTabla.appendChild(colNumero);
        tablaSalida.appendChild(filaTabla);
        filaTabla.setAttribute("onclick",e=> { datosRescate(this); })

        filaTabla.onclick=function() { datosRescate(this); };
    }

    salida.appendChild(tablaSalida);
}
    function datosRescate(el){
        let nombre = el.getAttribute("nombre");
        let posicion = el.getAttribute("posicion");
        console.log(`${nombre}`)
        mensaje.innerHTML=`<p>${nombre} esta en la posicion ${posicion}</p>`;
    }
build();




});
