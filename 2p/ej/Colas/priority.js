function Queue()
{
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.toString = toString;
}

function enqueue(element) 
{
    this.dataStore.push(element);
}

function dequeue() 
{
    return this.dataStore.shift();
}

function toString() 
{
    var retStr = "";

    for (var i = 0; i < this.dataStore.length; i++)
        retStr += this.dataStore[i] + "\n";

    return retStr;
}

function Patient(name, code) 
{
    this.name = name;
    this.code = code;
}

function dequeue() 
{
    var priority = this.dataStore[0].code;

    for (var i = 1; i < this.dataStore.length; i++) 
    {
        if (this.dataStore[i].code < priority) 
            priority = i;
    }

    return this.dataStore.splice(priority, 1);
}

function toString() 
{
    var retStr = "";

    for (var i = 0; i < this.dataStore.length; i++) 
        retStr += this.dataStore[i].name + " codigo: " + this.dataStore[i].code + "\n";

    return retStr;
}

var p = new Patient("Katia", 7);
var ed = new Queue();

ed.enqueue(p);
p = new Patient("Alan", 1);

ed.enqueue(p);
p = new Patient("Chava", 3);

ed.enqueue(p);
p = new Patient("María", 2);

ed.enqueue(p);
p = new Patient("Yesli", 2);
ed.enqueue(p);
console.log(ed.toString());

var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());

var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());

var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());