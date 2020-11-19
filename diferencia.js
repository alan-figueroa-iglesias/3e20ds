console.log("Explicar diferencia entre map y weakmap con un ejemplo")

//WeakSet
/*
1- Solo puede almacenar objetos.
2- El método arroja un error cuando se pasa un elemento que no es un objeto al WeakSet.
3- Los WeakSets no se pueden iterar.
4- WeakSet se limpia solo una vez que se elimina el objeto o si no hay ninguna referencia al objeto.
 */
var dato = {name: "Alan", age: 19}; 
const datos = new WeakSet(); 
datos.add(dato);
console.log(datos.has(dato));

//Set
/*
1- Se puede almacenar más que solo objetos.
2- Los sets se pueden iterar.
*/
const nombres = new Set(["Alan", 19]);
console.log(nombres);