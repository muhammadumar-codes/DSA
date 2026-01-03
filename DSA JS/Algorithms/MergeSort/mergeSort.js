function mergeSort(arr) {
  if (arr.length <= 1) return arr; // base case

  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));  // left half
  const right = mergeSort(arr.slice(mid));    // right half

  return merge(left, right); // merge two sorted halves
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) { // compare left & right
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // push remaining elements if any
  return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([6, 3, 1, 5, 2, 4]));
