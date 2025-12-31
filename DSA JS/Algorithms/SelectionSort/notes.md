# 🔹 Selection Sort Algorithm (JavaScript)

## 📌 Definition

**Selection Sort** is a simple sorting algorithm that repeatedly **selects the smallest element** from the unsorted part of the array and places it at its **correct position**.

---

## 🧠 Key Idea

> Select the minimum element and put it in the correct place.

- The array is divided into **sorted** and **unsorted** parts
- In every round, the smallest element from the unsorted part is selected
- Only **one swap per round**

---

## ⚙️ How Selection Sort Works (Steps)

1. Start from index `i = 0`
2. Find the minimum element from index `i` to the end
3. Swap the minimum element with the element at index `i`
4. Move `i` to the next position
5. Repeat until the array is sorted

---

## 🧩 Example Walkthrough

Unsorted Array:

```
[3, 1, 4, 2]
```

Steps:

- Pass 1 → Min = `1` → Swap with `3` → `[1, 3, 4, 2]`
- Pass 2 → Min = `2` → Swap with `3` → `[1, 2, 4, 3]`
- Pass 3 → Min = `3` → Swap with `4` → `[1, 2, 3, 4]`

Sorted Array:

```
[1, 2, 3, 4]
```

---

## ⏱️ Time Complexity

| Case    | Complexity |
| ------- | ---------- |
| Best    | **O(n²)**  |
| Average | **O(n²)**  |
| Worst   | **O(n²)**  |

> Selection Sort is **slow for large datasets**

---

## 💾 Space Complexity

- **O(1)** (In-place sorting)
- Uses **no extra memory**

---

## 💬 Interview Answer (One Line)

> **Selection Sort repeatedly selects the smallest element from the unsorted part and places it at the correct position.**

---

## ✅ Selection Sort Code (JavaScript)

```js
const array = [10, 5, 12, 1, 3]
let n = array.length

for (let i = 0; i < n - 1; i++) {
  let min = i

  for (let j = i + 1; j < n; j++) {
    if (array[min] > array[j]) {
      min = j
    }
  }

  if (min !== i) {
    ;[array[i], array[min]] = [array[min], array[i]]
  }
}

console.log(array) // [1, 3, 5, 10, 12]
```

---

## 📌 Why It Is Called "Selection" Sort?

- Because in each round, it **selects** the smallest element
- Then places it at the correct index

---

## 🎯 Where Selection Sort Is Used

- Small datasets
- Learning basic sorting algorithms
- When **memory usage must be minimal**

---

## 🚫 Key Disadvantages

- Always O(n²) time complexity
- Not suitable for large datasets
- Slower than Insertion Sort for nearly sorted arrays

---

## ✅ Key Points to Remember

- Always finds minimum from the **unsorted part**
- Performs **only one swap per iteration**
- Simple but **inefficient for large data**

---

## 📚 What to Learn Next

- Bubble Sort
- Insertion Sort vs Selection Sort comparison
- Merge Sort (efficient sorting)

---

🔥 **Selection Sort builds strong fundamentals for understanding advanced sorting algorithms**
