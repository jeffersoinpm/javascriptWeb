var totalMegaWatts = 0;

function encenderGeneradoresDe62(tipoDeEncendido) {
    var i = 0;
    while (i < 4) {
        tipoDeEncendido == 0 ? imprimirFormatoEncendido(i + 1, 1) : tipoDeEncendido == 1 && i % 2 == 0 ? imprimirFormatoApagado(i + 1)
            : tipoDeEncendido == 2 && i % 2 != 0 ? imprimirFormatoApagado(i + 1) : imprimirFormatoEncendido(i + 1, 1);
        i++;
    }
}

function encenderGeneradoresDe124(tipoDeEncendido) {

    for (var i = 3; i < 19; i++) {
        tipoDeEncendido == 0 ? imprimirFormatoEncendido(i + 1, 2) : tipoDeEncendido == 1 && i % 2 == 0 ? imprimirFormatoApagado(i + 1)
            : tipoDeEncendido == 2 && i % 2 != 0 ? imprimirFormatoApagado(i + 1) : imprimirFormatoEncendido(i + 1, 2);
    }
}

function imprimirFormatoEncendido(generador, tipo) {
    console.log('Generador #', generador, ' está prendido, añadiendo',
        tipo == 1 ? 62 : 124, ' MW para un total de', tipo == 1 ? totalMegaWatts += 62 : totalMegaWatts += 124, ' MW.');
}

function imprimirFormatoApagado(generador) {
    console.log('Generador #', generador, ' está apagado.')
}

//Tipo de Encendido es:
//0==normal
//1==par
//2==impar
encenderGeneradoresDe62(2);
encenderGeneradoresDe124(2);