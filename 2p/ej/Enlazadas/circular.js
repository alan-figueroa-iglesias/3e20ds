var CircularList = function () 
{
  this.push = function (value) 
  {
    var newNode = { value: value };

    if (this.head) 
    {
      newNode.next = this.head;
      newNode.previous = this.head.previous;
      this.head.previous.next = newNode;
      this.head.previous = newNode;
    } 
    else 
    {
      this.head = newNode;
      newNode.next = newNode;
      newNode.previous = newNode;
    }
  };
}

var cl = new CircularList();
cl.push({ name: "Hola" });
cl.push({ name: "buenos" });
cl.push({ name: "días" });

console.log(cl.head.value.name + " " + cl.head.next.value.name + " " + cl.head.previous.value.name);