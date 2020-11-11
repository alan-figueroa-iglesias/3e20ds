console.log("Ln 2 = 1 - 1/2 + 1/3 - ... +");

const readline=require("readline");
let captura=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

captura.question("Ingresa el número de la serie: ", (n) => {

    var a=0;
    var i=2, resultado=0;
            
    console.log(1);  
    while(i<=n)
    {
        resultado=1/i;
                
        if(i%2===0)
            resultado=resultado*(-1);

        console.log(resultado);  
        i++;
    }
    captura.close;
});