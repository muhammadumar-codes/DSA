# 📦 JavaScript Arrays — Complete Master Notes (DSA + Interview)

---

# 1️⃣ Definition (Interview Ready)

An **Array** is a linear data structure that stores multiple values in a sequence and allows access using **0-based indexing**.

- Linear → Elements stored one after another
- Indexed → Access using position

```js
const arr = []
arr.push('Hello')
arr.push(1)
arr.pop()
console.log(arr[0])
```

---

# 2️⃣ Important Properties

- Index starts from 0
- Arrays are dynamic in JavaScript
- Can store mixed data types
- Internally arrays are objects
- typeof [] === "object"

```js
const mixed = [1, 'two', true, null]
```

---

# 3️⃣ Sparse Arrays (Avoid in DSA)

```js
const arr = []
arr[5] = 100
console.log(arr)
```

⚠️ This creates empty slots before index 5.

Avoid sparse arrays in interviews.

---

# 4️⃣ Creating Arrays

## Recommended

```js
const a = [1, 2, 3]
```

## Constructor (Be Careful)

```js
const b = new Array(3)
```

⚠️ Creates empty slots, not values.

---

# 5️⃣ Basic Operations

## Sum of Elements

```js
let sum = 0
for (let i = 0; i < arr.length; i++) {
  sum += arr[i]
}
```

Using reduce:

```js
const sum = arr.reduce((acc, curr) => acc + curr, 0)
```

Time: O(n)

---

# 6️⃣ Maximum Element

```js
function maximum(arr) {
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
  }
  return max
}
```

Time: O(n) | Space: O(1)

---

# 7️⃣ Minimum Element

```js
let min = arr[0]
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) min = arr[i]
}
```

---

# 8️⃣ Second Maximum (Important 🔥)

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

Time: O(n)

---

# 9️⃣ Reverse Array

## With Extra Space

```js
const rev = []
for (let i = arr.length - 1; i >= 0; i--) {
  rev.push(arr[i])
}
```

## In-place (Best)

```js
let i = 0,
  j = arr.length - 1
while (i < j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
  i++
  j--
}
```

Time: O(n) | Space: O(1)

---

# 🔟 Rotation Problems

## Left Rotate by 1

```js
let first = arr[0]
for (let i = 0; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1]
}
arr[arr.length - 1] = first
```

---

## Right Rotate by 1

```js
let last = arr[arr.length - 1]
for (let i = arr.length - 1; i > 0; i--) {
  arr[i] = arr[i - 1]
}
arr[0] = last
```

---

## Rotate by K (Efficient Extra Space)

```js
let temp = new Array(arr.length)
k = k % arr.length

for (let i = 0; i < arr.length; i++) {
  temp[i] = arr[(i + k) % arr.length]
}
```

---

# 1️⃣1️⃣ Remove Duplicates (Sorted Array)

Two-pointer pattern.

```js
function removeDuplicates(arr) {
  let j = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      j++
      arr[j] = arr[i]
    }
  }
  arr.length = j + 1
  return arr
}
```

Time: O(n) | Space: O(1)

---

# 1️⃣2️⃣ Merge Two Sorted Arrays

```js
function merge(arr1, arr2) {
  let i = 0,
    j = 0
  const result = []

  while (i < arr1.length && j < arr2.length) {
    result.push(arr1[i] < arr2[j] ? arr1[i++] : arr2[j++])
  }

  while (i < arr1.length) result.push(arr1[i++])
  while (j < arr2.length) result.push(arr2[j++])

  return result
}
```

Time: O(n + m)

---

# 1️⃣3️⃣ Kadane’s Algorithm (Maximum Subarray)

```js
function maxSubArray(arr) {
  let current = arr[0]
  let maxSum = arr[0]

  for (let i = 1; i < arr.length; i++) {
    current = Math.max(arr[i], current + arr[i])
    maxSum = Math.max(maxSum, current)
  }

  return maxSum
}
```

Time: O(n) | Space: O(1)

---

# 1️⃣4️⃣ Majority Element (Moore’s Voting)

```js
function majorityElement(arr) {
  let count = 0,
    candidate = null

  for (let num of arr) {
    if (count === 0) candidate = num
    count += num === candidate ? 1 : -1
  }

  return candidate
}
```

Time: O(n) | Space: O(1)

---

# 1️⃣5️⃣ Dutch National Flag (Sort 0,1,2)

```js
let low = 0,
  mid = 0,
  high = arr.length - 1

while (mid <= high) {
  if (arr[mid] === 0) {
    ;[arr[low], arr[mid]] = [arr[mid], arr[low]]
    low++
    mid++
  } else if (arr[mid] === 2) {
    ;[arr[mid], arr[high]] = [arr[high], arr[mid]]
    high--
  } else {
    mid++
  }
}
```

Time: O(n) | Space: O(1)

---

# 1️⃣6️⃣ Two Sum (Sorted Array - Two Pointer)

```js
function twoSum(arr, target) {
  let i = 0,
    j = arr.length - 1

  while (i < j) {
    let sum = arr[i] + arr[j]

    if (sum === target) return [i, j]
    else if (sum < target) i++
    else j--
  }

  return []
}
```

---

# 📊 Complexity Cheat Sheet

| Operation       | Time |
| --------------- | ---- |
| Access          | O(1) |
| Search          | O(n) |
| Insert at End   | O(1) |
| Insert at Start | O(n) |
| Delete          | O(n) |
| Reverse         | O(n) |
| Rotate          | O(n) |

---

# 🧠 Interview Patterns Summary

- Rotation → Modulo logic
- Sorted array → Two pointers
- Subarray sum → Kadane
- Frequency dominance → Moore Voting
- 0/1/2 sorting → Three pointers
- Merge arrays → Two pointers

---

# ✅ Mastery Checklist

✔ Array basics
✔ Two pointer technique
✔ Rotation problems
✔ Subarray problems
✔ Majority element
✔ Sorting patterns

---

🔥 These cover 80% of array interview questions (FAANG level).

End of JavaScript Arrays Master Notes
