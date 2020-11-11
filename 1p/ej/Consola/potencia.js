console.log("Potencia");

const readline=require("readline");
let captura=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

captura.question("Ingresa el número de la serie de potencia: ", (n) => {
    captura.question("Ingresa el número base: ", (x) => {

    for(i=1; i<=n; i++)
    {
        console.log(x+ "^" + i + " = " + Math.pow(x,i));
    }
    captura.close;
    });
});
 