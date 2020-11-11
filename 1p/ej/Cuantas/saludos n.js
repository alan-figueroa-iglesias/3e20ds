var n=50, r=0; 

console.log("En una fiesta hay "+ n + " invitados, si cada uno saluda a todos los demás, cuantos saludos ocurrieron?");

for(i=1; i<n; i++)
{
    r=r+n-i;
}
console.log(r + " Saludos");
