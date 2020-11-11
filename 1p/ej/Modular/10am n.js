var n=5, d;

console.log("Si son las 10am ¿Qué horas serán en " + n + " hrs?");

n=n+10;
d=n % 24;

if(d>=0 && d<=12)
    console.log(d+" am");
else   
    console.log(d+" pm");
