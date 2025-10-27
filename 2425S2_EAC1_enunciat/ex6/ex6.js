// Escriu aquí el teu codi
let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");


function afegirTasca(){
    let li = document.createElement("li");
    li.innerHTML = taskInput.textContent;
    taskInput.append(li);
}

function esborrarTotes(){

}