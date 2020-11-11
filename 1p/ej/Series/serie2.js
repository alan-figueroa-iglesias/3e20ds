console.log("Serie impar con negativos");

var n=-1;

for(i=0; i<10; i++)
{
    n=n+2;
    if(n==1 || n==5 || n==9 || n==13 || n==17)
    {
        n=n*(-1);
        console.log(n);
        n=n*(-1);
    }
    else
    console.log(n);
}