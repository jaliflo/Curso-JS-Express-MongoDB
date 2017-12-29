"use strict";

console.log('Empiezo');

function escribeTrasXSeg(texto, time, callback) {
    setTimeout(function() {
        console.log(texto);
        callback();
    }, time);
}

escribeTrasXSeg('texto1', 2000, function() {
    console.log('fin1');
    escribeTrasXSeg('texto2', 2000, function() {
        console.log('fin2');
    });
});