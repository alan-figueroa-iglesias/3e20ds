class Node 
{
  constructor(value) 
  {
      this.value = value;
      this.prev = null;
      this.next = null;
  }
}
  
class DoublyLinkedList 
{
  constructor() 
  {
      this.length = 0;
      this.head = null;
      this.tail = null;
  }
}

const newNode = new Node(1);
console.log(newNode);

const newDLL = new DoublyLinkedList();
console.log(newDLL);