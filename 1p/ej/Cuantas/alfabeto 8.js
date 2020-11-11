console.log("De un alfabeto de 8 símbolos cuantas palabras de 8 símbolos podemos generar?");

let r=8, n=8, respuesta=0;

respuesta = factorial(n)/factorial(n-r);
console.log(respuesta+" Palabras");

function factorial(num)
{
    var x=1;
    for(i=1; i<=num; i++)
    {
        x=i*x;
    }
    return x;
}