// Un palíndromo es una palabra que se escribe igual del derecho que del revés por ejemplo orejero, rallar o somos.
// Edita la función querecibirá una cadena de texto y deberá devolver si es un palíndromo o no.

// si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'

let esPalindromo= (palabra) => {
    // Aquí tu código.  Desde aquí:
    if(palabra!="" && typeof palabra=="string") 
    {   
        palArray=palabra.split("");//transformor string en array
        palArray.reverse();//doy la vuelta
        palArray=palArray.join('');//convierto en string
        console.log(palArray);
        return palabra==palArray
        {
            return true;
        }
    }
    else
    {
        return "no es un formato correcto";
    }
    //Hasta aqui.
} 


let test = require('../test.js');

test(esPalindromo, ['castellon'], false);
test(esPalindromo, ['rallar'], true);
test(esPalindromo, [{}], 'no es un formato correcto');
test(esPalindromo, [''], 'no es un formato correcto');
test(esPalindromo, ['o'], true);
