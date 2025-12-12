// This code is the insert algrithem which is ujsed to insert  elements

function insertSort() {
  const array = [5, 3, 4, 1, 2]

  for (let i = 0; i < array.length; i++) {
    let key = array[i]
    let j = i - 1

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j]
      j--
    }

    array[j + 1] = key
  }

  return array
}

// callig of it
console.log(insertSort())
