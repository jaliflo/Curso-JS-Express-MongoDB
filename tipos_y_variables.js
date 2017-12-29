var numero = 1;

console.log(numero);
console.log(typeof(numero));

numero  = 'hola';

console.log(typeof(numero));

//strings
console.log("texto de prueba".split(' '));
var textoLargo1 = 
    'Linea1\n' +
    'Linea2\n';
console.log(textoLargo1);

var textoLargo2 = [
    'Linea1',
    'Linea2'
].join('\n');

console.log(textoLargo2);

var objeto = {
    numero: 1,
    texto: "hola",
    sumaDos: function(v){
        return v + 2;
    }
};

console.log(objeto.numero);
console.log(objeto.texto);
console.log(objeto.sumaDos(5));

// array

var array = [
    1,
    'hola',
    function(v) { return v+2 },
    {
        valor: "hola"
    }
];

console.log(array);

console.log(array[2](3));

// hoisting

var x = 100;
function y(){
    if(x === 100){
        var x = 30;
    }

    return x;
}

console.log(x, y())