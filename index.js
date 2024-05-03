// 1
const Coche = {
    marca: '',
    modelo: '',
    matricula: '',
}

// 2
const Casa = {
    codPostal: '',
    calle: '',
    portal: '',
    piso: '',
}

// 3
const FullStackDeveloper = {
    lenguajes: [],
    proyectos: [],
}

// 4
const Perro = {
    nombre: '',
    raza: '',
    color: '',
    edad: '',
    ladrar: function() {
        console.log("¡Guau! ¡Guau!");
    },
    popo: function () {
        return Math.random() * 3
    },     
}

// 5
// const Portatil = {
//     codPostal: '',
//     calle: '',
//     portal: '',
//     piso: '',
// }
let marcaPortatil = Portatil.marca
console.log(marcaPortatil)

// 6
let marcaPortatil2 = Portatil["marca"]
console.log(marcaPortatil2)

// 7
let grupos = Concierto["grupos"]
console.log(grupos)

// 8
let RGB = [Led.rojo, Led.verde, Led.azul];
console.log(RGB)

// 9
Portatil.modelo = 'P345'

// 10
Concierto.cartelera.push("Guns N' Roses")

// 11
Concierto.fecha = new Date ()

// 12
Impresora.imprimiendo = objeto = {nombreArchivo: '', copias: '', numPaginas: '',}

// 13
const Noticia = {
    titular: '',
    cuerpo: '',
}

// 14
const Persona = {
    nombre: '',
    apellidos: '',
    edad: '',
}

// 15
const Avion = {
    numPasajeros: '',
    despegar: function() {
        console.log("despegando");
    },
    volar: function () {
        console.log("llegando al destino");
    },     
    aterrizar: function () {
        console.log("aterrizando");
    },     
}

// 16
const Paquete = {
    contenido: [],
}

// 17
const Pais = {
    numHabitantes: '',
    continente: '',
    gentilicio: '',
}

// 18
let codError = O_Error.codigo
console.log(codError)

// 19
let integrantes = Grupo["integrantes"]
console.log(integrantes)

// 20
nivelesTinta = Impresora["tinta"]

// 21
pixeles = Pantalla["pixeles"]

// 22
especificaciones = Movil["especificaciones"]

// 23
Grupo.numIntegrantes = 5

// 24
Pantalla.dimensiones = '1920x1080'

// 25
Led.encendido = false

// 26
Movil.temperatura = '20º'