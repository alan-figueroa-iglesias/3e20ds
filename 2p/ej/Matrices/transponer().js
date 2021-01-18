var matri = [[1, 4, 7],
             [2, 5, 8], 
             [3, 6, 9]];

class matriz 
{
  sacarColumna(p, m) 
  {
    let c = [];

    for (let i = 0; i < m.length; i++) 
      c[i] = m[i][p - 1];

    return c;
  }

  transponer(matri) 
  {
    let matriz2 = [];
    
    for (let i = 0; i < matri.length; i++) 
      matriz2[i] = this.sacarColumna(i + 1, matri);

    return matriz2;
  }
}

console.table(matri);
console.log("Matriz Transpuesta");
let matriz2 = new matriz();
console.table(matriz2.transponer(matri));