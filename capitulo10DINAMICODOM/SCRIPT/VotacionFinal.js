document.addEventListener("DOMContentLoaded",function (
){
   let tabla = document.getElementById("infoRegis");
    let nombreAmigo="";
    let formu=document.getElementById("enviar");
    let fil=tabla.getElementsByTagName("tr")
    for (let i = 1; i < fil.length; i++) {
        fil[i].addEventListener("click",sumarVoto);
    }
    formu.addEventListener("click",e=>{
        e.preventDefault()
        nombreAmigo=document.getElementById("amigo").value;
        let filaTabla = document.createElement("tr")
        let nombreTabla=document.createElement("td");
        nombreTabla.innerText=nombreAmigo;
        let VotoTabla=document.createElement("td");
        VotoTabla.innerText="0";
        filaTabla.append(nombreTabla);
        filaTabla.append(VotoTabla);
        tabla.append(filaTabla);
        for (let i = 1; i < fil.length; i++) {
            fil[i].addEventListener("click",sumarVoto);
        }
    });
    function sumarVoto(){
        this.lastElementChild.innerHTML=Number(this.lastElementChild.textContent)+1;
    }
});

