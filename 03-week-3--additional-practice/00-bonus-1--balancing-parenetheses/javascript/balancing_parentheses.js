function balancingParentheses(string) {
  const parArr = string.split('')
  let openCount = 0
  const starter = parArr.shift();
  if (starter=== "(" || starter===")"){
    openCount +=1
  }
  parArr.forEach(character => {
    if (character === "("){
      openCount += 1
    }
    else if (character === ")"){
      openCount -=1
    }
  });
  return Math.abs(openCount)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
