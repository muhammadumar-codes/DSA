function bubbleSort() {
  const arr = [5, 1, 4, 2, 8]
  const n = arr.length
  let swapped = false

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        swapped = true
      }
    }
    if (!swapped) return
  }

  return arr
}

console.log(bubbleSort())
