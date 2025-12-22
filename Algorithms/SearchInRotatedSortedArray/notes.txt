function search(arr, target) {
  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    let mid = Math.floor((first + last) / 2);

    if (arr[mid] === target) return mid;

    // LEFT half sorted
    if (arr[first] <= arr[mid]) {
      if (target >= arr[first] && target < arr[mid]) {
        
        last = mid - 1;
      } else {
        first = mid + 1;
      }
    }
    // RIGHT half sorted
    else {
      if (target > arr[mid] && target <= arr[last]) {
        first = mid + 1;
      } else {
        last = mid - 1;
      }
    }
  }
  return -1;
}


arr = [4,5,6,7,0,1,2]
target = 0
