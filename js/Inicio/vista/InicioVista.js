import JuegoArea from "../../juego/vista/JuegoArea.js";
import JuegoNucleo from "../../juego/vista/JuegoNucleo.js";
import JuegoVista from "../../juego/vista/JuegoVista.js";

class InicioVista {
    constructor(parameters) {
        
    }
    archivo = "./js/Inicio/vista/InicioVista.html";

    async cargarPantalla(){
        let peticion = await fetch(this.archivo);
        let root = document.getElementById("root");
        root.innerHTML = "";
        root.innerHTML = await peticion.text();
        this.asignarFunciones();
    }

    asignarFunciones(){
        let esto = this;
        let botones = {
            start: "btnStart",
        };

        let btnStart = document.getElementById(botones.start);
        btnStart.onclick = function () {
            esto.btnStartOnClick();
        };
    }

    async btnStartOnClick() {
        let juego = new JuegoVista();
        await juego.cargarPantalla();
        let nucleo = new JuegoNucleo();
        nucleo.empezar();
    }
}

export default InicioVista;