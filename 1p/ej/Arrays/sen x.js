console.log("Sen x = x - x^3/3! + ...");

var a=0,b=0,x=0, array=[];
var i=1, base=3, resultado=0;

console.log(3);  
while(i<10)
{
   x=base;
   for(b=base-1; b>0; b--)
   {    
    x=x*b;
   }
    a=base;
    resultado=Math.pow(3, a)/x;
    
    if(a==3 || a==7 || a==11 || a==15 || a==19)
        resultado=resultado*(-1);
    
    array[i]=resultado;    
    console.log(array[i]);  
    
    i++;
    base=base+2;
}