// Escriu aquí el teu codi

let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("tasklist");
let li = document.createElement("li");


carregarTasques();

function carregarTasques(){
    for(let i = 0; i < localStorage.length + 1; i++){
        let item = localStorage.getItem(i);
        let li = document.createElement('li');
        li.innerHTML = item;
        li.append(taskList);
        console.log(localStorage.getItem(i));
        
    }
}



function afegirTasca(){
    if(localStorage.length == null){}
    localStorage.setItem(localStorage.length,taskInput.value);
    let li = document.createElement('li');
    li.innerHTML = taskInput.value;
    li.append(taskList);
    taskInput.value = "";
    carregarTasques();
}

function esborrarTotes(){
    localStorage.clear();
}