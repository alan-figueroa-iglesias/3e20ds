console.log("Si hoy es lunes ¿Qué día será en 11 días?");

var dias=["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado"];
var n=11, d;

n=n+1;
d=n % 7;

console.log(dias[d]);