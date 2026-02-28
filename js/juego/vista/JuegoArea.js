class JuegoArea {
    div;
    canva;
    contexto;
    constructor(parameters) {
        this.div = document.getElementById("divCanvas");
        this.div.innerHTML = "";
        this.canva = document.createElement("canvas");
        this.canva.width = 800;
        this.canva.height = 600;
        this.canva.className = "canvasJuego";
        this.contexto = this.canva.getContext("2d");
        this.div.appendChild(this.canva);
    }

    limpiar(){
        //limpiar canvas
    }
}

export default JuegoArea;