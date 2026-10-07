// Array d'entrades brutes a validar
const codisUsuaris = ["08001", "aaaa", "0801a", "17003", "0875421", "", "25002"]; 


/**** Dins el fitxer ex2.js trobarem un array anomenat codisUsuaris que conté diverses cadenes de text enviades pels usuaris (algunes són codis postals numèrics vàlids, i d'altres contenen lletres o estan buides).
Mitjançant un bucle for clàssic, hem de recórrer tots els elements del llistat fent servir la propietat .length.
A cada iteració comprovarem que sigui un codi postal vàlid. Perquè sigui vàlid ha de ser un número de 5 dígits, sense lletres, sense camps buits, etc.
Si el número és vàlid, l'afegirem a un nou array anomenat codisCorrectes amb el mètode push().
Al final, mostrarem per consola l'array depurat i la quantitat total de codis correctes processats. ****/
let codisCorrectes = [];
for (let i = 0; i < codisUsuaris.length; i++) {
    let codi = codisUsuaris[i];
    if(!isNaN(codi) && codi.length === 5 && codi !== "") {
        codisCorrectes.push(codi);
    }   
}
console.log("Codis postals vàlids filtrats: [" + codisCorrectes + "]");
console.log("Total de codis postals acceptats: " + codisCorrectes.length)
