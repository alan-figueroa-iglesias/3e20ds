console.log("existenRepetidos(S)");

var s=[3,1,4,2,3];
var r;

for (i=0; i<s.length; i++)
{
    for (j=0; j<s.length; j++) 
    {
        if (s[i] == s[j] && i != j) 
            r = "El número repetido es: " + s[i];
    }
 }
 console.log(r);

 //Complejidad Lineal