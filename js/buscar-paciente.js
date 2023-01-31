var buscaPaciente = document.querySelector("#busca-paciente");

buscaPaciente.addEventListener("click", function(){

    console.log("Buscando paciente...");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/mmgcnerds/api-pacientes/main/api-pacientes.json")
    
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach( function(paciente){
                adicionaNaTabela(paciente);
            });
        } else {
           
            console.log(xhr.responseText);

            erroAjax.classList.remove("invisivel");
        }
        

    });

    xhr.send();

});

