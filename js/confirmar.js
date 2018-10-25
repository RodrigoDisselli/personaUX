var botaoConfirmar = document.getElementById("confirmar");
var botaoDownload = document.getElementById("download");
persona = new Persona();
let state = 0;

botaoConfirmar.addEventListener("click", confirmar);
botaoDownload.addEventListener("click", download);

botaoConfirmar.style.backgroundColor = "#54F65F"
botaoDownload.style.display = "none"

function download(){
    document.getElementById("show").style.display = "block"
    apagarContainer();
    window.print();
}

function confirmar(){

    if((document.getElementById("nome").value != "")&&(document.getElementById("idade").value != "")
    &&(document.getElementById("cargo").value != "")&&(document.getElementById("cidade").value != "")
    &&(document.getElementById("textoSobre").value != "")&&(document.getElementById("seletor").value != "Selecione")){
        
        state = setState(state);
        mudaCorInput();
        setState(state);
        mostrarContainer();
        addCadastrais();
        addSobre();
        apagarDadosCadastrais();
        mudaCorBotaoSalvar(state);
        apagarBotaoDownload();
        printarTela();
        
    }else{
        alert("A persona deve ter os dados básicos cadastrados!")
        validacao();
    }
    
}
function setState(state){

    if(state == 0){
        document.getElementById("seletor").style.display = 'block';
        limpaDadosCadastrais();
        document.getElementById("listaSobre").style.display = 'none';
        document.getElementById("dadosCadastrais").style.display = 'none';
        document.getElementById("salvar").style.display = 'none';
        document.getElementById("limpar").style.display = 'block';
        return state = 1;

    }if(state == 1){
        document.getElementById("seletor").style.display = 'none';
        document.getElementById("listaSobre").style.display = 'block';
        document.getElementById("dadosCadastrais").style.display = 'block';
        document.getElementById("salvar").style.display = 'block';
        document.getElementById("limpar").style.display = 'none';
        persona.zeraAllData();
        return state = 0;

    }
    
}

function mostrarContainer(){
    var capture =  document.getElementById("capture");
    capture.style.display = "block"
}

function apagarContainer(){
    var capture =  document.getElementById("capture");
    capture.style.display = "none" 
}

function mudaCorBotaoSalvar(state){
    if(state == 1){
        botaoConfirmar.textContent="Voltar";
        botaoConfirmar.style.backgroundColor = "#F67B54";
    }if(state == 0){
        botaoConfirmar.textContent="Confimar";
        botaoConfirmar.style.backgroundColor = "#54F65F";
    }
}

function apagarBotaoDownload(){

   botaoDownload.style.display === "none"?
    botaoDownload.style.display = "block"
    : botaoDownload.style.display = "none";

}

function limpaDadosCadastrais(){
    
    var textNome = document.getElementById("textNome")
    var textIdade = document.getElementById("textIdade")
    var textCargo = document.getElementById("textCargo")
    var textCidade = document.getElementById("textCidade")

    textNome.textContent = '';
    textIdade.textContent = '';
    textCargo.textContent = '';
    textCidade.textContent = '';
}