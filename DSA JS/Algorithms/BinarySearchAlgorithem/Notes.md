# 🔍 Binary Search Algorithm (JavaScript)

## 📌 Definition

**Binary Search** is a searching algorithm that works on a **sorted array**.
It reduces the search space by **dividing it into half on every step**.

---

## 🧠 Key Concept

> Binary Search = Divide by 2

At each step:

- Find the **middle element**
- Compare it with the **target**
- Eliminate **half of the array**

---

## ⚠️ Important Notes (Must Remember)

- ✅ Array **must be sorted**
- ❌ Does NOT work on unsorted arrays
- 🔥 Very efficient for large data

---

## ⏱️ Time & Space Complexity

| Case  | Complexity           |
| ----- | -------------------- |
| Time  | **O(log n)**         |
| Space | **O(1)** (Iterative) |

---

## 🎯 Where Binary Search is Used

- Arrays
- Searching problems
- Interview questions
- DSA & Competitive Programming
- LeetCode / Codeforces

---

## 💬 Interview Answer (One Line)

> **Binary search reduces the search space by half in every step.**

---

## 🧩 Algorithm Steps

1. Set `left = 0`
2. Set `right = arr.length - 1`
3. Find `mid`
4. Compare `arr[mid]` with `target`
5. Move left or right pointer
6. Repeat until found or pointers cross

---

## ✅ Binary Search Code (JavaScript)

```js
function binarySearch(arr, target) {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1
}
```

---

## 🧪 Example Usage

```js
const arr = [2, 4, 6, 8, 10, 12, 14]
const target = 10

const result = binarySearch(arr, target)
console.log(result) // 4
```

---

## 🚫 Common Mistakes

- Using binary search on **unsorted array**
- Wrong `mid` calculation
- Infinite loop due to wrong pointer update
- Comparing index instead of value

---

## 📚 What to Learn Next

- Recursive Binary Search
- First & Last Occurrence
- Lower Bound / Upper Bound
- Search Insert Position
- Binary Search on Answer

---

## ✅ Summary

- Binary Search is **fast & efficient**
- Works only on **sorted arrays**
- Reduces complexity from **O(n) → O(log n)**
