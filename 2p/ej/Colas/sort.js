function distribute(nums, queues, n, digit) 
{
    for (var i = 0; i < n; ++i) 
    {
        if (digit == 1) 
            queues[nums[i] % 10].enqueue(nums[i]);
        else 
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
    }
}

function collect(queues, nums) 
{
    var i = 0;

    for (var digit = 0; digit < 10; ++digit) 
    {
        while (!queues[digit].empty()) 
            nums[i++] = queues[digit].dequeue();
    }
}

function dispArray(arr) 
{
    for (var i = 0; i < arr.length; ++i) 
        console.log(arr[i] + " ");
}

function Queue() 
{ //Crear una cola
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.empty = empty;
}

function enqueue(element) 
{
    this.dataStore.push(element);
}

function dequeue() 
{
    return this.dataStore.shift();
}

function back() 
{
    return this.dataStore[this.dataStore.length - 1];
}

function empty() 
{
    if (this.dataStore.length == 0) 
        return true;
    else 
        return false;
}

var queues = [];
for (var i = 0; i < 15; ++i)
    queues[i] = new Queue();
    
var nums = [];
for (var i = 0; i < 15; ++i) 
    nums[i] = Math.floor(Math.floor(Math.random() * 51));

console.log("Números Sin Ordenar:");
dispArray(nums);
distribute(nums, queues, 15, 1);
collect(queues, nums);
distribute(nums, queues, 15, 15);
collect(queues, nums);

console.log("Números Ordenados:");
dispArray(nums);