var addFeliz = document.getElementById("addFeliz");
var addTriste = document.getElementById("addTriste");
var addObjetivo = document.getElementById("addObjetivo");
var addPersonalidade = document.getElementById("addPersonalidade");
var addConhecimento = document.getElementById("addConhecimento");

addFeliz.addEventListener("click", addLineFeliz);
addTriste.addEventListener("click", addLineTriste);
addObjetivo.addEventListener("click", addLineObjetivo);
addPersonalidade.addEventListener("click", addLinePersonalidade);
addConhecimento.addEventListener("click", addLineConhecimento);

function addLineFeliz(){
    addLine("listaFeliz", "valueFeliz", "item-listaFeliz");
}

function addLineTriste(){
    addLine("listaTriste", "valueTriste", "item-listaTriste");
}

function addLineObjetivo(){
    addLineObjetivo();
}

function addLinePersonalidade(){
    addLine("listaPersonalidade", "valuePersonalidade", "item-listaPersonalidade");
}

function addLineConhecimento(){
    addLine("listaConhecimento", "valueConhecimento", "item-listaConhecimento");
}

function addLine(nomeLista, nomeCampo, classe){
    let input = document.getElementById(nomeCampo).value;
    
    if(input!=''){
        
        var node = document.createElement("LI");
        var textnode = document.createElement("textarea");

        textnode.value = input;
    
        node.appendChild(textnode);
        document.getElementById(nomeLista).appendChild(node);

        node.classList.add("item-adicionado");
        textnode.setAttribute("class", classe)
        textnode.classList.add("lista-input");
        
        node.addEventListener("change", function() {
            if(textnode.value==''){
                this.parentNode.removeChild(this);
            }
        });

        if (input.length >= 33){
            textnode.style.height =  (textnode.scrollHeight - .5) + "px";

        }

        textnode.addEventListener("change", function() {
            if(textnode.value==''){
                this.parentNode.removeChild(this);
            }
        });
        

        document.getElementById(nomeCampo).value = '';
        document.getElementById(nomeCampo).select();

        }
        
}

function addLineObjetivo(){
    let input = document.getElementById("valueObjetivo").value;
    
    if(input!=''){
        
        var node = document.createElement("LI");
        var textnode = document.createElement("textarea");

        textnode.value = input;
    
        node.appendChild(textnode);
        document.getElementById("listaObjetivo").appendChild(node);

        node.classList.add("item-adicionado");
        textnode.setAttribute("class", "item-listaObjetivo")
        textnode.classList.add("lista-input");
        
        node.addEventListener("change", function() {
            if(textnode.value==''){
                this.parentNode.removeChild(this);
            }
        });

        if (input.length >= 64){
            textnode.style.height = (textnode.scrollHeight - .5) + "px";

        }

        textnode.addEventListener("change", function() {
            if(textnode.value==''){
                this.parentNode.removeChild(this);
            }
        });
        
        textnode.addEventListener("change", function() {
            
            if(textnode.value==''){
                this.parentNode.removeChild(this);
            }
        });

        document.getElementById("valueObjetivo").value = '';
        document.getElementById("valueObjetivo").select();

        }
        
}

function addCadastrais(){

    var textNome = document.getElementById("textNome")
    var textIdade = document.getElementById("textIdade")
    var textCargo = document.getElementById("textCargo")
    var textCidade = document.getElementById("textCidade")

    textNome.textContent = dados[1].value;
    textIdade.textContent = dados[2].value;
    textCargo.textContent = dados[3].value;
    textCidade.textContent = dados[4].value;
}

function addSobre(){

    var textSobre = document.getElementById("listaSobre")
    textSobre.innerHTML = dados[5].value;
}