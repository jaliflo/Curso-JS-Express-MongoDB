"use strict";

var fs = require('fs');
var path = require('path');

var versionModulo = function(moduleName, callback) {

    var fichero = path.join('./node_modules', moduleName, 'package.json');

    fs.readFile(fichero, 'utf8', function(err, data) {
        if (err) {
            callback(err);
            return;
        }

        // si no ha habido error
        // convertir contenido en objeto


        var packageJson;
        try {
            packageJson = JSON.parse(data);
        } catch(e) {
            callback('error de lectura');
            return;
        }

        if(packageJson && !packageJson.version) {
            callback('no version');
            return;
        }

        //llamamos al callback de finalizacion
        callback(null, packageJson.version);

    });

};

// Uso de la funcion

var modulo = 'chance';

versionModulo(modulo, function(err, version) {
    if(err) {
        console.log('error: ', err);
    }else {
        console.log('version: ', version);
    }
});