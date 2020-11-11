console.log("Ln (1+x) = x - x^2/2 + x^3/3 - ... +");

const readline=require("readline");
let captura=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

captura.question("Ingresa el número de la serie: ", (n) => {
    captura.question("Ingresa x: ", (x) => {
        var a=0;
        var i=2, resultado=0;
            
        console.log(x);  
        while(i<=n)
        {
            resultado=Math.pow(x, i)/i;
                
            if(i%2===0)
                resultado=resultado*(-1);

            console.log(resultado);  
            i++;
        }
        captura.close;
    });
});