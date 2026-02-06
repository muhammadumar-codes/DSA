function binarySearch(arr, target, left, right) {
  // base case
  if (left > right) return -1

  let mid = Math.floor((left + right) / 2)
  ro
  if (arr[mid] === target) {
    return mid
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, right)
  } else {
    return binarySearch(arr, target, left, mid - 1)
  }
}

console.log(binarySearch([1, 2, 3, 4, 5], 4, 0, 4)) // ✅ 3
