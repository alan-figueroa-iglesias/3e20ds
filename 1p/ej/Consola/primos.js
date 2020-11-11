console.log("Primos");

const readline=require("readline");
let captura=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

captura.question("Ingresa la serie de números: ", (n) => {
    var x=1, y=2, co;

    while(x<=n)
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
    captura.close;
});