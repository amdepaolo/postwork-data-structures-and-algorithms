function fibonacci(num) {
  const fibArr = [0,1]
  for (let i=2; i<= num; i++){
    let nextNum = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
    fibArr.push(nextNum);
  }
 return fibArr[num]
}

function recursiveFib(num) {
  if (num < 1){
    return num }
  else{
    return recursiveFib(num - 1) + recursiveFib ( num - 2)
  }

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 2");
  console.log("=>", fibonacci(3));

  console.log("");

  console.log("Expecting: 5");
  console.log("=>", fibonacci(5));

  console.log("");

  console.log("Expecting: 8");
  console.log("=>", fibonacci(6));

  console.log("");

  console.log("Expecting: 89");
  console.log("=>", fibonacci(11));

  console.log("");

  console.log("Recursive Test Expecting: 2")
  console.log("=>", recursiveFib(3))

  console.log("");

  console.log("Recursive Test Expecting: 8")
  console.log("=>", recursiveFib(6))

  console.log("");

  console.log("Recursive Test Expecting: 89")
  console.log("=>", recursiveFib(11))

  console.log("");

  console.log("Ref Fib arg: 23")
  console.log("=>", fibonacci(23))  

  console.log("");

  console.log("Recursive Fob arg: 23")
  console.log("=>", recursiveFib(23))
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// function fibonaccit(number in sequence)
  // let fibonacci array = [0,1]
  // for (i = 0; i less than or equal to number; i++)
    // find next number by adding last number of array to second to last array.
    // push number to end of array
  // after for loop completes, return last number of array

// And a written explanation of your solution

// We should have code that continues the fibonacci sequence for the number of times we ask it to. So we should put a for loop in the function that uses the argument as the place to stop. We should declare two numbers as variables using let so that they can be redefined as the last two digits of the sequence
