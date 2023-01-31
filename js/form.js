var botaoAdiciona = document.querySelector("#adicionar-paciente");

//Adicionando paciente
botaoAdiciona.addEventListener("click", function(event){
   
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    //Extraindo informações do form
    var paciente = formValues(form);

    //validando peso e altura do paciente
    var erros = validaPaciente(paciente);

    if(erros.length > 0){

        exibeMensagensErros(erros);
        
        return;
    }

    adicionaNaTabela(paciente);

    form.reset();

    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";

});

function adicionaNaTabela(paciente){
    //criando tr e td paciente
    var pacienteTr = criaPaciente(paciente);
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

};

function exibeMensagensErros(erros) {
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){ 
        var li = document.createElement("li"); 
        li.textContent = erro; 
        ul.appendChild(li);
        
    });
        
}

function formValues(form) {

    var paciente ={

        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)

    }

    return paciente;
}

function criaPaciente(paciente){

    var pacienteTr = document.createElement("tr");

    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(pacienteInfo(paciente.nome, "info-nome"));
    pacienteTr.appendChild(pacienteInfo(paciente.peso, "info-peso"));
    pacienteTr.appendChild(pacienteInfo(paciente.altura, "info-altura"));
    pacienteTr.appendChild(pacienteInfo(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(pacienteInfo(paciente.imc, "info-imc"));
    
   return pacienteTr;

}

function pacienteInfo(info,classe) {
    
    var td = document.createElement("td");
    td.textContent = info;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("Nome em branco");
    }

    if(paciente.peso.length == 0){
        erros.push("Peso em branco");
    }

    if(paciente.altura.length == 0){
        erros.push("Altura em branco");
    }

    if(paciente.gordura.length == 0){
        erros.push("% de gordura em branco");
    }

    if(!validaPeso(paciente.peso)){    
        erros.push("Peso inválido");
    }

    if(!validaAltura(paciente.altura)){     
        erros.push("Altura inválida");
    }

    return erros;
}



    
