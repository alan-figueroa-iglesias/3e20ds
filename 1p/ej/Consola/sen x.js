console.log("Sen x = x - x^3/3! + ... -");

const readline=require("readline");
let captura=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

captura.question("Ingresa el número de la serie: ", (n) => {
    captura.question("Ingresa x: ", (x2) => {
        
        var a=0,b=0,x=0;
        var i=2, base=3, resultado=0;
        
        console.log(x2);  
        while(i<=n)
        {
           x=base;
           for(b=base-1;b>0;b--)
           {    
            x=x*b;
           }
            a=base;
            resultado=Math.pow(x2, a)/x;
            
            if(i % 2===0)
                resultado=resultado*(-1);
            console.log(resultado);  
            
            i++;
            base=base+2;
        }
        captura.close;
    });
});