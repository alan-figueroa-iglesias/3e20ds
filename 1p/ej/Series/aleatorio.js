console.log("Números Aleatorios 1-10");

var x=0;

for(i=0; i<10; i++)
{
    x = Math.floor(Math.random() * (11 - 1) + 1);
    console.log(x);
}