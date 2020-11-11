console.log("Quinto número Triangular");

var n, array=[];

for(i=1; i<=5; i++)
{
    n=i;
    n=n*(n+1)/2;
    array[i]=n;
}
console.log(array[5]);