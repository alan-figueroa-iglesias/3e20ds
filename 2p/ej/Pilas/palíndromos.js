function Stack() 
{
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.length = length;
}

function pop() 
{
  return this.dataStore[--this.top];
}

function length() 
{
  return this.top;
}

function push(element) 
{
  this.dataStore[this.top++] = element;
}

function palindromo(word) 
{
  var s = new Stack();

  for (var i=0; i<word.length; i++) 
    s.push(word[i]);
  
  var rword = "";

  while (s.length() > 0) 
    rword += s.pop();
  
  return word === rword;
}

var palabra = "TENET";
console.log(palindromo(palabra));