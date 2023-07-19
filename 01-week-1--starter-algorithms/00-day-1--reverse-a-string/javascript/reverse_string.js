function reverseString(str) {
  // type your code here
  let stringArray = str.split('')
  let reverseArray = []
  for (const letter of stringArray) {
    reverseArray.unshift(letter)
  }
  return reverseArray.join('')
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("");

  console.log("Expecting: '987654321'");
  console.log("=>", reverseString("123456789"));

  console.log("");

  console.log("Expecting: 'wow!#'");
  console.log("=>", reverseString("#!wow"));

  console.log("");

  console.log("Expecting: 'woW'");
  console.log("=>", reverseString("Wow"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// take a string, 
// split it into it's individual characters
// create an empty array 
  // for each character in the string
    // add to the array at the begininng
  // join the new array
  // return  

// And a written explanation of your solution

// Turns the string into an array of each character, then iterates through the array adding each character to the beginning, and moving the preceding letter over one, until the last character is now at the beginning of the new array. It then joins the new array back together to make the output a  string.
