const drgalvan = {
    nombre : "Daniel",
    edad: 30,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`)
    }

}

const jiespinosa = {
    nombre : "Jose",
    edad: 47,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`)
    }

}


drgalvan.imprimir();
jiespinosa.imprimir();

function Persona (nombre, edad){
    console.log("se ejecuto esta linea");
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`)
    }
}
const maria = new Persona("Maria", 31);
const melissa = new Persona ("Melissa", 32);
maria.imprimir();
melissa.imprimir();
console.log(maria, melissa);