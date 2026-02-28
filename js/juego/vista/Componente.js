class Componente {
    x = null;
    y = null;
    contexto = null;

    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    nuevaPos(canva){
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(95,50,40,0,2*Math.PI);
        ctx.stroke();
    }
    actualizarPos(){}
}