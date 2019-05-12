/*PIRAMIDE*/
var baseMaxima=50,base,caracter="*",espacio=" ",piramide="";
for(var i=0; i<baseMaxima; i=i+2)
{   
    var cantidadEspacios=(baseMaxima-i)/2;
    base=i+1;
    piramide=piramide+espacio.repeat(cantidadEspacios)+caracter.repeat(base)+"\n";
}
console.log(piramide);
