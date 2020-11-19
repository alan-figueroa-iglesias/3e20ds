console.log("Lucas Recursivo");

function lucas(x)
{
    if(x==0)
        return 2;
    if(x==1)
        return 1;
    if(x>1)
        return lucas(x-1) + lucas(x-2);
}

for(var i=0; i<15; i++)
    console.log(lucas(i));