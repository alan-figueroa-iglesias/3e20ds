console.log("En una fiesta hay 3 invitados, si cada uno saluda a todos los demás, cuantos saludos ocurrieron?");

var n=3, r=0; 

for(i=1; i<n; i++)
{
    r=r+n-i;
}
console.log(r + " Saludos");