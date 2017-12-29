"use strict";

console.log('Empiezo');

function escribeTras2Seg(texto, callback) {
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 2000);
}

//bucle asincrono en serie

// llamar a una funcion N veces en serie,
// al finalizar llamar al callback de finalización

function serie(n, func, callbackFin) {
    if(n == 0){
        callbackFin();
        return;
    }
    n--;
    func(n, function() {
        serie(n, func, callbackFin);
    })
}

serie(5, escribeTras2Seg, function() {
    console.log('fin');
})