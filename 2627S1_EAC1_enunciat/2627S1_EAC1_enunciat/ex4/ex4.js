/**** Crearem un array d'objectes literals anomenat biblioteca on cada objecte representi un llibre amb les propietats: titol, autor i preu. Per fer-ho atractiu l'array serà de 20 llibres mínim amb preus variats per poder veure el correcte funcionament del nostre codi.
Posteriorment, escriurem codi per fer les següents operacions:
    • Seleccionar el primer llibre de l'array i utilitzar un bucle for...in per recórrer totes les seves claus i valors de forma dinàmica, mostrant-los per consola.
    • Aplicar el mètode d'array .filter() per trobar només aquells llibres que tinguin un preu inferior a 20 €.
    • Aplicar el mètode .map() sobre l'array filtrat per generar una nova llista que contingui exclusivament els títols d'aquests llibres econòmics, i mostrar-los per consola on només caldrà que es vegi només el títol i el preu.****/

const biblioteca = [
  {
    titol: "Nit blava a Ginebra",
    autor: "Eva Comas-Arnal",
    preu: 21.90
  },
  {
    titol: "Punt de no retorn",
    autor: "Maria Climent Huguet",
    preu: 20.90
  },
  {
    titol: "El ball de les abelles",
    autor: "Marta Bacarisas",
    preu: 21.90
  },
  {
    titol: "T'aferres a una rosa",
    autor: "Alba Escriu",
    preu: 20.90
  },
  {
    titol: "Cròniques d'un mig estiu",
    autor: "Maria Antònia Oliver",
    preu: 20.95
  },
  {
    titol: "On el cor arrela",
    autor: "Ana Segura Cerdà",
    preu: 21.60
  },
  {
    titol: "La nit del cometa",
    autor: "Elisabet Ràfols",
    preu: 15.00
  },
  {
    titol: "Encara hi són",
    autor: "Irene Solanich Sanglas",
    preu: 16.00
  },
  {
    titol: "Mons on trobar-te",
    autor: "Berta Creus",
    preu: 20.95
  },
  {
    titol: "De gran vull ser una casa",
    autor: "Aina Fullana Llull",
    preu: 21.95
  },
  {
    titol: "Si fos una sibil·la",
    autor: "Maria Canelles",
    preu: 21.90
  },
  {
    titol: "Tots els punts i a part",
    autor: "Marta Sans",
    preu: 20.90
  },
  {
    titol: "Manual de flotació",
    autor: "Jordi Marron",
    preu: 23.90
  },
  {
    titol: "El preu de néixer",
    autor: "Laura Gost",
    preu: 19.90
  },
  {
    titol: "L'antropòloga",
    autor: "Ada Castells",
    preu: 20.00
  },
  {
    titol: "Postals del món que oblido",
    autor: "Marc Cerrudo Boada",
    preu: 18.90
  },
  {
    titol: "Les entranyes",
    autor: "Pau Cusí Mares",
    preu: 18.90
  },
  {
    titol: "La clau",
    autor: "Flavia Company",
    preu: 23.00
  },
  {
    titol: "La geometria del silenci",
    autor: "Miquel Esteve Valldepérez",
    preu: 19.00
  },
  {
    titol: "Un llibre per parlar amb fantasmes",
    autor: "Ramon Mas",
    preu: 12.90
  }
];
 
for (tipus in biblioteca[0]) {
  console.log(`${tipus}: ${biblioteca[0][tipus]}`);
}

biblioteca.filter((llibre) => llibre.preu < 20).map((llibre) => {
  console.log(`Títol: ${llibre.titol}, Preu: ${llibre.preu}€`);
});