# ⚡ Quick Sort Algorithm (DSA Notes)

---

## 📌 What is Quick Sort?

Quick Sort is a **divide and conquer** sorting algorithm.
It works by:

1. Selecting a **pivot** element
2. Placing the pivot at its **correct position**
3. Recursively sorting the **left** and **right** subarrays

➡️ It is one of the **fastest sorting algorithms in practice**.

---

## 🧠 Why is it called "Quick"?

Because on average, it sorts very fast due to:

- Efficient partitioning
- Less comparisons
- In-place sorting

---

## 📌 Steps of Quick Sort

1. Choose a pivot (first / last / middle / random)
2. Partition the array so that:
   - Elements < pivot → left
   - Elements > pivot → right

3. Pivot is now in correct position
4. Apply Quick Sort on left and right subarrays

---

## 📊 Example

Input:

```
[5, 3, 8, 4, 2]
```

Choose pivot = 5

After partition:

```
[3, 4, 2] 5 [8]
```

Recursively sort left and right

Output:

```
[2, 3, 4, 5, 8]
```

---

## ✍️ JavaScript Code (Quick Sort)

```js
function quickSort(arr) {
  if (arr.length <= 1) return arr //Base case

  let pivot = arr[arr.length - 1]
  let left = []
  let right = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i])
    else right.push(arr[i])
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([5, 3, 8, 4, 2]))
```

---

## 🧪 Dry Run

Array: `[5, 3, 8, 4, 2]`

- Pivot = 2
- Left = []
- Right = [5, 3, 8, 4]

Repeat process until arrays have 1 element

---

## ⏱️ Time Complexity

| Case         | Complexity                             |
| ------------ | -------------------------------------- |
| Best Case    | O(n log n)                             |
| Average Case | O(n log n)                             |
| Worst Case   | O(n²) (when pivot is smallest/largest) |

---

## 💾 Space Complexity

- O(log n) → Recursive stack (in-place version)
- O(n) → Extra space version (like above code)

---

## 🆚 Quick Sort vs Merge Sort

| Feature  | Quick Sort         | Merge Sort      |
| -------- | ------------------ | --------------- |
| Speed    | Faster in practice | Slightly slower |
| Space    | O(log n)           | O(n)            |
| Stable   | ❌ No              | ✅ Yes          |
| In-place | ✅ Yes             | ❌ No           |

---

## 📌 Key Points to Remember

- Divide and Conquer algorithm
- Pivot selection is important
- Not stable
- Very fast for large datasets
- Used in real systems

---

## 🎯 Where is Quick Sort Used?

- Competitive programming
- Large datasets
- System-level sorting
- Interviews (very common)

---

## 🧠 Interview Answer (One Line)

> Quick Sort works by selecting a pivot and partitioning the array around it, recursively sorting subarrays.

---

🔥 **Next you should study:**

- Partition logic (Lomuto & Hoare)
- Worst case optimization (Random Pivot)
- Quick Sort vs Heap Sort

---

✅ **Status:** Google / Amazon Interview Ready 🚀
