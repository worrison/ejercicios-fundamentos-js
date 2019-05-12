// ej 4
// crea un array con la gente mayor de 25 años.
// y muéstralo por consola.
// Sin utilizar el método filter de los arrays
// Utilizad el bucle for of

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
/*modo normal*/
var mayores=new Array();
for(i = 0; i < gente.length; i++)
{
    if(gente[i].edad >25)
    {
        mayores.push(gente[i].edad);
    }
}
console.log(mayores);
/*filter*/
var mayores=gente.filter(function(persona) 
{
    return persona.edad >= 25;
});
console.log(mayores);