console.log("Si hoy es lunes ¿Qué día fue hace 11 días?");

var dias=["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado"];
var n=-11, d;

d=n % 7;
d=d*(-1);

console.log(dias[d]);