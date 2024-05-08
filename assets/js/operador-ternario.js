// Dias de semana abrimos a las 11
// Los fines de semana a las 9

// Una persona entra a consultar si esta abierto hoy

const dia = 6; // 0 domingo, 1 lunes ...
const horaActual = 8;

let HoraApertura;
let mensaje; // Esta abierto, cerrado, hoy abirmos a las xx

// if (dia === 0 || dia === 6) {
// if ([0, 6].includes(dia)) {
//   console.log("FDS");
//   HoraApertura = 9;
// } else {
//   console.log("Dia de semana");
//   HoraApertura = 11;
// }


HoraApertura = ([0,6].includes(dia)) ? 9 : 11;


// if (horaActual >= HoraApertura) {
//   mensaje = "Esta abierto";
// } else {
//   mensaje = `Esta cerrado hoy abrimos a las ${HoraApertura}`;
// }

mensaje = (horaActual >= HoraApertura) ? 'Esta abierto' : `Esta cerrado hoy abrimos a las ${HoraApertura}`;

console.log({ HoraApertura, mensaje });
