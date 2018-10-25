document.getElementById("valueFeliz").addEventListener("keyup", function() {
    evento = event.keyCode;
    enterSubmit("addFeliz", evento);
});

document.getElementById("valueTriste").addEventListener("keyup", function() {
    evento = event.keyCode;
    enterSubmit("addTriste", evento);
});

document.getElementById("valueObjetivo").addEventListener("keyup", function() {
    evento = event.keyCode;
    enterSubmit("addObjetivo", evento);
});

document.getElementById("valuePersonalidade").addEventListener("keyup", function() {
    evento = event.keyCode;
    enterSubmit("addPersonalidade", evento);
});

document.getElementById("valueConhecimento").addEventListener("keyup", function() {
    evento = event.keyCode;
    enterSubmit("addConhecimento", evento);
});

function enterSubmit(nomeAdd, evento){
    var add = document.getElementById(nomeAdd);
        if (evento === 13) {
            add.click();
        }
}