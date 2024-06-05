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
  constructor(nombre = 'Sin Nombre', codigo= 'Sin codigo', frase= 'sin frase') {
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

class Heroe extends Persona {
    
    clan = 'sin clan';
    constructor(nombre, codigo, clase){
        super(nombre, codigo, clase);
        this.clan = 'los avengers';
        this.comida = 'Pasta';
    }

    quienSoy(){
        console.log(`soy  ${this.nombre} de los ${this.clan}`);
        super.quienSoy();
    }
}

const spiderman2 = new Heroe('Alexis','Thor','Martillo');
console.log(spiderman2); 
spiderman2.quienSoy();