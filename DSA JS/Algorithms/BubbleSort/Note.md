# 🔵 Bubble Sort Algorithm (JavaScript)

## 📌 Definition

**Bubble Sort** is a simple comparison-based sorting algorithm where **adjacent elements are repeatedly compared and swapped** if they are in the wrong order.

The largest element **"bubbles up"** to the end of the array in each pass.

---

## 🧠 Key Idea

> Compare adjacent elements and swap them until the array becomes sorted.

- Repeatedly passes through the array
- After each pass, the largest element moves to the end
- Sorting happens step by step like bubbles rising in water

---

## ⚙️ How Bubble Sort Works (Steps)

1. Start from index `0`
2. Compare `arr[i]` with `arr[i + 1]`
3. Swap if `arr[i] > arr[i + 1]`
4. Continue till the end of the array
5. Repeat passes until no swaps are needed

---

## 🧩 Example Walkthrough

Unsorted Array:

```
[5, 1, 4, 2]
```

Steps:

- Pass 1 → `[1, 4, 2, 5]` (5 bubbled to end)
- Pass 2 → `[1, 2, 4, 5]`
- Pass 3 → No swaps → Sorted

Sorted Array:

```

```

---

## ⏱️ Time Complexity

| Case    | Complexity                          |
| ------- | ----------------------------------- |
| Best    | **O(n)** (Already sorted with flag) |
| Average | **O(n²)**                           |
| Worst   | **O(n²)**                           |

---

## 💾 Space Complexity

- **O(1)** (In-place sorting)

---

## 💬 Interview Answer (One Line)

> **Bubble Sort repeatedly swaps adjacent elements until the array is sorted.**

---

## ✅ Bubble Sort Code (JavaScript)

[1, 2, 4, 5]

```js
function bubbleSort(arr) {
  let n = arr.length

  for (let i = 0; i < n - 1; i++) {
    let swapped = false

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        swapped = true
      }
    }

    // If no swap happened, array is already sorted
    if (!swapped) break
  }

  return arr
}

const arr = [5, 1, 4, 2, 8]
console.log(bubbleSort(arr)) // [1, 2, 4, 5, 8]
```

---

## 📌 Why It Is Called "Bubble" Sort?

- Larger elements **bubble up** to the end
- Smaller elements move toward the beginning

---

## 🎯 Where Bubble Sort Is Used

- Learning basic sorting concepts
- Very small datasets
- Educational purposes

---

## 🚫 Disadvantages

- Very slow for large datasets
- Time complexity is mostly **O(n²)**
- Not suitable for real-world large applications

---

## ✅ Key Points to Remember

- Compares **adjacent elements** only
- Largest element settles at the end after each pass
- Can be optimized using a `swapped` flag
- Simple but inefficient

---

## 📚 What to Learn Next

- Comparison: Bubble vs Selection vs Insertion
- Merge Sort
- Quick Sort

---

🔥 **Bubble Sort is the foundation of understanding how sorting works internally**
