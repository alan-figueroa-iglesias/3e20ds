var matriz = [[1,2,3],  //Fila 1
              [4,5,6],  //Fila 2
              [7,8,9]]; //Fila 3

class proceso 
{
    fila(x,y)
    {
        var array=[];
        
        for(let i=0; i<y.length; i++)
            array[i]=y[x-1][i];
        
        return array;
    }
 } 
var fila = new proceso();

console.log("La fila " + 3 + " es: " + fila.fila(3, matriz));
 