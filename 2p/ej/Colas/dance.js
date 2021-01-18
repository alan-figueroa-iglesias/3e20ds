function Queue() 
{ 
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.count = count;
}

function enqueue(element) 
{
    this.dataStore.push(element);
}

function dequeue()
{
    return this.dataStore.shift();
}

function front() 
{
    return this.dataStore[0];
}

function back() 
{
    return this.dataStore[this.dataStore.length-1];
}

function toString() 
{
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; i++) 
        retStr += this.dataStore[i] + "\n";

    return retStr;
}

function empty() 
{
    if (this.dataStore.length == 0) 
        return true;
    else 
        return false;
}

function count() 
{
    return this.dataStore.length;
}

function Pareja(nombre,sexo) 
{
    this.nombre = nombre;
    this.sexo = sexo;
}

function Parejas(h, m, nombres) 
{
    var arreglo = nombres;

    for (var i=0; i<arreglo.length; i++) 
    {
        var b = arreglo[i];
        var sex = b[0];
        var nombre = b[1];

        if (sex == "M") 
            mujeres.enqueue(new Pareja(nombre, sex));
        
        else 
            hombres.enqueue(new Pareja(nombre, sex));
    }
}

function citas(h, m) 
{
    console.log("Los parejas son:");

    while (!m.empty() && !h.empty()) 
    {
        M = m.dequeue();
        H = h.dequeue();
        console.log("La mujer es: " + M.nombre+" y el hombre es: " + H.nombre);
    }

    console.log();
}

var parejas = [['M','Katia'],['H','Alan'],
         ['H','Chava'],['M','Kimberly'],
         ['H','David'],['M','Gemma'],
         ['M','Laura'],['H','Carlos'],
         ['M','Sofía'], ['H','Logan']];

var hombres = new Queue();
var mujeres = new Queue();

Parejas(hombres, mujeres, parejas);
citas(hombres, mujeres);