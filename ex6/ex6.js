// Escriu aquí el teu codi
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let li = document.createElement("li");
console.log(localStorage);

carregarTasques();

function carregarTasques(){
    let li = document.createElement('li');
    if(!localStorage){
        taskList.innerText = "No hi ha tasques pendents";
    }else if(localStorage.length == 1){
        taskList.textContent = "";
    }
    for(let i = 0; i < localStorage.length; i++){
        let item = localStorage.getItem(i);
        li.textContent = item;
        taskList.append(li);
        console.log("Afegit al localStorage: " + localStorage.getItem(i));
    }
    
}

function afegirTasca(){
    if(taskInput.value === ""){
        return alert("Atenció! No puc posar una tasca buida.");
    }
    localStorage.setItem(localStorage.length, taskInput.value);
    taskInput.value = "";
    carregarTasques();
}

function esborrarTotes(){
    localStorage.clear();
    taskList.innerHTML = "No hi ha tasques pendents.";
    console.log("Tots els nodes esborrats.");
}