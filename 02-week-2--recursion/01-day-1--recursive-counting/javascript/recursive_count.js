function recursiveCount(num = 0) {
  if (num > 9){
    return
  }
  console.log(num)
  recursiveCount(num + 1)  // type your code here
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
