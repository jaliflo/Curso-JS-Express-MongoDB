"use strict";
function Persona (nombre) {
    this.name = nombre;
}

var persona = new Persona('Neo');

Persona.prototype.saluda = function() {
    console.log('Hola, me llamo '+this.name);
};

console.log(persona.name);

persona.saluda();