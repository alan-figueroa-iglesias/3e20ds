console.log("Potencia(S)//powerSet");

function powerSet(num)
{
    var x = {};
    for(var i=0; i<num.length; i++)
    {
       x[num[i]] = true;
    }
    var array = Object.keys(x);
    var resultado = [[]];

    for(var i=0; i<array.length; i++)
    {
       var l=resultado.length; 
       for(var x=0; x<l; x++)
       {
         resultado.push(resultado[x].concat(array[i]))
       }
    }
return resultado;
}
 
var s=[3,1,4,2,31]; //Puse 31 porque si dejaba el 3 no lo tomaba en cuenta.
console.log(powerSet(s));
//Complejidad computacional exponencial