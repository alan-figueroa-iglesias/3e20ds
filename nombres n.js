var n = 1000000;

console.log("Agregar " + n + " nombres aleatorios");

var array = [];
var nombres = new Set();

for (i=0; i<n; i++)
{
    array[i]="Nombre " + i;
}

for (i=n-1; i>-1; i--)
{
    var n = Math.floor(Math.random() * i);
    var y = array[i];
    array[i] = array[n];
    array[n] = y;
    nombres.add(array[i]);
}
console.log(nombres);