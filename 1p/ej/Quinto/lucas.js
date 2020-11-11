console.log("Quinto número de Lucas");

var f1=2,f2=1,r,s=1, array=[];

for(i=3; i<=5; i++)
{
    r=f1+f2;
    array[i]=r;
    s=s+r;
    f1=f2;
    f2=r;
}
console.log(array[5]);