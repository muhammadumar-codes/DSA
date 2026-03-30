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

````js
function maximum(arr) {
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
  }
  return max
}
```z`

Time: O(n) | Space: O(1)

---

# 7️⃣ Minimum Element

```js
let min = arr[0]
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) min = arr[i]
}
````

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

````js
// Right rotation
function rotateRight(array, k) {
let n = array.length

let temp = new Array(n)
k = k % n

for (let index = 0; index < n; index++) {
temp[(index + k) % n] = array[index]
}

console.log(temp)
}

## rotateRight([1,2,3,4,5], 3)

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
````

Time: O(n) | Space: O(1)

---

# 1️⃣2️⃣ Merge Two Sorted Arrays

```js
function mergeArray(array1, array2) {
  let i = 0
  let j = 0
  let merge = []

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      merge.push(array1[i])
      i++
    } else {
      merge.push(array2[j])
      j++
    }
  }

  // remaining elements
  while (i < array1.length) {
    merge.push(array1[i])
    i++
  }

  while (j < array2.length) {
    merge.push(array2[j])
    j++
  }

  return merge
}

console.log(mergeArray([1, 2, 3, 4], [5, 6, 7, 8]))
```

Time: O(n + m)

---

z`

# 1️⃣3️⃣ Kadane’s Algorithm (Maximum Subarray)

````js
function kadane(arr) {
  let currentSum = 0
  let maxSum = -Infinity

  for (let num of arr) {
    currentSum += num

    maxSum = Math.max(maxSum, currentSum)

    if (currentSum < 0) {
      currentSum = 0
    }
  }

  return maxSum
}

console.log(kadane([-2, 3, -1, 4, -5]))```

Time: O(n) | Space: O(1)

---

# 1️⃣4️⃣ Majority Element (Moore’s Voting)

```
````

Time: O(n) | Space: O(1)

---

# 1️⃣5️⃣ Dutch National Flag (Sort 0,1,2)

```jsz
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
function twoSum(nums, target) {
  let map = new Map()

  for (let i = 0; i < nums.length; i++) {
    let needed = target - nums[i]

    if (map.has(needed)) {
      return [map.get(needed), i]
    }

    map.set(nums[i], i)
  }
}
// 2️⃣ Palindrome Number

function Palindram(nums) {
  let origianl = nums
  let reverse = 0

  while (nums > 0) {
    let lastDigit = nums % 10
    reverse = reverse * 10 + lastDigit
    nums = Math.floor(nums / 10)
  }

  return origianl === reverse
}
```

function majorityElement(arr) {
let count = 0
let candidate = null

for (let num of arr) {
if (count === 0) {
candidate = num
}

    if (num === candidate) {
      count++
    } else {
      count--
    }

}

return candidate
}

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
