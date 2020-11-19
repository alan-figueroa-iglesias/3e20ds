console.log("Combinaciones(S)");

var s=[3,1,4,2,3];
var array=[];

var n=function(x, s)
{
  for(var i=0;i<s.length;i++)
  {
    array.push(x+s[i]);
    n(x+s[i],s.slice(i+1));
  }
}

n('',s);
console.log(array);
//Complejidad computacional exponencial