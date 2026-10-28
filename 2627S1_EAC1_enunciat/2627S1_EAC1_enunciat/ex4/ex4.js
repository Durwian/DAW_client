//Biblioteca de llibres
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

// Mostra el títol i el preu del primer llibre de la biblioteca
for (tipus in biblioteca[0]) {
  console.log(`${tipus}: ${biblioteca[0][tipus]}`);
}

//Filtra els llibres
const llibresFiltrats = biblioteca.filter((llibre) => llibre.preu < 20);

// Mostra els llibres filtrats
llibresFiltrats.forEach((llibre) => {
  console.log(`Títol: ${llibre.titol}, Preu: ${llibre.preu}€`);
});
