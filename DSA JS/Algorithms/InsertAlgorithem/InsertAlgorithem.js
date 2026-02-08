function insertionSort(arr) {
  for (let j = 1; j < arr.length; j++) {
    let key = arr[j]
    let k = j - 1

    while (arr[k] > key) {
      arr[k + 1] = arr[k]
      k--
    }

    arr[k + 1] = key
  }
  return arr
}

const arr = [5, 2, 4, 6, 1, 3]
console.log(insertionSort(arr))
