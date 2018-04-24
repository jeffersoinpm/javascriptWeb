function validarNumeroDeStringsEnArreglo(arreglo) {
    var contador = 0;
    for (var i = 0; i < arreglo.length; i++) {
        if (typeof arreglo[i] == "string") {
            contador++;
        }
    }
    return contador;
}

var arregloPrueba = [1, 2, 'Jeff', '10', 56, false, undefined, 'Paredes'];
console.log(validarNumeroDeStringsEnArreglo(arregloPrueba));