console.log("Generar 10 nombres aleatorios");

var nombres = new Map();

for (i=1; i<=10; i++) 
{
    nombres.set(i , "Nombre " + Math.floor(Math.random() * (11 - 1) + 1));
}
console.log(nombres);