// Paste your iterative and recursive solutions in this file
// And then calculate their average run times to compare them.

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

function selectionSort(arr) {
  const sorted = [];

  while (arr.length > 0) {
    const min = Math.min(...arr);
    const idx = arr.indexOf(min);

    sorted.push(min);
    arr.splice(idx, 1);
  }

  return sorted;
}




function benchmark(callback) {
  const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    callback();
  }

  return (Date.now() - startTime) / 1000;
}

console.log('Iterative:', benchmark(() => selectionSort([2, 3, 4, 1, 4, 56, -2, 20])));
console.log('Recursive:', benchmark(() => selectionSortRecursive([2, 3, 4, 1, 4, 56, -2, 20])));