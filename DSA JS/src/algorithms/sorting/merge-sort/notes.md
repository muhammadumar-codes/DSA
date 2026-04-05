🔀 Merge Sort Algorithm – DSA Notes (Interview Level)

---

## 📌 What is Merge Sort?

Merge Sort is a **Divide and Conquer** sorting algorithm.

It works by:

1. Dividing the array into **smaller subarrays**
2. Sorting each subarray **recursively**
3. **Merging** the sorted subarrays back together

➡️ Merge Sort guarantees **O(n log n)** time complexity in **all cases**.

---

## 🧠 Core Concept (Very Important)

> "Divide until one element remains, then merge in sorted order."

✔ Single elements are always sorted
✔ The main work happens during **merge**

---

## 📌 Steps of Merge Sort

1. Divide the array into two halves
2. Recursively apply Merge Sort on both halves
3. Merge the two sorted halves

---

## 📊 Example

Input:
[6, 3, 1, 5, 2, 4]

makefile
Copy code

Divide:
[6, 3, 1] [5, 2, 4]

yaml
Copy code

Divide again:
[6] [3, 1] [5] [2, 4]

makefile
Copy code

Merge:
[1, 3, 6] [2, 4, 5]

sql
Copy code

Final Merge:
[1, 2, 3, 4, 5, 6]

pgsql
Copy code

---

## ✍️ JavaScript Code (Merge Sort)

```js

  function mergeSort(arr) {
    if (arr.length <= 1) return arr

    const mid = Math.floor(arr.length / 2)

    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))

    return merge(left, right)
  }

  function merge(left, right) {
    let result = []
    let i = 0
    let j = 0

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i])
        i++
      } else {
        result.push(right[j])
        j++
      }
    }

  // return the result and concate the left and right array in

    return result
      .concat(left.slice(i))
      .concat(right.slice(j))
  }

  console.log(mergeSort([6, 3, 1, 5, 2, 4]))

🧪 Dry Run (Interview Favorite)
Array:

csharp
Copy code
[4, 1, 3, 2]
Split:

css
Copy code
[4, 1]  [3, 2]
Split again:

css
Copy code
[4] [1]  [3] [2]
Merge:

css
Copy code
[1, 4]  [2, 3]
Final:

csharp
Copy code
[1, 2, 3, 4]
⏱️ Time Complexity
Case	Time
Best	O(n log n)
Average	O(n log n)
Worst	O(n log n)

✔ Always same performance

💾 Space Complexity
scss
Copy code
O(n)
❌ Not in-place
✔ Uses extra space for merging

🧠 Is Merge Sort Stable?
✅ YES — Merge Sort is stable

Equal elements keep their original order

🆚 Merge Sort vs Quick Sort
Feature	Merge Sort	Quick Sort
Worst Case	O(n log n)	O(n²)
Space	O(n)	O(log n)
Stable	✅ Yes	❌ No
In-place	❌ No	✅ Yes

📌 When to Use Merge Sort?
✔ When stability is required
✔ Sorting linked lists
✔ Large datasets
✔ Guaranteed performance needed

🎯 Interview One-Line Answer
Merge Sort is a divide and conquer algorithm that splits the array and merges sorted halves with O(n log n) time.

🚨 Common Mistakes
❌ Forgetting base case
❌ Wrong merge logic
❌ Thinking it is in-place

🧠 Key Takeaways
✔ Divide & Conquer
✔ Always O(n log n)
✔ Stable sorting
✔ Extra memory required

✅ Status: MERGE SORT MASTERED – Interview Ready 🚀


Dry run the code



Step 1: Split
[6,3,1]   [5,2,4]

Step 2: Split further
[6] [3,1]   [5] [2,4]

Step 3: Split until length=1
[6] [3] [1]   [5] [2] [4]

Step 4: Merge step
Merge [3] & [1] → [1,3]
Merge [6] & [1,3] → [1,3,6]
Merge [2] & [4] → [2,4]
Merge [5] & [2,4] → [2,4,5]

Final Merge [1,3,6] & [2,4,5] → [1,2,3,4,5,6]
```

<!-- simple Tree  N Time of Log in  -->

```js

MergeSort([6,3,1,5,2,4])

                 [6 3 1 5 2 4]  <-- n elements
              /                    \
        [6 3 1]                     [5 2 4]
       /       \                    /     \
     [6]       [3 1]              [5]    [2 4]
               /   \                     /   \
             [3]   [1]                 [2]   [4]
```
