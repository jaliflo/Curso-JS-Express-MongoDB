"use strict";
function Persona (nombre) {
    this.name = nombre;
}

var persona = new Persona('Neo');

Persona.prototype.saluda = function() {
    console.log('Hola, me llamo '+this.name);
};

//console.log(persona.name);

persona.saluda();

// -------------------------- Heredando de Persona ---------------------

function Agente(nombre) {
    Persona.call(this, nombre);
    // esto ejecuta el constructor de Persona con el this de Agente
    // definiendo en el this de Agente una propiedad name
    // y asignandole el parametro recibido
}

// le asignamos al agente una persona como prototip

Agente.prototype = new Persona('soy un prototipo');

var agente = new Agente('Smith');

agente.saluda();

console.log(
    Object.getPrototypeOf(agente),
    agente instanceof Agente,
    agente instanceof Persona,
    agente instanceof Object
);

// ------------------------ Herencia multiple ------------------------

function Superheroe() {
    this.vuela = function() {
        console.log(this.name+' vuela');
    };
    
    this.esquivaBalas = function() {
        console.log(this.name+' esquiva balas');
    }
}

Object.assign(Agente.prototype, new Superheroe());

agente.vuela();
agente.esquivaBalas();

