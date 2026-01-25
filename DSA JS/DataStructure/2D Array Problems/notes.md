# 🧮 2D Array (Matrix) – Complete Notes (JavaScript)

A **2D Array (Matrix)** is an array of arrays. It is mainly used to represent **tables, grids, and matrices**.

---

## 📌 Basic Structure

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
]
```

- `matrix.length` → number of rows
- `matrix[i].length` → number of columns in row `i`

---

## 🔁 Traversing a 2D Array

```js
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j])
  }
}
```

---

## 🔍 Find Maximum Element in 2D Array

```js
const array = [
  [1, 2, 3],
  [4, 5, 6],
]

let maximum = array[0][0]

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    if (array[i][j] > maximum) {
      maximum = array[i][j]
    }
  }
}

console.log(maximum) // 6
```

---

## ➕ Sum of All Elements

```js
const array = [
  [1, 2, 3],
  [4, 5, 6],
]

let sum = 0

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    sum += array[i][j]
  }
}

console.log(sum) // 21
```

---

## 🔎 Linear Search in 2D Array

```js
const array = [
  [1, 2, 3],
  [4, 5, 6],
]

let target = 5
let found = false

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    if (array[i][j] === target) {
      console.log(`Found at row ${i}, column ${j}`)
      found = true
    }
  }
}
```

---

## 🔄 Transpose of a Matrix

> Rows become columns and columns become rows

```js
const array = [
  [1, 2, 3],
  [4, 5, 6],
]

let transpose = []

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    if (!transpose[j]) transpose[j] = []
    transpose[j][i] = array[i][j]
  }
}

console.log(transpose)
// [[1,4],[2,5],[3,6]]
```

---

## 🔁 Rotate Matrix by 90° Clockwise

### 🧠 Algorithm

1. Transpose the matrix
2. Reverse each row

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

// STEP 1: Transpose
for (let i = 0; i < matrix.length; i++) {
  for (let j = i; j < matrix.length; j++) {
    let temp = matrix[i][j]
    matrix[i][j] = matrix[j][i]
    matrix[j][i] = temp
  }
}

// STEP 2: Reverse each row
for (let i = 0; i < matrix.length; i++) {
  matrix[i].reverse()
}

console.log(matrix)
```

---

## 🚫 Set Matrix Zeros

> If any cell is 0, set its entire row & column to 0

```js
const Matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]

let rows = Matrix.length
let cols = Matrix[0].length

let rowZero = new Array(rows).fill(false)
let colZero = new Array(cols).fill(false)

// STEP 1: Mark rows & columns
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    if (Matrix[i][j] === 0) {
      rowZero[i] = true
      colZero[j] = true
    }
  }
}

// STEP 2: Set zeroes
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    if (rowZero[i] || colZero[j]) {
      Matrix[i][j] = 0
    }
  }
}

console.log(Matrix)
```

---

## 🌀 Spiral Traversal of Matrix

### Example

Input:

```js
;[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
```

Output:

```
[1, 2, 3, 6, 9, 8, 7, 4, 5]
```

### Code

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

let top = 0
let bottom = matrix.length - 1
let left = 0
let right = matrix[0].length - 1

let result = []

while (top <= bottom && left <= right) {
  // left → right
  for (let i = left; i <= right; i++) {
    result.push(matrix[top][i])
  }
  top++

  // top → bottom
  for (let i = top; i <= bottom; i++) {
    result.push(matrix[i][right])
  }
  right--

  // right → left
  if (top <= bottom) {
    for (let i = right; i >= left; i--) {
      result.push(matrix[bottom][i])
    }
    bottom--
  }

  // bottom → top
  if (left <= right) {
    for (let i = bottom; i >= top; i--) {
      result.push(matrix[i][left])
    }
    left++
  }
}

console.log(result)
```

---

## ✅ Key Points to Remember

- Always use **nested loops** for 2D arrays
- `i` → rows, `j` → columns
- Matrix problems are **very important for interviews**
- Practice transpose, rotation, and traversal
