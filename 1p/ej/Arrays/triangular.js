console.log("Números Triangulares");

var n, array=[];

for(i=1; i<=10; i++)
{
    n=i;
    n=n*(n+1)/2;
    array[i]=n;
    console.log(array[i]);
}