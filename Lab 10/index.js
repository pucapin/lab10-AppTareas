class Tarea {
    constructor(nombre, estado) {
        this.nombre = nombre;
        this.estado = estado;
    }

    tareaHTML(pos) {
        return `
        <div id="pendiente-box"> 
                    <p id="texto">${this.nombre}</p>
                    <img src="./flecha.png" id="derecha" onclick="agregarH(${pos})">
                </div>
        `
    }
    tareaHTML2(pos) {
        return `
        <div id="pendiente-box"> 
                    <p id="texto">${this.nombre}</p>
                    <img src="./flecha.png" id="izquierda" onclick="agregarP(${pos})">
                    <img src="./flecha.png" id="derecha" onclick="agregarL(${pos})">
                    
                </div>
        `
    }
    tareaHTML3(pos) {
        return `
        <div id="pendiente-box"> 
                    <p id="texto">${this.nombre}</p>
                    <img src="./flecha.png" id="izquierda" onclick="agregarH(${pos})">
                    
                </div>
        `
    }
}

let tareas = []; //lista de todas las tareas

let inputT = document.getElementById("input-tarea")
const inputBtn = document.getElementById("agregar")
let pendientes = document.getElementById("pendientes")
let haciendo = document.getElementById("haciendo")
let listo = document.getElementById("listo")

function getInput() {
    let name = inputT.value
    inputT.value = "";
    const tarea = new Tarea(name, "pendiente")
    tareas.push(tarea) //Esto añade un nuevo elemento a la lista tareas
    renderTarea()
}

function renderTarea() { 
    haciendo.innerHTML = "";
    pendientes.innerHTML = ""; 
    listo.innerHTML = "";
    
    for(let i = 0; i < tareas.length; i++) {
        let tarea = tareas[i]
        if (tarea.estado === "pendiente") {
            pendientes.innerHTML += tarea.tareaHTML(i)
        }
        else if (tarea.estado === "haciendo") {
            haciendo.innerHTML += tarea.tareaHTML2(i)
        }
        else if (tarea.estado === "listo") {
            listo.innerHTML += tarea.tareaHTML3(i)
        }
    }
}

function agregarH(pos) {
    let tarea = tareas[pos] // busca la posicion de la tarea
    console.log(tarea)
    tarea.estado = "haciendo" //cambia el objeto - en la propiedad estado
    renderTarea()
}

function agregarP(pos) {
    let tarea = tareas[pos]
    tarea.estado = "pendiente"
    renderTarea()
}

function agregarL(pos) {
    let tarea = tareas[pos]
    tarea.estado = "listo"
    renderTarea()
}