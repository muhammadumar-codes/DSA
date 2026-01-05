# 📦 JavaScript Arrays — Master Notes (DSA + Interview)

## 1️⃣ Definition (Interview Ready)

**Array** is a **linear data structure** that stores **multiple values** in a **contiguous memory-like sequence** and is accessed using **indexes** (0-based).

> Linear means: data is arranged **one after another**.

```js
const arr = []
arr.push('Hello')
arr.push(1)
arr.pop()
console.log(arr[0])
```

---

## 2️⃣ Important Properties

- Index starts from **0**
- Arrays are **dynamic** in JS
- Can store **mixed data types**
- Arrays are **objects internally**

```js
const mixed = [1, 'two', true, null]
```

---

## 3️⃣ Assign Value at Any Index

Yes, JS allows sparse arrays.

```js
const arr = []
arr[5] = 100
console.log(arr) // empty slots before index 5
```

⚠️ Creates **empty items** → avoid in DSA unless required.

---

## 4️⃣ Creating Arrays

### Array Literal (Recommended)

```js
const a = [1, 2, 3]
```

### Array Constructor

```js
const b = new Array(3) // length = 3
b.push('Hi')
```

⚠️ `new Array(3)` creates **empty slots**, not values.

---

## 5️⃣ Taking Input & Sum of Elements

### Using Loop

```js
let sum = 0
const arr = [2, 3, 5]
for (let i = 0; i < arr.length; i++) {
  sum += arr[i]
}
```

### Using `reduce`

```js
const sum = arr.reduce((acc, curr) => acc + curr, 0)
```

📌 **Interview Tip:** `reduce` is preferred in functional JS.

---

## 6️⃣ Maximum Element in Array

```js
function maximum(arr) {
  if (!Array.isArray(arr)) return 'Invalid Array'
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
  }
  return max
}
```

⏱ Time: **O(n)** | Space: **O(1)**

---

## 7️⃣ Minimum Element

```js
let min = arr[0]
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) min = arr[i]
}
```

---

## 8️⃣ Second Maximum Element (Important 🔥)

```js
function secondMax(arr) {
  let max = -Infinity
  let sMax = -Infinity

  for (const num of arr) {
    if (num > max) {
      sMax = max
      max = num
    } else if (num > sMax && num < max) {
      sMax = num
    }
  }
  return sMax
}
```

📌 Asked in **Amazon / Flipkart**

---

## 9️⃣ Reverse Array

### With Extra Space

```js
const rev = []
for (let i = arr.length - 1; i >= 0; i--) {
  rev.push(arr[i])
}
```

### Without Extra Space (Best)

```js
let i = 0,
  j = arr.length - 1
while (i < j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
  i++
  j--
}
```

⏱ Time: **O(n)** | Space: **O(1)**

---

## 🔟 Move All Zeros to Front

```js
let i = 0,
  j = 0
while (i < arr.length) {
  if (arr[i] === 0) {
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
    j++
  }
  i++
}
```

📌 Two-pointer technique

---

## 1️⃣1️⃣ Common Array Methods

| Method  | Purpose       |
| ------- | ------------- |
| push    | add end       |
| pop     | remove end    |
| shift   | remove start  |
| unshift | add start     |
| slice   | copy part     |
| splice  | insert/remove |
| map     | transform     |
| filter  | select        |
| reduce  | accumulate    |
| sort    | sort          |
| reverse | reverse       |

---

## 1️⃣2️⃣ Multi-Dimensional Arrays

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

for (const row of matrix) {
  for (const value of row) {
    console.log(value)
  }
}
```

// Data
const users = [
{ id: 1, name: 'Rolex Submariner', brand: 'Rolex' },
{ id: 2, name: 'Omega Speedmaster', brand: 'Omega' },
{ id: 3, name: 'Tag Heuer Carrera', brand: 'Tag Heuer' },
{ id: 4, name: 'Breitling Navitimer', brand: 'Breitling' },
{ id: 5, name: 'Cartier Santos', brand: 'Cartier' },
]

```js How to Delete a users using findIndex and Delete using SpliceMethod
const id = 3

const result = users.findIndex((item) => item.id === id)

const RemainingUser = users.splice(result, 1)

console.log(RemainingUser)

console.log(users)

---

## 1️⃣3️⃣ Important Interview Notes 🔥

- Arrays are **objects** → passed by reference
- `typeof [] === 'object'`
- JS arrays are **dynamic**, unlike C++
- Avoid sparse arrays in DSA
- Prefer `for` loop for performance

---

## 1️⃣4️⃣ Complexity Cheat Sheet

| Operation    | Time |
| ------------ | ---- |
| Access       | O(1) |
| Search       | O(n) |
| Insert end   | O(1) |
| Insert start | O(n) |
| Delete       | O(n) |

---

## ✅ What You Have Mastered

✔ Array basics
✔ DSA patterns
✔ Two-pointer logic
✔ Reduce / Map / Filter
✔ Interview problems

---

### 🔥 NEXT TOPICS (Recommended Order)

1️⃣ Strings (DSA + patterns)
2️⃣ Sliding Window
3️⃣ Prefix Sum
4️⃣ Sorting Algorithms
5️⃣ LeetCode Array Problems

👉 Just say: **"Jani next – Strings master notes"** 💪
```
