<!-- What is Hashing ? -->
<!-- why we need the hashing  -->
<!-- What is the Differnce between Object and map -->
<!-- Why we use diferet of thig for storing dta for hashing -->

````js
// in this code we put only the unique elements


# 🔐 Hashing in Data Structures & Algorithms (DSA)

📌 *Prepared for Google / FAANG level interviews*
✍️ *Language focus: JavaScript*

---

## 📘 What is Hashing?

**Hashing** is a technique used to **map data of any size to fixed-size values** using a **hash function**.
It allows **fast insertion, deletion, and searching**.

> 💡 Real-life example:
> Dictionary → Word (key) → Page number (value)

---

## 🧠 Key Terminology

| Term          | Meaning                            |
| ------------- | ---------------------------------- |
| Key           | Input data (e.g., name, number)    |
| Hash Function | Function that converts key → index |
| Hash Value    | Output index                       |
| Hash Table    | Array that stores data             |
| Collision     | Two keys map to same index         |

---

## 📦 What is a Hash Table?

A **Hash Table** is a data structure that stores data in **key–value pairs** using a hash function.

```text
Index: 0   1   2   3   4
       |   |   |   |
      (A) (B) (C)
````

---

## ⚙️ How Hashing Works (Step-by-Step)

1. Take a **key**
2. Pass it to a **hash function**
3. Hash function returns an **index**
4. Store value at that index in array

---

## ✏️ Simple Hash Function Example

```js
function hash(key, size) {
  let hashValue = 0
  for (let char of key) {
    hashValue += char.charCodeAt(0)
  }
  return hashValue % size
}

console.log(hash('apple', 10))
```

---

## 🚨 Collision in Hashing

**Collision** occurs when:

> Two different keys generate the **same index**

```text
hash("cat") → 2
hash("dog") → 2   ❌ collision
```

---

## 🛠️ Collision Resolution Techniques

### 1️⃣ Chaining (Most Important)

Each index stores a **linked list / array**

```js
class HashTable {
  constructor(size) {
    this.table = new Array(size)
  }

  set(key, value) {
    const index = this._hash(key)
    if (!this.table[index]) this.table[index] = []
    this.table[index].push([key, value])
  }

  get(key) {
    const index = this._hash(key)
    if (!this.table[index]) return null

    for (let pair of this.table[index]) {
      if (pair[0] === key) return pair[1]
    }
    return null
  }

  _hash(key) {
    let hash = 0
    for (let char of key) hash += char.charCodeAt(0)
    return hash % this.table.length
  }
}
```

---

### 2️⃣ Open Addressing (Theory)

| Type              | Description            |
| ----------------- | ---------------------- |
| Linear Probing    | Check next empty index |
| Quadratic Probing | Jump using square      |
| Double Hashing    | Use 2nd hash function  |

---

## ⏱ Time Complexity

| Operation | Average | Worst |
| --------- | ------- | ----- |
| Insert    | O(1)    | O(n)  |
| Search    | O(1)    | O(n)  |
| Delete    | O(1)    | O(n)  |

---

## 📊 Load Factor

```
Load Factor = Total elements / Table size
```

✔ Low load factor → fast performance
❌ High load factor → more collisions

---

## 🔁 Rehashing

When load factor increases:

1. Create new bigger table
2. Recalculate all hash values
3. Insert again

---

## 🧩 Hashing vs Array vs Linked List

| Feature | Array | Linked List | Hash Table |
| ------- | ----- | ----------- | ---------- |
| Search  | O(n)  | O(n)        | O(1)       |
| Insert  | O(n)  | O(1)        | O(1)       |
| Order   | Yes   | Yes         | No         |

---

## 🧠 Hashing in JavaScript (Built-in)

### ✅ Map

```js
let map = new Map()
map.set('name', 'Umar')
map.set('age', 22)
console.log(map.get('name'))
```

### ✅ Set

```js
let set = new Set()
set.add(10)
set.add(10)
console.log(set.size) // 1
```

---

## 🧪 Common Hashing Problems (Interview)

✔ Two Sum
✔ Frequency Counter
✔ First Non-Repeating Character
✔ Group Anagrams
✔ Longest Consecutive Sequence

---

## 🧠 Example: Character Frequency Count

```js
function freqCount(str) {
  let map = {}
  for (let ch of str) {
    map[ch] = (map[ch] || 0) + 1
  }
  return map
}

console.log(freqCount('hello'))
```

---

## 🎯 Interview Tips (Google Level)

✅ Explain hash function clearly
✅ Mention collision handling
✅ Talk about load factor
✅ Use Map instead of Object in JS

---

## ✅ Summary

✔ Hashing provides **fast access**
✔ Collision handling is critical
✔ Chaining is most commonly used
✔ Hash tables are backbone of DSA

---

🔥 **Next Suggested Topics**

• HashMap Problems Practice
• Two Sum (Dry Run)
• Sliding Window + Hashing
• Hashing vs Sorting

---

```js
const arr = [1, 2, 2, 4, 5, 5]
let map = new Map()

