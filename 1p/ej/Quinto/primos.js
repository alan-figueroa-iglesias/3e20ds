console.log("Quinto número Primo");

var x=1, y=2, co, array=[];

while(x<=5)
{
    co=0;
    for(i=1; i<=y; i++)
    {
        if(y%i === 0)
            co++;
    }
    if(co<=2)
    {
        array[x]=y;
        x++;
    }
    y++;
}
console.log(array[5]);