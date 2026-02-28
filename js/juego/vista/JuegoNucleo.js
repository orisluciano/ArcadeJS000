import Componente from "./Componente.js";
import JuegoArea from "./JuegoArea.js";

class JuegoNucleo {
    canvas = document.getElementById("canvas");
    area = new JuegoArea();
    intervalo = null;
    personaje = new Componente();
    constructor(parameters) {
        
    }

    empezar(){
        this.intervalo = setInterval(this.bucle, 1000);
    }

    parar(){
        clearInterval(this.intervalo);
    }

    bucle(){
        console.log("Juego empezado");
    }

}

export default JuegoNucleo;