var img= document.getElementById("img");
var seletor= document.getElementById("seletor");

seletor.addEventListener("change", setImagem);

function setImagem(){
    switch(seletor.value) {
        case "Masculino":
                homemAdulto();
            break;
        case "Feminino":
                MulherAdulta();
            break;
        default:
            img.src = "";
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function homemAdulto(){
    let numero = getRandomIntInclusive(0, 9);
    img.src = "../persona/img/homemAdulto/00" + numero + "m.jpg"
}

function MulherAdulta(){
    let numero = getRandomIntInclusive(0, 9);
    img.src = "../persona/img/mulherAdulta/00" + numero + "f.jpg"
}