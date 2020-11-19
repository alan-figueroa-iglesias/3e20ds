console.log("Explicar diferencia entre map y weakmap con un ejemplo");

//WeakMap
/*
1- WeakSets puede utilizar objetos a diferencia de maps.
2- WeakMaps no se pueden iterar .
*/
var dato = {}, dato2 = {};
const datos = new WeakMap([[dato, "Alan"], [dato2, 19]]);
console.log(datos.get(dato)); 
console.log(datos.get(dato2));

//Map
/*
1- Se puede iterar. 
2- Se utiliza para almacenar valores únicos, excepto que es en par.
*/
var nombres = new Map();
nombres.set(1, "Alan");
nombres.set(2, 19);
console.log(nombres);