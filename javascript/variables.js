console.log('Hola Mundo');
var nombre = 'Jefferson';
var edad = 24;
var deudas = 223.54;
var fechadenacimiento = new Date();
var casado = true;
var vacio = null;
var nodefinido = undefined;
var mutar;
mutar=edad;
mutar=nombre;
mutar=fechadenacimiento;
console.log(vacio ? 'V' : 'F');
console.log(nodefinido ? 'V' : 'F');
console.log(0 ? 'V' : 'F');
console.log(1 ? 'V' : 'F');
console.log(-1 ? 'V' : 'F');
console.log(nombre ? 'V' : 'F');


//json
var usuario = {
    "nombre": "Jefferson",
    apelido: 'Paredes',
    edad:sumarDosNumeros(1,2),
    imprimirEnConsola:sumarDosNumeros
    //imprimirEnConsola:sumarDosNumerosVersion2(a,b   ),
    //imprimirEnConsola:function () {
      //  console.log(this.nombre+' '+this.edad+' '+this.apelido )
    //}
};
console.log(usuario.nombre);
console.log(usuario);

delete usuario.edad;

console.log(usuario);

usuario.cedula='1003627302';

console.log(usuario);
usuario.mascotas={};
usuario.mascotas.perro='teo';

console.log(usuario);

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof casado);
console.log(typeof fechadenacimiento);
console.log(typeof usuario);


function sumarDosNumeros(numeroUno, numberoDos) {
    return numeroUno+numberoDos;
}

console.log(sumarDosNumeros(5,8));
// Funcion anonima
var sumarDosNumerosVersion2=function (numeroUno, numeroDos) {
    return numeroUno+numeroDos;
}
var sumarDosNumerosVersion3=function sumarDosNumerosVersion3(numeroUno, numeroDos) {
    return numeroUno+numeroDos;
}

console.log(usuario.imprimirEnConsola);


var arreglo=[1,2,3,"Jefferson",true, undefined,sumarDosNumeros(1,2,3,4)];

console.log(arreglo);