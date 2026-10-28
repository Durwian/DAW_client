// Array d'entrades brutes a validar
const codisUsuaris = ["08001", "aaaa", "0801a", "17003", "0875421", "", "25002"]; 

let codisCorrectes = [];
for (let i = 0; i < codisUsuaris.length; i++) { //bucle per recórrer l'array 
    let codi = codisUsuaris[i];
    if(!isNaN(codi) && codi.length === 5 && codi !== "") { //validació i afegim a l'array
        codisCorrectes.push(codi);
    }   
}

//Mostra per consola els codis correctes
console.log("Codis postals vàlids filtrats: [" + codisCorrectes + "]");
console.log("Total de codis postals acceptats: " + codisCorrectes.length)
