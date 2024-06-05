// Singleton es una instancia unica de mi clase
class Singleton {
  static instancia;
  nombre = "";

  constructor(nombre = "") {
    
    // Verificar si la instancia esta vacia
    if (!!Singleton.instancia ) {
        return Singleton.instancia;
    } 
   Singleton.instancia= this;
   this.nombre = nombre;
  }
}

const instancia1 = new Singleton("ironman");
const instancia2 = new Singleton("spiderman");
const instancia3 = new Singleton ('black panter');

console.log(`Nombre de la instancia es ${instancia1.nombre}`);
console.log(`Nombre de la instancia es ${instancia2.nombre}`);
console.log(`Nombre de la instancia es ${instancia3.nombre}`);
 