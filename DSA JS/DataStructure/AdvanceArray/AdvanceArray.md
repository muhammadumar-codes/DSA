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

---

# 🔥 Advanced Array Problems (DSA + Interview Notes)

## 1️⃣ Left Rotation by 1 (First Element to Last)

**Problem:** Move first element to last, shift others left by 1.

**Example:**

```
[1,2,3,4,5] → [2,3,4,5,1]
```

**Algorithm (In-place):**

- Store first element
- Shift all elements left
- Put stored value at last index

**Time:** O(n) | **Space:** O(1)

```js
let arr = [1, 2, 3, 4, 5]
let first = arr[0]
for (let i = 0; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1]
}
arr[arr.length - 1] = first
```

---

## 2️⃣ Right Rotation by 1 (Last Element to First)

**Example:**

```
[1,2,3,4,5,6] → [6,1,2,3,4,5]
```

**Time:** O(n) | **Space:** O(1)

```js
function rightRotateByOne(arr) {
  let last = arr[arr.length - 1]
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1]
  }
  arr[0] = last
  return arr
}
```

---

## 3️⃣ Rotate Array by K Times (Left Rotation)

### 🔹 Method 1: Repeated Rotation

**Time:** O(n × k)

```js
for (let r = 0; r < k; r++) {
  let first = arr[0]
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1]
  }
  arr[arr.length - 1] = first
}
```

### 🔹 Method 2: Extra Space (Efficient)

**Time:** O(n) | **Space:** O(n)

```js
let temp = new Array(arr.length)
k = k % arr.length
for (let i = 0; i < arr.length; i++) {
  temp[i] = arr[(i + k) % arr.length]
}
```

---

## 4️⃣ Remove Duplicates from Sorted Array

**Input:** `[1,1,2,2,3,3]`

**Output length:** `3`

**Pattern:** Two-pointer technique

**Time:** O(n) | **Space:** O(1)

```js
function removeDuplicates(arr) {
  let j = 1
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr[j++] = arr[i + 1]
    }
  }
  return j
}
```

---

## 5️⃣ Merge Two Sorted Arrays

**Time:** O(n + m) | **Space:** O(n + m)

```js
let i = 0,
  j = 0,
  k = 0
while (i < arr1.length && j < arr2.length) {
  merge[k++] = arr1[i] < arr2[j] ? arr1[i++] : arr2[j++]
}
while (i < arr1.length) merge[k++] = arr1[i++]
while (j < arr2.length) merge[k++] = arr2[j++]
```

---

## 6️⃣ Best Time to Buy & Sell Stock

**Pattern:** Min so far + Max profit

**Time:** O(n) | **Space:** O(1)

```js
let min = prices[0],
  maxProfit = 0
for (let price of prices) {
  min = Math.min(min, price)
  maxProfit = Math.max(maxProfit, price - min)
}
```

---

## 7️⃣ Sort 0s, 1s & 2s (Dutch National Flag)

**Pattern:** Three pointers

**Time:** O(n) | **Space:** O(1)

```js
let low = 0,
  mid = 0,
  high = arr.length - 1
while (mid <= high) {
  if (arr[mid] === 0) [arr[low++], arr[mid++]] = [arr[mid], arr[low]]
  else if (arr[mid] === 2) [arr[mid], arr[high--]] = [arr[high], arr[mid]]
  else mid++
}
```

---

## 8️⃣ Kadane’s Algorithm (Maximum Subarray Sum)

**Time:** O(n) | **Space:** O(1)

<!-- Watch The video For this Algorithem -->

https://youtube.com/shorts/Az8S1ZGpV_M?si=petptyguF_fhBBrX

````js
function maxSubArray(arr) {
  let currentSum = arr[0];
  let maxSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

---

## 9️⃣ Majority Element (Moore’s Voting Algorithm)

**Key Idea:** Cancel out different elements

**Time:** O(n) | **Space:** O(1)

```js
let count = 0, candidate = null
for (let num of arr) {
  if (count === 0) candidate = num
  count += (num === candidate) ? 1 : -1
}
return candidate
````

---

## 🧠 Interview Patterns to Remember

- Rotation → modulo + shifting
- Sorted array → two pointers
- Max/min problems → tracking variables
- Subarray sum → Kadane
- Frequency dominance → Moore’s Voting
- 0/1/2 sorting → Three pointers

---

📌 **These problems cover ~80% of array interview questions (FAANG level).**
