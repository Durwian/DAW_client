/**** Escriu aquí el teu codi ****/

class Article {
    preu    
    constructor(nom, preu){
        this.nom = nom;
        this.preu = preu;
    }
}








/**** JOC DE PROVES. NO MODIFICAR ****/
const monitor = new ArticleImportat("Monitor 4K", 300, 45); 
console.log("Article:", monitor.nom);
console.log("Preu final calculat:", monitor.preu); // Ha d'imprimir: "345 €"

// Intent de modificació incorrecta
monitor.preu = -10; // No s'ha de permetre gràcies a la validació del set
console.log("Preu després de l'intent fallit de canvi:", monitor.preu); // Es comprova que el preu no ha canviat i segueix sent 345 €

// Creació d'un article comú
const ratoli = new Article("Ratolí sense fils", 25);
console.log("Article:", ratoli.nom);
console.log("Preu:", ratoli.preu);