console.log("Quinto número triángulo de Pascal");

var n=5, nt;

for(i=4; i<n; i++)
{
    nt=1;
    for(j=0; j<=i; j++)
    {
        console.log(nt);
        nt=nt*(i-j)/(j+1);
    }
}