function quickSort(arr) {
  // Base case: arrays with 0 or 1 element are already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Choose a pivot (here, the last element is chosen for simplicity)
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  // Partition the array into left and right sub-arrays
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort the sub-arrays and combine the results
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const unsortedArray = [3, 7, 2, 8, 1, 5, 4];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 7, 8]
