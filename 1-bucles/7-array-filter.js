// ej 7
// crea un array con la gente que su nombre
// empieza por J y sean menores de 40 años
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
let conJota=new Array();
for(let i = 0; i < gente.length; i++)
{
    if(gente[i].nombre.charAt(0)==="J" &&  gente[i].edad <40)
    {
        conJota.push(gente[i].nombre);
    }
}
console.log(conJota);
/*filter*/
let jotaMenorCuarenta=gente.filter(function(persona) 
{
    return persona.nombre[0]=="J" && persona.edad<40;
});
console.log(jotaMenorCuarenta);
/*Funcion flecha*/
let jotaMenorCuarenta=gente.filter(persona=>persona.nombre[0]=="J" && persona.edad<40);
console.log(jotaMenorCuarenta);
