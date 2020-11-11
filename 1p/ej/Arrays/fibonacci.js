console.log("Sucesión de Fibonacci");

var f1=0,f2=1,r,s=1, array=[];

console.log(f1);
console.log(f2);

for(i=0; i<8; i++)
{
    r=f1+f2;
    array[i]=r;
    console.log(array[i]);
    s=s+r;
    f1=f2;
    f2=r;
}