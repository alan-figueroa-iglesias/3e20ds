console.log("Permutaciones(S)");

var s=[3,1,4,2,3];

function permutaciones (num) 
{ 
    var array =[]; 
    function permutar (x, y) 
    { 
        var c, m = y || []; 
        for (var i=0; i<x.length; i++) 
        { 
            c=x.splice(i, 1)[0]; 
            if(x.length === 0) 
                array.push(m.concat([c])); 

            permutar(x.slice(), m.concat([c])); 
            x.splice(i, 0, c); 
        } 
        return array; 
    } 
    return permutar(num); 
}

console.log(permutaciones(s));
//Complejidad computacional cuadráticas