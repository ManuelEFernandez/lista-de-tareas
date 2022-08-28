const input = document.querySelector(".input-texto");
const formAñadir = document.querySelector(".form-añadir");
const listaTareas = document.querySelector(".lista-tareas");
const botonBorrarTodo = document.querySelector(".borrar-todo");

let tareas = JSON.parse(localStorage.getItem("tareass")) || [];

const guardarEnLocalStorage = (tareasVarias) => {
  
  localStorage.setItem("tareass", JSON.stringify(tareasVarias));
};

let id = 0;


const ocultarBorrarTodo = (tareasLista) => {

    if (!tareas.length) {

        botonBorrarTodo.classList.add("oculto");
        return;
    }
    else {
    botonBorrarTodo.classList.remove("oculto");

}
}


const pintarLista = (lista) => {
  listaTareas.innerHTML = lista
    .map(
      (tarea) => `<li>${tarea.name}<i class="fa-solid fa-trash-can" data-id=${tarea.idTarea}></i></li>`
    )
    .join("");
};

const añadirTarea = (e) => {
  e.preventDefault();
  const nombreTarea = input.value.trim();

  if (!nombreTarea.length) {
    console.log("No escribiste nada, bro");
    alert("Escribite algo");
  } else if (
    tareas.some((task) => task.name.toUpperCase() === nombreTarea.toUpperCase())
  ) {
    alert("Ya existe esa tarea");
    return;
  } else {
    tareas = [...tareas, { name: nombreTarea, idTarea: tareas.length + 1}];
    console.log(tareas);
    guardarEnLocalStorage(tareas);
    
    pintarLista(tareas);
    ocultarBorrarTodo(tareas)
  }
};

const borrarTareas = (e) => {
  if (!e.target.classList.contains("fa-trash-can")) {
    console.log("hola");  
    return;
     
  } 
  console.log("chau");
  
  const id = +e.target.dataset.id;

  tareas = tareas.filter((tarea) => tarea.idTarea !== id);
  guardarEnLocalStorage(tareas);
  pintarLista(tareas);
  ocultarBorrarTodo(tareas)
};

const borrarTodo = () => {

    tareas = [];
    guardarEnLocalStorage(tareas);
    pintarLista(tareas);
    ocultarBorrarTodo(tareas)
}
const iniciar = () => {
  formAñadir.addEventListener("submit", añadirTarea);
  pintarLista(tareas);
  listaTareas.addEventListener("click", borrarTareas);
  botonBorrarTodo.addEventListener("click", borrarTodo);
  ocultarBorrarTodo(tareas);
};

iniciar();
