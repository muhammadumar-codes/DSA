// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (arr[mid] === target) {
//       return mid; // found
//     } else if (arr[mid] < target) {
//       left = mid + 1; // right half
//     } else {
//       right = mid - 1; // left half
//     }
//   }

//   return -1; // not found
// }

// console.log(binarySearch([2, 4, 6, 8, 10, 12, 14], 214));

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // it is to find the mid point  of the problem
    let mid = Math.floor((left + right) / 2);

    // if in array the mid si found return the mid
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
// here declare teh varible start and end pointer

const choiceNumber = Number(prompt("Enter Your Number"));
if (!choiceNumber) console.log("Please Valid Number");

const result = binarySearch([2, 4, 6, 8, 10, 12, 14], choiceNumber);
console.log(result);
