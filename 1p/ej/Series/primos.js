console.log("Números Primos");

var x=1, y=2, co;

while(x<=10)
{
    co=0;
    for(i=1; i<=y; i++)
    {
        if(y%i === 0)
            co++;
    }
    if(co<=2)
    {
        console.log(y);
        x++;
    }
    y++;
}