let a = 12;
// el if espera un valor boooleano
if (a >= 10) {
  console.log("A es mayor o igual que 10");
} else {
  console.log(" A es menor que 10");
}

console.log("Fin del programa");

const hoy = new Date();
console.log(hoy);

let dia = hoy.getDay();
console.log({ dia });

if (dia === 2) {
  console.log("Es martes");
} else if (dia === 1) {
  console.log("Es Lunes");
} else if (dia === 3) {
  console.log("Es Miercoles");
} else if (dia === 4) {
  console.log("Es jueves");
} else if (dia === 5) {
  console.log("Es viernes");
} else if (dia == 6) {
  console.log("Es sabado");
} else if (dia === 7) {
  console.log("Es domingo");
}

//Sin usar if else, switch unicamente objetos

const diaLetras = {
  1: "lunes",
  2: "martes",
  3: "miercoles",
  4: "jueves",
  5: "viernes",
  6: "sabado",
  0: "domingo",
};

const diaLetras2 = [
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
];

console.log(diaLetras2[dia]);
