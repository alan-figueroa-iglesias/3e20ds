console.log("Factorial Recursión");

function recursion (num)
{
  if(num==0)
    return 1;
  else
  return recursion(num-1)*num
}
  
 console.log(recursion(10));