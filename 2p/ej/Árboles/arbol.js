function Node(data)
{
  this.data = data;
  this.children = [];
}

class Tree 
{
  constructor() 
  {
    this.root = null;
  }

  add(data, toNodeData) 
  {
    const node = new Node(data);
    const parent = toNodeData ? this.findBFS(toNodeData) : null;

    if (parent)
      parent.children.push(node);
    else
    if (!this.root)
      this.root = node;
    else
      return 'Intenté almacenar el nodo en la raíz, si la raíz ya existe.'
  }

  findBFS(data) 
  {
    const queue = [this.root];
    let _node = null;
    this.traverseBFS((node) => 
    {
      if (node.data == data)
        _node = node;
    })

    return _node;
  }

  traverseBFS(cb) 
  {
    const queue = [this.root]

    if (cb)
      while (queue.length) 
      {
        const node = queue.shift();

        cb(node)

        for (const child of node.children)
          queue.push(child)
      }
  }
}

(function test() 
{
  let tree = new Tree();

  tree.add('Node 1')
  tree.add('Node 2', 'Node 1')
  tree.add('Node 3', 'Node 1')
  tree.add("Node 4", "Node 2")
  tree.add("Node 5", "Node 2")
  tree.add("Node 6", "Node 3")

  tree.traverseBFS((node) => 
  {
    console.log('Nodo Actual: ', node)
  })
})()