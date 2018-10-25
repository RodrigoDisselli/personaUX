class Persona{

    constructor() {
        this.persona ={
            nome: '',
            sexo: '',
            idade: '',
            cargo: '',
            cidade: '',
            sobre: '',
            oQueODeixaFeliz: [],
            oQueOAborrece: [],
            objetivo: [],
            personalidade: [],
            conhecimento: []
        }
      }

    getDadosCadastrais(){
        this.persona.nome = document.getElementById("textNome").textContent;
        this.persona.sexo = document.getElementById("seletor").value;
        this.persona.idade = document.getElementById("textIdade").textContent;
        this.persona.cargo = document.getElementById("textCargo").textContent;
        this.persona.cidade = document.getElementById("textCidade").textContent;
    }

    getSobre(){
        this.persona.sobre = document.getElementById("listaSobre").textContent;
    }

    getOQueODeixaFeliz(){
        var lista = document.getElementsByClassName("item-listaFeliz");
        for(var i=0; i < lista.length; i++){
            this.persona.oQueODeixaFeliz[i] = lista[i].value;
        }
    }

    getOQueOAborrece(){
        var lista = document.getElementsByClassName("item-listaTriste");
        for(var i=0; i < lista.length; i++){
            this.persona.oQueOAborrece[i] = lista[i].value;
        }
    }

    getObjetivo(){
        var lista = document.getElementsByClassName("item-listaObjetivo");
        for(var i=0; i < lista.length; i++){
            this.persona.objetivo[i] = lista[i].value;
        }
    }

    getPersonalidade(){
        var lista = document.getElementsByClassName("item-listaPersonalidade");
        for(var i=0; i < lista.length; i++){
            this.persona.personalidade[i] = lista[i].value;
        }
    }

    getConhecimento(){
        var lista = document.getElementsByClassName("item-listaConhecimento");
        for(var i=0; i < lista.length; i++){
            this.persona.conhecimento[i] = lista[i].value;
        }
    }

    getAllData(){
        document.getElementById("textNome").textContent != ""?(
            this.getDadosCadastrais(),
            this.getSobre(),
            this.getOQueODeixaFeliz(),
            this.getOQueOAborrece(),
            this.getObjetivo(),
            this.getPersonalidade(),
            this.getConhecimento()
        ):'';

    }

    zeraAllData(){
        this.persona.nome = '';
        this.persona.sexo = '';
        this.persona.idade = '';
        this.persona.cargo ='';
        this.persona.cidade = '';
        this.persona.sobre = '';
        this.persona.oQueODeixaFeliz = [];
        this.persona.oQueOAborrece = [];
        this.persona.objetivo = [];
        this.persona.personalidade = [];
        this.persona.conhecimento = [];
        console.log(persona);
    }

    

}
