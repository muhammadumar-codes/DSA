function twoSum(array, target) {
  let i = 0,
    j = array.length - 1

  while (i < j) {
    let sum = array[i] + array[j]
    if (sum === target) {
      return [i, j]
    } else if (sum < target) {
      i++
    } else {
      j--
    }
  }
}

console.log(twoSum([1, 2, 3, 4, 5], 9))
