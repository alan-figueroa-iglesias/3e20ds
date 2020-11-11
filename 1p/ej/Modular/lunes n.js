var n=20, d;

console.log("Si hoy es lunes ¿Qué día será en " + n + " días?");

var dias=["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado"];

n=n+1;
d=n % 7;

console.log(dias[d]);
