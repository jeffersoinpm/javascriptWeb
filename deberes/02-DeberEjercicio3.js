var totalOsos = 1;

function aumentarOsos(numeroMeses) {
    for (var i = 0; i < numeroMeses; i++) {
        totalOsos < 10000 ? imprimirFormatoOsos(totalOsos *= 4, 1, i) : imprimirFormatoOsos(totalOsos *= 0.5, 2, i);
    }
}

function imprimirFormatoOsos(numeroOsos, tipoDeImpresion, mes) {
    console.log(tipoDeImpresion == 1 ? 'Van a existir ' + numeroOsos + ' osos de anteojos después del mes ' + mes :
        'Removiendo ' + numeroOsos + ' osos de anteojos de la población.');
    tipoDeImpresion != 1 ? imprimirFormatoOsos(numeroOsos, 1, mes) : '';
}

aumentarOsos(11);