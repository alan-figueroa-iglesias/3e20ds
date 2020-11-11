console.log("Quinto Factorial")

var a=0, b=0, x=0, array=[];

for(i=1;i<=5;i++)
{
   x=i;
   for(b=i-1;b>0;b--)
   {    
    x=x*b;
   }
    a=i;
    array[i]=x;
}
console.log(array[5]);  