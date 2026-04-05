function quickSort(values) {
  if (values.length <= 1) {
    return [...values]
  }

  const pivot = values[values.length - 1]
  const left = []
  const right = []

  for (let index = 0; index < values.length - 1; index += 1) {
    if (values[index] < pivot) {
      left.push(values[index])
    } else {
      right.push(values[index])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

module.exports = {
  quickSort,
}
