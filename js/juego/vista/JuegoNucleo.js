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
        this.intervalo = setInterval(this.bucle(this.area.canva), 1000);
    }

    parar(){
        clearInterval(this.intervalo);
    }

    bucle(canva){
        console.log("Juego empezado");
        let personaje = new Componente();
        personaje.nuevaPos(canva);
    }

}

export default JuegoNucleo;