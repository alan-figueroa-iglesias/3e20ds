console.log("Factorial");

const readline=require("readline");
let captura=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

captura.question("Ingresa la serie de números: ", (n) => {

    var a=0,b=0,i=0,x=0;

    for(i=1;i<=n;i++)
    {
        x=i;
        for(b=i-1;b>0;b--)
        {    
            x=x*b;
        }
        a=i;
        console.log(a+"!="+x);  
    }
    captura.close;
});