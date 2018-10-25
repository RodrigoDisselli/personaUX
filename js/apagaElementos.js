var infoCadastrais = document.getElementsByClassName("info-cadastrais");
var textoSobre = document.getElementById("textoSobre");
var inputs = document.getElementsByClassName("adicionar");

function apagarDadosCadastrais(){
    if (infoCadastrais[0].style.display === "none") {

        for(i = 0; i < infoCadastrais.length; i++){
            infoCadastrais[i].style.display = "block";
        }
        
    } else {
        for(var i = 0; i < infoCadastrais.length; i++){
            infoCadastrais[i].style.display = "none";
        }
    }
    apagaTextoSobre();
    apagarBotoes();
}

function apagaTextoSobre(){
    textoSobre.style.display === "none" ?
     textoSobre.style.display = "block"
     : textoSobre.style.display = "none"
}

function apagarBotoes(){
    if (inputs[0].style.display === "none") {

        for(var i = 0; i < inputs.length; i++){
            inputs[i].style.display = "block";
        }

        
    } else {
        for(var i = 0; i < inputs.length; i++){
            inputs[i].style.display = "none";
        }
    }
}