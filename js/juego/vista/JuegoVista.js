class JuegoVista {
    constructor(parameters) {
        
    }
    
    archivo = "./js/juego/vista/JuegoVista.html";
    pos = {x : 0, y : 0};
    ubicacion = {x : 0, y : 0};
    aumento = 5;

    async cargarPantalla(){
        let peticion = await fetch(this.archivo);
        let root = document.getElementById("root");
        root.innerHTML = "";
        root.innerHTML = await peticion.text();
        this.asignarTeclas();
        //this.dibujar();
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

    dibujar(){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(95,50,40,0,2*Math.PI);
        ctx.stroke();

        c.addEventListener("keypress", function (event) {
            alert(event.key);
        });

        //c.addEventListener("click", function(){ alert("Hello World!"); });

        document.addEventListener("keydown", function(e) {
            alert(e.key);
        });
    }

    dibujarLinea(){
        const c = document.getElementById("canvas");
        const ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(this.pos.x, this.pos.y);
        ctx.lineTo(this.ubicacion.x, this.ubicacion.y);
        //ctx.lineTo(70, 100);
        ctx.strokeStyle = "#33ff33";
        ctx.stroke();
    }

    asignarTeclas(){
        let esto = this;
        document.addEventListener("keydown", function(e) {
            switch (e.key) {
                case "ArrowUp":
                    esto.pos = esto.ubicacion;
                    esto.ubicacion.y = esto.ubicacion.y - esto.aumento;
                    break;

                case "ArrowDown":
                    esto.pos = esto.ubicacion;
                    esto.ubicacion.y = esto.ubicacion.y + esto.aumento;
                    break;

                case "ArrowLeft":
                    esto.pos = esto.ubicacion;
                    esto.ubicacion.x = esto.ubicacion.x - esto.aumento;
                    break;

                case "ArrowRight":
                    esto.pos = esto.ubicacion;
                    esto.ubicacion.x = esto.ubicacion.x + esto.aumento;
                    break;
            }
            esto.dibujarLinea();
            console.log(esto.ubicacion);
            console.log(esto.pos);
        });console.log(this.ubicacion);
    }

}

export default JuegoVista;