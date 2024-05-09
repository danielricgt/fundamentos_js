const regresaTrue = () => {
  console.log("Regresa true");
  return true;
};

const regresaFalse = () => {
  console.log("Regresa false");
  return false;
};

console.warn("Not o la negacion");
console.log(true);
console.log(!true);
console.log(!false);

console.log(!regresaFalse());

console.warn("And");
console.log(true && false);
console.log(true && !false);

console.warn("========");
console.log(regresaFalse() && regresaTrue());
console.log(regresaTrue() && regresaFalse());
console.log(!regresaFalse() && regresaTrue());

console.warn("===&&===");
regresaFalse() && regresaTrue();
console.warn("cuatro condiciones=");
console.log(true && true && true && true);

console.warn("===OR===");
console.log(true || false);
console.log(false || false);
console.log(regresaTrue || regresaFalse);
console.warn("cuatro condiciones=");
console.log(true || true || true || false);


const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'Hola Mundo' && 150;
const a2 = 'hpla' && 'mundo' && soyFalse;
const a3 = soyFalse || 'Ya no soy falso';
const a4 = soyFalse || soyUndefined || soyUndefined || true 
const a5 = soyFalse || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;
console.log({a1,a2,a3,a4,a5});

if (true || true || true || false){
    console.log('Hacer algo')
} else {
    console.log('otra cosa')
}