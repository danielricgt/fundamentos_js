class Persona {
  constructor(nombre, apellido, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }

  getInfo() {
    console.log(this.nombre, this.apellido, this.pais);
  }
}

const nombre = "Melissa",
  apellido = "Lopez",
  pais = "Peru";

const nombre2 = "Melissa",
  apellido2 = "Lopez",
  pais2 = "Peru";
