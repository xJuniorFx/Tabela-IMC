
var paciente = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){

    var alvo = event.target.parentNode;

    console.log(alvo);
    alvo.classList.add("fadeOut");
    

    setTimeout(function(){

        alvo.remove();
        
    }, 650);

});