"use strict";

console.log('Empiezo');

function escribeTras2Seg(texto, callback) {
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 2000);
}

//bucle asincrono en paralelo

var acabados  = 0;

for( var i = 0; i < 5; i++) {
    escribeTras2Seg('texto ' + (i+1), function() {
        acabados++;
        if(acabados >= 5) {
            console.log('fin');
        }
    });
}