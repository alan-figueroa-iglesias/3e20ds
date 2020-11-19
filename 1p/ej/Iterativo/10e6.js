console.log("Generar 10e6 numeros aleatorios");

var start = new Date();
var array6 = [];

for (i=0; i<=999999; i++) 
{
    array6.push(Math.round(Math.random() * 1000000));
}

var x=0;
const insercion = (num) => {
    for (i=1; i<num.length; i++) 
    {
        var j=i-1;
        var y=num[i];
        while (j>=0 && num[j]>y) 
        {
            num[j+1]=num[j];
            j--;
        }
        num[j+1]=y;
    }
    return num;
}

console.log("Números aleatorios ordenados: ");
console.log(insercion(array6));

console.log("¿Cuántas inversiones requiere cada uno en promedio? 999999");

var finish = new Date() - start;
console.info("¿Cuánto tiempo toma en promedio? ", finish / 1000 + " segundos.");

console.log("¿Podemos mejorar el tiempo de ejecución? ¿Cómo? Sí, buscando tanto una mejor técnica para generar los números aleatorios como el ordenarlos.");