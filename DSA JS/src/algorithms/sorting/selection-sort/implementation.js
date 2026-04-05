function selectionSort(values) {
  const array = [...values]

  for (let start = 0; start < array.length - 1; start += 1) {
    let smallestIndex = start

    for (let index = start + 1; index < array.length; index += 1) {
      if (array[index] < array[smallestIndex]) {
        smallestIndex = index
      }
    }

    if (smallestIndex !== start) {
      ;[array[start], array[smallestIndex]] = [
        array[smallestIndex],
        array[start],
      ]
    }
  }

  return array
}

module.exports = {
  selectionSort,
}
