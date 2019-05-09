// crea la función  transformaArrayEnOtraConSusLongitudes
// debe recibir un array 
// devolver y otro array con las longitudes de los strings recibidos en el array

// Si la función no recibe un dato tipo object / array  
// debe devolver el string 'Debo ser ejecutada con un array'
// puedes comprobar si es un array con:
//  typeof array === 'object' && array.length >= 0


// Ha de pasar los test adjuntados.


/*con map*/
var transformaArrayEnOtraConSusLongitudes = function(arrayDeStrings) {

    if (typeof(arrayDeStrings) === "object" && arrayDeStrings.length >= 0)
    {
        var arrayDeLongitudes = arrayDeStrings.map(function(valor) {
            return valor.length;
            });
    }
    else{
        return ("Debo ser ejecutada con un array");
    }
    return arrayDeLongitudes;
 };






/*let transformaArrayEnOtraConSusLongitudes = (arrayDeStrings) => {
    let arrayDeLongitudes = [];
    // Aquí tu código.  Desde aquí:

     
        if (typeof(arrayDeStrings) === "object" && arrayDeStrings.length >= 0)
        {
            for (var valor of arrayDeStrings) {
                arrayDeLongitudes.push(valor.length);
            }
        }
        else{
            return ("Debo ser ejecutada con un array");
        }
    // Hasta aquí.
    return arrayDeLongitudes
}*/


let test = require('../test.js');
test(transformaArrayEnOtraConSusLongitudes, [
    ['juan', 'paco', 'pepe']
], [4, 4, 4]);
test(transformaArrayEnOtraConSusLongitudes, [
    ['EY', 'hoy', 'qqq']
], [2, 3, 3]);
test(transformaArrayEnOtraConSusLongitudes, [
    ['EY', 'hoy', 'qqqs', 'hola']
], [2, 3, 4, 4]);
test(transformaArrayEnOtraConSusLongitudes, [''], 'Debo ser ejecutada con un array');
test(transformaArrayEnOtraConSusLongitudes, [true], 'Debo ser ejecutada con un array');
test(transformaArrayEnOtraConSusLongitudes, [{}], 'Debo ser ejecutada con un array');
