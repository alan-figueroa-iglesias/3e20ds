console.log("Fibonacci Recursivo");

function recursivo(num)
{
    if(num<=1)
        return num;
    else
    return recursivo(num-1)+recursivo(num-2);    
}

console.log(recursivo(10));
//La serie toma inicio desde el 1 y el 0 no lo toma en cuenta...