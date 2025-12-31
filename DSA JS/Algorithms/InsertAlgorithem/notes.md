# 🔹 Insertion Sort Algorithm (JavaScript)

## 📌 Definition

**Insertion Sort** is a simple sorting algorithm that builds the final sorted array **one item at a time**.
It works similar to the way you **sort playing cards in your hands**.

---

## 🧠 Key Concept

- Take one element at a time (from unsorted part)
- Compare it with elements in the sorted part
- Insert it at the **correct position**

> Works well for **small arrays** or nearly sorted arrays

---

## ⏱️ Time & Space Complexity

| Case         | Complexity                |
| ------------ | ------------------------- |
| Best Case    | **O(n)** (Already sorted) |
| Average Case | **O(n^2)**                |
| Worst Case   | **O(n^2)**                |
| Space        | **O(1)** (In-place)       |

---

## 🎯 Where Insertion Sort is Used

- Small datasets
- Partially sorted arrays
- Educational purposes & learning sorting logic
- Simple sorting in interview questions

---

## 💬 Interview Answer (One Line)

> **Insertion Sort places each element at its correct position by comparing with the sorted part of the array.**

---

## 🧩 Algorithm Steps

1. Start from the second element (`i = 1`) as the first element is considered sorted
2. Store the current element in `key`
3. Compare `key` with elements in the sorted part (`arr[0..i-1]`)
4. Move elements greater than `key` one position ahead
5. Insert `key` at the correct position
6. Repeat for all elements

---

## ✅ Insertion Sort Code (JavaScript)

```js
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]
    let j = i - 1

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = key
  }

  return arr
}

const arr = [5, 2, 4, 6, 1, 3]
console.log(insertionSort(arr)) // [1, 2, 3, 4, 5, 6]
```

---

## 🚫 Common Mistakes

- Using `i` instead of `j` in the while loop condition
- Forgetting to decrement `j` inside the while loop
- Not inserting `key` at the correct position

---

## 📚 Variations / Next Steps

- Recursive Insertion Sort
- Binary Insertion Sort (using binary search for position)
- Compare with Selection Sort and Bubble Sort

---

## ✅ Summary

- Simple & intuitive **sorting algorithm**
- Best for **small or nearly sorted arrays**
- **In-place** and **stable** sorting method
- Time complexity: O(n^2) (average/worst), O(n) (best)

---

🔥 **Master Insertion Sort = Strong foundation for other sorting algorithms**
