const input = document.querySelector(".input-texto");
const formAñadir = document.querySelector(".form-añadir");

const listaTareas = document.querySelector (".lista-tareas");

let tareas = JSON.parse(localStorage.getItem("tareass")) || [];

const guardarEnLocalStorage = (tareasVarias) => {

    console.log(tareas);
    localStorage.setItem("tareass", JSON.stringify(tareasVarias));
};

let id = 0;


const pintarLista = (lista) => {

    listaTareas.innerHTML = lista.map((tarea) => `<li>${tarea.name}<i class="fa-solid fa-trash-can"></i></li>`).join("");

}


const añadirTarea = (e) => {

    e.preventDefault();
    const nombreTarea = input.value.trim();

    if (!nombreTarea.length) {

        console.log("No escribiste nada, bro");
        alert("Escribite algo");
    }

    else if (tareas.some((task) => task.name.toUpperCase() === nombreTarea.toUpperCase())){

        alert("Ya existe esa tarea");
      
    }

    else {

        tareas = [...tareas, {name: nombreTarea, idTarea: id + 1}];
        console.log(tareas);
        guardarEnLocalStorage(tareas);
        input.value = "";
        id++;
        pintarLista(tareas);
        
    }
  
};

const borrarTareas = () => {

    if (!e.target.classList.contains("boton-borrar")) {

        return;
    }

    else  {

        
    }
    


}

const iniciar = () => {

formAñadir.addEventListener("submit", añadirTarea);
pintarLista(tareas);
listaTareas.addEventListener("click", borrarTareas);
};

iniciar();
