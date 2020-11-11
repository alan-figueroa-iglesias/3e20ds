console.log("Quinto número Fibonacci");

var f1=0,f2=1,r,s=1, array=[];

for(i=0; i<3; i++)
{
    r=f1+f2;
    array[i]=r;
    s=s+r;
    f1=f2;
    f2=r;
}
console.log(array[2]);  //EL 2 equivale al 5to numero de la serie Fibonacci, quedó de esta forma debido al arreglo que hice en el ciclo...