for (let i = 0; i < arr.length; i++) {
  if (map.has(arr[i])) {
    map.set(arr[i], map.get(arr[i]) + 1)
  } else {
    map.set(arr[i], 1)
  }
}

console.log(map)
```

```js
function checkIfPangram(sentence) {
  let set = new Set()

  for (let ch of sentence) {
    set.add(ch)
  }

  return set.size === 26
}

console.log(checkIfPangram('abcdefghijklmnopqrstuvwxyz'))
```

````js
function unique() {
  let arr = [1, 2, 3, 4, 4, 3]
  let set = new Set()

  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      set.delete(arr[i])
    } else {
      set.add(arr[i])
    }
  }
  console.log(set)
}
unique()





# Hashing — Google-Level Complete Notes (DSA)

> These notes are written for **Google / FAANG-level interviews**. They cover **concepts, internals, trade-offs, edge cases, and patterns**.

---

## 1. What is Hashing?

Hashing is a technique to **map data of any size to a fixed-size value** using a **hash function**, enabling **fast insert, delete, and search** operations.

**Goal:**

* Achieve **O(1)** average time complexity

---

## 2. Hash Function (Very Important)

A **hash function** converts a key into an index of a hash table.

### Properties of a Good Hash Function

* Deterministic (same key → same hash)
* Uniform distribution
* Fast computation
* Minimizes collisions

### Example

```js
function hash(key, size) {
  return key % size;
}
````

---

## 3. Hash Table (Core Data Structure)

A **Hash Table** stores key-value pairs using hashing.

### Components

- Array (bucket storage)
- Hash function
- Collision handling method

---

## 4. Collision (Most Asked Topic)

Collision happens when **two keys map to the same index**.

### Types of Collision Resolution

### 4.1 Chaining (Used by Google-level solutions)

Each bucket stores a **linked list** of values.

```js
index → [ (k1,v1) → (k2,v2) ]
```

**Pros:**

- Simple
- No clustering

**Cons:**

- Extra memory

---

### 4.2 Open Addressing

All elements stored inside the array itself.

#### a) Linear Probing

```js
index = (hash + i) % size
```

#### b) Quadratic Probing

```js
index = (hash + i * i) % size
```

#### c) Double Hashing

```js
index = (h1(key) + i * h2(key)) % size
```

---

## 5. Load Factor (Very Important)

```
Load Factor = n / size
```

- n = number of elements
- size = table size

### Google Rule

- If load factor > 0.7 → **Rehash**

---

## 6. Rehashing

When load factor increases:

1. Create new table (usually double size)
2. Reinsert all keys

---

## 7. Time Complexity (Interview Focus)

| Operation | Average | Worst |
| --------- | ------- | ----- |
| Insert    | O(1)    | O(n)  |
| Search    | O(1)    | O(n)  |
| Delete    | O(1)    | O(n)  |

Worst case happens when **all keys collide**.

---

## 8. JavaScript Hashing (Real World)

### Map (Preferred in Interviews)

```js
let map = new Map()
map.set('a', 1)
map.get('a')
```

### Set

```js
let set = new Set([1, 2, 3])
```

### Object vs Map

| Object         | Map          |
| -------------- | ------------ |
| Keys as string | Any type key |
| Slower         | Faster       |

---

## 9. Google Interview Hashing Patterns

### Pattern 1: Frequency Counting

```js
let freq = {}
for (let c of str) freq[c] = (freq[c] || 0) + 1
```

### Pattern 2: Prefix Sum + Hash

Used in:

- Subarray sum = K

### Pattern 3: Seen Before

Used in:

- Two Sum
- First duplicate

---

## 10. MUST-KNOW Google Problems

### Easy

- Two Sum
- First Unique Character
- Contains Duplicate

### Medium

- Subarray Sum Equals K
- Longest Consecutive Sequence
- Group Anagrams

### Hard

- LRU Cache
- Design HashMap

---

## 11. Two Sum (Google Favorite)

```js
function twoSum(nums, target) {
  let map = new Map()

  for (let i = 0; i < nums.length; i++) {
    let need = target - nums[i]
    if (map.has(need)) return [map.get(need), i]
    map.set(nums[i], i)
  }
}
```

---

## 12. Design HashMap (Concept)

- Array of buckets
- Each bucket → linked list
- Custom hash function

Google loves **design-based questions**.

---

## 13. When NOT to Use Hashing

- Ordered data required
- Range queries
- Memory constraints

---

## 14. Interview Tips (Google)

- Always mention **collision handling**
- Explain **why average O(1)**
- Discuss **worst case**
- Prefer **Map over Object**

---

## 15. Final Google Mindset

> Hashing is not about syntax.
> It is about **patterns + trade-offs + design clarity**.

---

## ✅ If you master this, you are Google-ready 🚀

Next I can give you:

- Google-level **Hashing problem set with dry runs**
- **LRU Cache full design**
- **FAANG DSA roadmap**

Next Problem To Solve

```
Sort The people
Two sum
intersection of The Two arrays
subarary sum equal to K
longest subarray with sum K
Longest consequative sequence


```
