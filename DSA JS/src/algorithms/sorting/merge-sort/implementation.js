function merge(left, right) {
  const merged = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      merged.push(left[leftIndex])
      leftIndex += 1
    } else {
      merged.push(right[rightIndex])
      rightIndex += 1
    }
  }

  return merged
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex))
}

function mergeSort(values) {
  if (values.length <= 1) {
    return [...values]
  }

  const midpoint = Math.floor(values.length / 2)
  const leftHalf = mergeSort(values.slice(0, midpoint))
  const rightHalf = mergeSort(values.slice(midpoint))

  return merge(leftHalf, rightHalf)
}

module.exports = {
  merge,
  mergeSort,
}
