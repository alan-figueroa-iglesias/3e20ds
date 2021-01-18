//Columna      1 2 3
var matriz = [[1,2,3], 
              [4,5,6],
              [7,8,9]];

class proceso 
{
    columna(x,y)
    {
        var array=[];
        
        for(let i=0; i<y.length; i++)
            array[i]=y[i][x-1];
        
        return array;
    }
 } 
var columna = new proceso();

console.log("La columna " + 2 + " es: " + columna.columna(2, matriz));