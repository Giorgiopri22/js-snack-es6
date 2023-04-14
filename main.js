const biciclette = [
  { nome: "Bianchi", peso: 7.5 },
  { nome: "Trek", peso: 8.2 },
  { nome: "Specialized", peso: 7.1 },
  { nome: "Cannondale", peso: 7.9 },
];


const biciLeggera = biciclette.reduce((prev, current) =>
  prev.peso < current.peso ? prev : current
);


const { nome, peso } = biciLeggera;
console.log(`La bici più leggera è la ${nome} con un peso di ${peso} kg.`);




/*----------------es 2 ------------------- */

// Array di oggetti di squadre di calcio
const squadreDiCalcio = [
    { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 }
  ];
  
  // Generazione di numeri random per le proprietà "puntiFatti" e "falliSubiti"
  squadreDiCalcio.forEach(squadra => {
    squadra.puntiFatti = Math.floor(Math.random() * 101);
    squadra.falliSubiti = Math.floor(Math.random() * 51);
  });
  
  // Creazione del nuovo array con solo nomi e falli subiti
  const nomiEFalli = squadreDiCalcio.map(({ nome, falliSubiti }) => ({ nome, falliSubiti }));
  
  // Stampa in console dell'array di oggetti di squadre di calcio e del nuovo array con solo nomi e falli subiti
  console.log("Array di squadre di calcio: ", squadreDiCalcio);
  console.log("Array di nomi e falli subiti: ", nomiEFalli);
  