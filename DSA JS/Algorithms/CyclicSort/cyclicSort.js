function cyclicSort(arr) {
  let i = 0
  let correctIndex = arr[i] - 1

  while (i < arr.length) {
    if (arr[i] !== arr[correctIndex]) {
      ;[arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]]
    } else {
      i++
    }
  }
  return arr
}

const arr = [3, 1, 5, 4, 2]
console.log(cyclicSort(arr))
