var r=3, n=50, respuesta=0;

console.log("De un alfabeto de " + n + " símbolos cuantas palabras de " + r + " símbolos podemos generar?");

if(r <= n)
{
    respuesta = factorial(n)/factorial(n-r);
    console.log(Math.round(respuesta)+" Palabras");
}
else
    console.log("Elige un valor mayor a " + r);

function factorial(num)
{
    var x=1;
    for(i=1; i<=num; i++)
    {
        x=i*x;
    }
    return x;
}