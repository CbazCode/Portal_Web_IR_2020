let mostrar = document.getElementById("mostrarpass");
let ocultar = document.getElementById("ocultarpass");
var tipo = document.getElementById("pass");

mostrar.addEventListener("click",()=>{       
        if(tipo.type == "password"){
            tipo.type = "text";
            mostrar.style.display="none";
            ocultar.style.display="inline-block";
            tipo.focus();
        }
})
ocultar.addEventListener('click',(event)=>{  
     
    if(tipo.type == "text"){
        tipo.type = "password";
        mostrar.style.display="inline-block";
        ocultar.style.display="none";
        tipo.focus();
    }
})