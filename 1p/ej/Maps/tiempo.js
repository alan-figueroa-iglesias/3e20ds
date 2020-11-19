console.log("Tomar tiempo e imprimir resultado para, n=10e4, 10e5, 10e6");

var inicio3 = new Date();
var array = [];
var nombres = new Map();
var n6 = 1000000;
var n5 = 100000; 
var n4 = 10000; 
var co3 = 1;

for(i=0; i<n4; i++) 
{
    array[i] = "Nombre " + i;
}

for(i=n4-1; i>-1; i--) 
{
    var n = Math.floor(Math.random() * i);
    var y = array[i];
    array[i] = array[n];
    array[n] = y;
    nombres.set(co3, array[i]);
    co3++;
}
console.log(nombres);
var fin3 = new Date() - inicio3;
var tiempo3 = fin3 / 1000;

var inicio2 = new Date();
var co2 = 1;

for (i=0; i<n5; i++) 
{
    array[i] = "Nombre " + i;
}

for (i=n5-1; i>-1; i--) 
{
    var n = Math.floor(Math.random() * i)
    var y = array[i];
    array[i] = array[n];
    array[n] = y;
    nombres.set(co2 ,array[i]);
    co2++;
}
console.log(nombres);
var fin2 = new Date() - inicio2;
var tiempo2 = fin2 / 1000;

var inicio = new Date();
var co = 1;

for (i=0; i<n6; i++) 
{
    array[i] = "Nombre " + i;
}

for (i=n6-1; i>-1; i--) 
{
    var n = Math.floor(Math.random() * i)
    var y = array[i];
    array[i] = array[n];
    array[n] = y;
    nombres.set(co ,array[i]);
    co++;
}
console.log(nombres);
var fin = new Date() - inicio;
var tiempo = fin / 1000;

console.log("Tiempo 10e4: " + tiempo3);
console.log("Tiempo 10e5: " + tiempo2);
console.log("Tiempo 10e6: " + tiempo);