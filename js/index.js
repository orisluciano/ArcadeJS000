import InicioVista from "./Inicio/vista/InicioVista.js";

iniciar();

function iniciar() {
  //asignarFunciones();
  cargarPantalla();
}

/*function asignarFunciones() {
  let botones = {
    start: "btnStart",
  };

  let btnStart = document.getElementById(botones.start);
  btnStart.onclick = function () {
    btnStartOnClick();
  };
}

function btnStartOnClick() {
  cargarPantalla();
}*/

function cargarPantalla() {
  let inicio = new InicioVista();
  inicio.cargarPantalla();
}
