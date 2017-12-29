"use strict";

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

function serie(lista, func, callbackFin) {
    if(lista.length == 0){
        callbackFin();
        return;
    }
    func(lista.shift(), function() {
        serie(lista, func, callbackFin);
    })
}

var lista = [1, 2, 'tres', 4, 5];

serie(lista, escribeTras2Seg, function() {
    console.log('fin');
})