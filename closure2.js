"use strict";

function creaAgente(nombre) {
    var edad = 0;
    return {
        ponNombre: function(nuevoNombre) {
            nombre = nuevoNombre;
        },
        leeNombre: function() {
            return nombre;
        },
        ponEdad: function(nuevaEdad) {
            edad = nuevaEdad;
        },
        leeEdad: function() {
            return edad;
        },
        escribe: function() {
            console.log('Soy '+nombre+' y tengo '+edad+' años');
        }
    }
}

// creamos agentes
var smith = creaAgente('Smith');
smith.ponEdad(33);

var jones = creaAgente('Jones');
jones.ponEdad(42);

console.log('Soy el agente '+smith.leeNombre()+' y tengo '+smith.leeEdad()+' años');
console.log('Soy el agente '+jones.leeNombre()+' y tengo '+jones.leeEdad()+' años');

setTimeout(smith.escribe, 1000);
