// ej 6
// crea un array con la gente que su nombre tiene 4 letras
// utilizando el método filter de los arrays
// y muéstralo por consola.

let gente = [{
        nombre: 'Jamiro',
        edad: 45
    },
    {
        nombre: 'Juan',
        edad: 35
    },
    {
        nombre: 'Paco',
        edad: 34
    },
    {
        nombre: 'Pepe',
        edad: 14
    },
    {
        nombre: 'Pilar',
        edad: 24
    },
    {
        nombre: 'Laura',
        edad: 24
    },
    {
        nombre: 'Jenny',
        edad: 10
    },
]
/*normal*/
let conCuatroLetras=new Array();
for(let i = 0; i < gente.length; i++)
{
    if(gente[i].nombre.length === 4)
    {
        conCuatroLetras.push(gente[i].nombre);
    }
}
console.log(conCuatroLetras);
/*filter*/
let cuatroLetras=gente.filter(function(persona) 
{
    return persona.nombre.length == 4;
});
console.log(cuatroLetras);

/*funcion flecha */
let cuatroLetras=gente.filter(persona=> persona.nombre.length == 4);
console.log(cuatroLetras);
