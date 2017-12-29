"use strict";

var async = require('async');

console.log('Empiezo');

function escribeTras2Seg(texto, callback) {
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 1000);
}

//bucle asincrono en serie

// llamar a una funcion con un array en serie,
// al finalizar llamar al callback de finalización

var lista = [1, 2, 'tres', 4, 5];

async.eachSeries(lista, escribeTras2Seg, function() {
    console.log('fin');
})