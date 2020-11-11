console.log("Har = 1 + 1/2 + ... + //suma harmónica");

const readline=require("readline");
let captura=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

captura.question("Ingresa el número de la serie: ", (n) => {

    var i=2, resultado=0;
            
    console.log(1);  
    while(i<=n)
    {
        resultado=1/i;

        console.log(resultado);
        i++;
    }
    captura.close;
});