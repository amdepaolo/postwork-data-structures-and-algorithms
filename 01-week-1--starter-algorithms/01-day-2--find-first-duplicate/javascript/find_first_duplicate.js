function findFirstDuplicate(arr) {
  // type your code here
  let firstDupKey = arr.length;
  for (let i = 0; i < arr.length; i ++){
    for (let j = i+1; j < arr.length; j ++){
      if (arr[i] === arr[j]){
        if(j < firstDupKey){
          firstDupKey = j
        }
      }
    }
  }
  if(firstDupKey === arr.length){
    return -1
  }
  else return arr[firstDupKey]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("");

  console.log("Expecting: 5");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4, 5, 5]));

  console.log("");

  console.log("Expecting: 2");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4, 2, 5, 5]));
}

module.exports = findFirstDuplicate;


// declare firstDuplicate key as array length 
// itirate numbers in array starting at [0]
  // compare current number to rest of numbers of array
    //  if numbers match, 
        // if key is lower than firstDuplicate key 
          // later number key = firstDuplicate key
// if firstDuplicate key still = array length
    // return -1
// else return array[firstDuplicatekey]

// This is probably not the most efficient solution, but It will first set a value for the key of the firstDuplicate. It will then go through the array, and for each number it will compare it to the rest of the array, if it finds a match it will than see if the key of the match is lower than the current firstDuplicate key value, if so then make that the new value for firstDuplicate. Once the iteration completes, If the firstDuplicateKey value is still the array length, then return -1, otherwise return the array value at the first duplicate key