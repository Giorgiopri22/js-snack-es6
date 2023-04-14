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
