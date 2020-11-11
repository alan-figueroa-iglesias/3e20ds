console.log("Factorial")

var a=0,b=0,i=0,x=0;

for(i=1;i<=10;i++)
{
   x=i;
   for(b=i-1;b>0;b--)
   {    
    x=x*b;
   }
    a=i;
    console.log(a+"!="+x);  
}