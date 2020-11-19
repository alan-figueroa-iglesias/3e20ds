console.log("Aleatorios (min=1, max=n)");

const readline=require("readline");
let captura=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

captura.question("Ingresa el número de la serie: ", (x) => {
    captura.question("Ingresa el número máximo: ", (n) => {
    
    var r=0;
    for(i=1; i<=x; i++)
    {
        r = Math.floor(Math.random() * (n - 1) + 1);
        console.log(r);
    }
    captura.close;
    });
});
