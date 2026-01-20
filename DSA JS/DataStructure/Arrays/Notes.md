# 📦 JavaScript Arrays — Master Notes (DSA + Interview)

## 1️⃣ Definition (Interview Ready)

**Array** is a **linear data structure** that stores **multiple values** in a **contiguous memory-like sequence** and is accessed using **indexes** (0-based).

> Linear means: data is arranged **one after another**.

````js Array Methods
# 📚 JavaScript Array Methods – Complete Notes (Google / FAANG Level)

> ✍️ Prepared for **DSA + JavaScript Interviews**
>
> Focus: **Which methods return a value** vs **which modify original array (in-place)**

---

## 🧠 What is an Array?

An **Array** is a collection of elements stored in **contiguous memory locations**.

```js
let arr = [10, 20, 30, 40];
````

---

# 🟢 CATEGORY 1: Methods that **DO NOT return** a new array

> ⚠️ These **modify the original array**

---

## 1️⃣ push() ✅ (IN-PLACE)

Adds element(s) at the **end**

```js
let arr = [1, 2]
arr.push(3)
// arr = [1, 2, 3]
```

- 🔁 Modifies array
- 📤 Returns **new length**

---

## 2️⃣ pop() ✅ (IN-PLACE)

Removes element from **end**

```js
let arr = [1, 2, 3]
arr.pop()
// arr = [1, 2]
```

- 🔁 Modifies array
- 📤 Returns **removed element**

---

## 3️⃣ shift() ✅ (IN-PLACE)

Removes element from **start**

```js
let arr = [1, 2, 3]
arr.shift()
// arr = [2, 3]
```

- ⏱ O(n)
- 📤 Returns removed element

---

## 4️⃣ unshift() ✅ (IN-PLACE)

Adds element(s) at **start**

```js
let arr = [2, 3]
arr.unshift(1)
// arr = [1, 2, 3]
```

- ⏱ O(n)
- 📤 Returns new length

---

## 5️⃣ splice() ⚠️ (VERY IMPORTANT)

Add / Remove / Replace elements

```js
let arr = [1, 2, 3, 4]
arr.splice(1, 2, 99, 100)
// arr = [1, 99, 100, 4]
```

- 🔁 Modifies original array
- 📤 Returns **removed elements**

---

## 6️⃣ sort() ⚠️ (IN-PLACE)

Sorts array

```js
let arr = [10, 2, 5]
arr.sort((a, b) => a - b)
```

- 🔁 Modifies array
- ⚠️ String sort by default

---

## 7️⃣ reverse() ✅ (IN-PLACE)

```js
let arr = [1, 2, 3]
arr.reverse()
// [3, 2, 1]
```

---

# 🔵 CATEGORY 2: Methods that **RETURN a new array** (SAFE)

---

## 8️⃣ map() ⭐⭐⭐

Transforms each element

```js
let arr = [1, 2, 3]
let res = arr.map((x) => x * 2)
// [2, 4, 6]
```

- ❌ Does NOT modify original
- 📤 Returns new array

---

## 9️⃣ filter() ⭐⭐⭐

Returns elements based on condition

```js
let arr = [1, 2, 3, 4]
let res = arr.filter((x) => x % 2 === 0)
// [2, 4]
```

---

## 🔟 slice() ⭐⭐⭐

Extracts part of array

```js
let arr = [1, 2, 3, 4]
let res = arr.slice(1, 3)
// [2, 3]
```

- ❌ Original unchanged

---

## 1️⃣1️⃣ concat()

Merge arrays

```js
let a = [1, 2]
let b = [3, 4]
let c = a.concat(b)
```

---

# 🟣 CATEGORY 3: Methods that return **SINGLE VALUE**

---

## 1️⃣2️⃣ reduce() ⭐⭐⭐⭐⭐

Most powerful method

```js
let arr = [1, 2, 3]
let sum = arr.reduce((acc, curr) => acc + curr, 0)
// 6
```

- Used for sum, max, frequency map

---

## 1️⃣3️⃣ find()

Returns first match

```js
let arr = [10, 20, 30]
arr.find((x) => x > 15)
// 20
```

---

## 1️⃣4️⃣ findIndex()

Returns index

```js
arr.findIndex((x) => x === 20)
```

---

## 1️⃣5️⃣ includes()

```js
arr.includes(10) // true
```

---

## 1️⃣6️⃣ indexOf() / lastIndexOf()

---

# 🟡 CATEGORY 4: Iteration Methods (NO RETURN)

---

## 1️⃣7️⃣ forEach()

```js
arr.forEach((x) => console.log(x))
```

- ❌ No return
- ⚠️ Cannot break

---

# 🔴 CATEGORY 5: Utility / Conversion

---

## 1️⃣8️⃣ join()

```js
;['a', 'b'].join('-') // 'a-b'
```

---

## 1️⃣9️⃣ toString()

---

## 2️⃣0️⃣ Array.from()

```js
Array.from('abc') // ['a','b','c']
```

---

## 2️⃣1️⃣ Array.isArray()

```js
Array.isArray([]) // true
```

---

# 📊 FINAL INTERVIEW SUMMARY TABLE

| Method   | Modifies Original? | Returns   |
| -------- | ------------------ | --------- |
| push     | ✅                 | length    |
| pop      | ✅                 | element   |
| shift    | ✅                 | element   |
| unshift  | ✅                 | length    |
| splice   | ✅                 | array     |
| sort     | ✅                 | array     |
| reverse  | ✅                 | array     |
| map      | ❌                 | array     |
| filter   | ❌                 | array     |
| slice    | ❌                 | array     |
| reduce   | ❌                 | value     |
| forEach  | ❌                 | undefined |
| find     | ❌                 | element   |
| includes | ❌                 | boolean   |

---

## 🎯 Google Interview Tips

- ❓ Difference between **map vs forEach**
- ❓ Why reduce is powerful?
- ❓ How to avoid mutation?
- ❓ Time Complexity of push vs shift

---

🔥 **Next Notes Suggestions**

- String methods
- Object methods
- Sliding Window problems
- Prefix Sum
- Two Pointer Patterns

---

✍️ _Prepared by Jani – DSA & JavaScript Master Notes_

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

```js

int removeDuplicates(int arr[], int n) {
    int j = 0;
    for(int i = 1; i < n; i++) {
        if(arr[i] != arr[j]) {
            j++;
            arr[j] = arr[i];
        }
    }
    return j + 1;
}

```

```js

This is Two Sum algorithem Brute force

function twoSum(arr, target) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let sum = arr[i] + arr[j];

    if (sum === target) {
      return [i, j];
    } else if (sum < target) {
      i++;
    } else {
      j--;
    }
  }

  return [];
}

console.log(twoSum([2,3,1], 3)); // [0,2]

```
