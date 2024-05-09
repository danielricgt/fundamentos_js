const elMayor = (a, b) => (a > b ? a : b);

const tieneMembresia = (miembro) => (miembro ? "2 dolates" : "10 dolares");

console.log(elMayor(10, 15));
console.log(tieneMembresia(!true));

const amigo = true;
const amigosArr = [
  "Daniel",
  "peter",
  "Dr Strange",
  amigo ? "Loky" : "Thor",
  (() => "Nick Fury")(),
  elMayor(10, 15),
];

console.log(amigosArr);

const nota = 100; // a, a+, b, ..
const grado = nota >= 95 ? "A+" : nota >= 90 ? "A" : nota >= 80 ? "B+" : "F";
console.log({ nota, grado });
