var textoSobre = document.getElementById("textoSobre");

function AjustarArea(texto) {
    textoSobre.style.height = "1em";
    textoSobre.style.height = (20 + texto.scrollHeight)+"px";
  }

function validacao(){
  if(document.getElementById("nome").value == ""){
    document.getElementById("nome").style.borderColor = "#FF7272";
  }
  if(document.getElementById("seletor").value == "Selecione"){
    document.getElementById("seletor").style.borderBottom = "2px solid #FF7272";
  }
  if(document.getElementById("idade").value == ""){
    document.getElementById("idade").style.borderColor = "#FF7272";
  }
  if(document.getElementById("cargo").value == ""){
    document.getElementById("cargo").style.borderColor = "#FF7272";
  }
  if(document.getElementById("cidade").value == ""){
    document.getElementById("cidade").style.borderColor = "#FF7272";
  }
  if(document.getElementById("textoSobre").value == ""){
    document.getElementById("textoSobre").style.borderColor = "#FF7272";
  }
  else{
  }
}

function mudaCorInput(){
  let input = document.getElementsByTagName("input");
    for(var i=0; i < 4; i++){
      input[i].style.borderBottomColor = "#8E81E8"
    }
      document.getElementById("textoSobre").style.borderColor = "#8E81E8";
      document.getElementById("seletor").style.borderBottom = "none";
}
