var limpar = document.getElementById("limpar");

limpar.addEventListener("click", limpaTudo);

function limpaTudo(){
    var confirma = confirm("Isso vai apagar todas as informações! Esta ação não pode ser desfeita");

    if(confirma == true){
        var element = document.getElementsByClassName("item-adicionado");
        var input = document.getElementsByTagName("input");

        for (var i = element.length - 1; i >= 0; i--) {
            element[i].parentNode.removeChild(element[i]);
        }

        for (var i = input.length - 1; i >= 0; i--) {
            input[i].value = '';
        }

        document.getElementById("textoSobre").value='';

    }else{

    }

    
}
