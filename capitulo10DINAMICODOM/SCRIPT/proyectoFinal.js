document.addEventListener("DOMContentLoaded",e=>{
    let iberar= document.getElementsByClassName("myText");
    let eventos = document.getElementsByClassName("title");
    for (let i = 0; i < eventos.length; i++) {
        eventos[i].addEventListener("click",mostrar);
    }
    function mostrar(){
        let elegeme = this.nextElementSibling;
        if (elegeme.className==="myText") {
            elegeme.setAttribute("class", "active");
        }else{
            elegeme.setAttribute("class", "myText");
        }
    }



});