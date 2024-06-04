class Persona {

    static _conteo = 0;
    static get getConteo(){
        return Persona._conteo + ' intancias';
    }

    static mensaje(){
        console.log('hoa soy un metdo estatico')
    }
  // Propiedades de la clase
  nombre = "";
  codigo = "";
  frase = "";
  comida = " ";
  // Constructor
  constructor(nombre = "Daniel", codigo = 200, frase = "Hola") {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    Persona._conteo++;
  }

  // setters y getters

  set comidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita() {
    return `la comida favorita de ${this.nombre} es ${this.comida}`;
  }

  // metodos

  quienSoy() {
    console.log(`soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }
  miFrase() {
    console.log(`Soy ${this.nombre} y mi frase es ${this.frase}`);
    this.quienSoy();
  }
}
const spiderman = new Persona(
  "Peter Parker",
  "Spiderman",
  "Un poder conlleva una gran responsabilidad"
);
const ironman = new Persona("Tony Stark", "Ironman", "Soy Ironman");

spiderman.quienSoy();
ironman.quienSoy();

spiderman.miFrase();

const suma = (a, b) => {
  return a + b;
};

const resultado = suma(3, 4);

spiderman.comidaFavorita = "el pie de la tia may";
spiderman.getComidaFavorti;
// spiderman.comida = 'dunde verde';

console.log(spiderman, ironman);

console.log(spiderman.getComidaFavorita);

console.log(Persona.getConteo);

Persona.mensaje();

Persona.propiedadExterna = console.log('hola mundo');
console.log(Persona);
