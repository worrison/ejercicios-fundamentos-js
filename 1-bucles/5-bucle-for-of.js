// ej 5
// crea un array con la gente que empieza por J
// Sin utilizar el método filter de los arrays
// Utilizad el bucle for of
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
/*modo normal*/
let conJota=new Array();
for(let i = 0; i < gente.length; i++)
{
    if(gente[i].nombre.charAt(0)==="J")
    {
        conJota.push(gente[i].nombre);
    }
}
console.log(conJota);

/*filter*/
let conJota=gente.filter(function(persona) 
{
    return persona.nombre[0] == "J";
});
console.log(conJota);

/*function flecha */
let conJota=gente.filter(persona=>persona.nombre[0] =="J")
console.log(conJota);