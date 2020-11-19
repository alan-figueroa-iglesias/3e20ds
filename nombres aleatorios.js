console.log("Generar 10 nombres aleatorios");

const nombres = new Set();
var r;

while(nombres.size<10)
{
    r = Math.floor(Math.random() * (11 - 1) + 1);
    nombres.add("Nombre " + r);
}
console.log(nombres);