# 🔁 Cyclic Sort Algorithm (DSA Notes)

---

## 📌 What is Cyclic Sort?

Cyclic Sort is a **specialized sorting algorithm** used when:

✅ Numbers are in a **given range**
✅ Usually **1 to N** or **0 to N**
✅ We want **O(n) time complexity**

➡️ It places each number at its **correct index** by swapping.

---

## 🧠 Why is it called "Cyclic"?

Because elements are placed in their **correct position in cycles** until the entire array is sorted.

Each element keeps moving until it reaches its **correct index**.

---

## 📌 When Can We Use Cyclic Sort?

Cyclic Sort works **ONLY IF**:

✔ Array contains numbers from **1 to N**  
✔ OR numbers from **0 to N**  
✔ No missing numbers (basic version)

❌ Not for random numbers  
❌ Not for negative numbers  
❌ Not for decimals

---

## 📌 Core Logic (Most Important)

👉 Correct index for a number:

- If range is **1 to N**  
  correctIndex = value - 1

pgsql
Copy code

- If range is **0 to N**  
  correctIndex = value

yaml
Copy code

---

## 📊 Example

Input:
[3, 1, 5, 4, 2]

php
Copy code

Correct sorted array:
[1, 2, 3, 4, 5]

yaml
Copy code

---

## 🧠 How Cyclic Sort Works (Step-by-Step)

Array:
[3, 1, 5, 4, 2]

makefile
Copy code

Index = 0  
Value = 3  
Correct index = 3 - 1 = 2

Swap:
[5, 1, 3, 4, 2]

yaml
Copy code

Repeat until correct value is at index 0  
Then move to next index

---

## ✍️ JavaScript Code (Cyclic Sort)

```js
function cyclicSort(arr) {
  let i = 0

  while (i < arr.length) {
    let correctIndex = arr[i] - 1

    if (arr[i] !== arr[correctIndex]) {
      ;[arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]]
    } else {
      i++
    }
  }

  return arr
}

console.log(cyclicSort([ ]))
🧪 Dry Run (Very Important for Interview)
Array:

csharp
Copy code
[3, 1, 5, 4, 2]
i = 0 → arr[i] = 3 → correctIndex = 2
Swap → [5, 1, 3, 4, 2]

i = 0 → arr[i] = 5 → correctIndex = 4
Swap → [2, 1, 3, 4, 5]

i = 0 → arr[i] = 2 → correctIndex = 1
Swap → [1, 2, 3, 4, 5]

Now arr[i] is correct → move i++

⏱️ Time Complexity
Case	Complexity
Best	O(n)
Average	O(n)
Worst	O(n)

✅ Much faster than Bubble / Selection / Insertion

💾 Space Complexity
scss
Copy code
O(1)
✔ In-place sorting
✔ No extra memory used

🆚 Cyclic Sort vs Other Sorts
Algorithm	Time	Space	Use Case
Cyclic Sort	O(n)	O(1)	Range-based numbers
Quick Sort	O(n log n)	O(log n)	General purpose
Merge Sort	O(n log n)	O(n)	Stable sorting
Bubble Sort	O(n²)	O(1)	Learning only

📌 Common Problems Based on Cyclic Sort
🔥 VERY IMPORTANT FOR INTERVIEWS:

Missing Number

Find All Missing Numbers

Find Duplicate Number

Find All Duplicates

Set Mismatch

First Missing Positive

➡️ Most Google / Amazon array problems use Cyclic Sort logic

🧠 Interview Answer (One Line)
Cyclic Sort places each number at its correct index by swapping, achieving linear time complexity when numbers are in a fixed range.

📌 Key Points to Remember
✔ Works only for range-based arrays
✔ Uses correct index formula
✔ Very fast → O(n)
✔ In-place algorithm
✔ Foundation for many hard DSA problems

🚨 Common Mistakes
❌ Using it on unspecific ranges
❌ Forgetting value - 1 logic
❌ Incrementing index without checking swap

🎯 Where Cyclic Sort is Used?
Coding Interviews

DSA Problem Solving

Google / Amazon / Microsoft Questions

Competitive Programming

🔥 If you master Cyclic Sort, 30% of array interview problems become EASY

✅ Status: FAANG Interview Ready 🚀

yaml
Copy code

---

If you want next, I can give you **one single `.md` file** containing:

- Cyclic Sort
- Missing Number
- Find Duplicate
- Find All Missing

(all based on cyclic sort logic) 💪











```
