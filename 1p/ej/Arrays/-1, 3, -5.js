console.log("Serie impar con negativos");

var n=-1, array=[];

for(i=0; i<10; i++)
{
    n=n+2;
    if(n==1 || n==5 || n==9 || n==13 || n==17)
    {
        n=n*(-1);
        array[i]=n;
        console.log(array[i]);
        n=n*(-1);
    }
    else
    {
        array[i]=n;
        console.log(array[i]);
    }
}
