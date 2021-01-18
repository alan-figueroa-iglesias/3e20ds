function procedimiento(n) 
{
    let s = new Recursion();

    while (n > 1) 
        s.push(n--);
    
    let product = 1;

    while (s.length() > 0) 
        product *= s.pop();
    
    return product;
}

function Recursion() 
{
    this.dataStore = [];
    this.top = 0;

    this.push = function (element) 
    {
        this.dataStore[this.top++] = element;
    }

    this.pop = function () 
    {
        return this.dataStore[--this.top];
    }
    
    this.peek = function () 
    {
        return this.dataStore[this.top - 1];
    }
    
    this.length = function () 
    {
        return this.top;
    }
    
    this.clear = function () 
    {
        this.top = 0;
    }
}

console.log("El Factorial de 7 = " + procedimiento(7));