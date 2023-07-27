function selectionSortRecursive(arr) {
  // type your code here
  const sorted = []
  if (arr.length < 1){
    return [...sorted]
  }
  else {
    const min = Math.min(...arr);
    const idx = arr.indexOf(min);
    arr.splice(idx,1)
    return[...sorted, min, ...selectionSortRecursive(arr)]
  }

}

// function selectionSort(arr) {
//   const sorted = [];

//   while (arr.length > 0) {
//     const min = Math.min(...arr);
//     const idx = arr.indexOf(min);

//     sorted.push(min);
//     arr.splice(idx, 1);
//   }

//   return sorted;
// }

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
// The problem with solving this problem recursively if we declare a sorted array variable, each time the recursive algorithm runs it will be
