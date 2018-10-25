var botaoSalvar = document.getElementById("salvar");

botaoSalvar.addEventListener("click", salvar);

function salvar(){
    persona.getAllData();
    console.log(persona);
}

