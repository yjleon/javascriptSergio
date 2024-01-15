// los eventos en javascript se pueden añadir con addevenistener y se le dice que tipo de evento debe star a la escucha
//ejemplo:document.getElementById("square").addEventListener("click",
// changeColor); añadimos un evento en una sola linea al elemento square
document.addEventListener("DOMContentLoaded",e=> {

    let divv=document.querySelectorAll("div")
    let botones = document.querySelectorAll("button");

    for (let i = 0; i < botones.length; i++) {
        botones[i].setAttribute("id",`boton`+`${i+1}`);
        botones[i].addEventListener("click",salida);

    }

    function salida(){
        console.log(this.textContent);
        if (this.id==="boton1"){
            let el =document.createElement("p");
            el.innerText=Math.round(Math.random()*100);
            divv[0].appendChild(el);
            console.log("entro");
        }

    }


})


