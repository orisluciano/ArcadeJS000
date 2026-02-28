import JuegoArea from "./JuegoArea.js";

class JuegoNucleo {
    canvas = document.getElementById("canvas");
    area = new JuegoArea();
    intervalo = null;
    personaje = new Componente(0,0);
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