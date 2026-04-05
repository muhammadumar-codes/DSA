function insertionSort(values) {
  const array = [...values]

  for (let index = 1; index < array.length; index += 1) {
    const currentValue = array[index]
    let position = index - 1

    while (position >= 0 && array[position] > currentValue) {
      array[position + 1] = array[position]
      position -= 1
    }

    array[position + 1] = currentValue
  }

  return array
}

module.exports = {
  insertionSort,
}
