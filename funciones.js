
// una funcion basica

function funcionBasica() {
    console.log('funcion basica se ejecuto');
}

funcionBasica();

// funcion como declaracion, con argumentos y retorno

function suma(a, b) {
    return a+b;
}

console.log(suma(3,4));

// funcion como expresion

var multiplica = function (a, b) {
    return a*b;
}

console.log(multiplica(3, 4));

var lang = 'es';

function accesoContexto() {
    console.log('en el contexto superior: ', lang);
}

accesoContexto();

// metodo de objeto

var agente = {
    nombre: 'Smith',
    saluda: function() {
        console.log('Hola, soy el agente '+this.nombre);
    }
};

agente.saluda();

// constructor de objetos

function Fruta(nombre) {
    this.getNombre = function () {
        return nombre;
    }
    this.setNombre = function (valor) {
        nombre = valor;
    }
}

// crear un objeto fruta
var limon = new Fruta('limon');

console.log(limon);

console.log(limon.getNombre());

limon.setNombre('limon2');

console.log(limon.getNombre());