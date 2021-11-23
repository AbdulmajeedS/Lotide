const args = process.argv.splice(2);

let sum = 0;
let num1 = parseInt(args[0]);
let num2 = parseInt(args[1]);

function getSum(num1, num2)  {
  return (num1) + (num2);
};

console.log(getSum((num1), (num2)));