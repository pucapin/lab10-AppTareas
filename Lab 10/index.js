class Tarea {
    constructor(nombre, estado) {
        this.nombre = nombre;
        this.estado = estado;
    }
}

let tareas = [];

let inputT = document.getElementById("input-tarea")
const inputBtn = document.getElementById("agregar")
let pendientes = document.getElementById("pendientes")

function getInput() {
    let name = inputT.value
    inputT.value = "";
    const tarea = new Tarea(name, "pendiente")
    tareas.push(tarea)
    console.log(tareas)
    renderTarea()
}

function renderTarea() {
    pendientes.innerHTML += `
    <div id="pendiente-box"> 
                <p>${this.nombre}</p>
                <img src="./flecha.png" id="derecha" onclick="agregarH()">
            </div>
    `
}

function agregarH() {
    console.log("Funciona")
}