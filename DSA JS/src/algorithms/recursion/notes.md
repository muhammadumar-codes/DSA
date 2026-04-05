# 🔁 Recursion in JavaScript (DSA Notes)

## 📘 Definition

**Recursion** is a technique where a function **calls itself** to solve a problem by breaking it into **smaller subproblems**, until it reaches a **base case**.

> 🛑 **Base Case** stops infinite calls
> 🔁 **Recursive Case** calls the function again

---

## 🧠 Key Concepts

- Every recursion must have:
  1. **Base Case** (stop condition)
  2. **Recursive Call** (same function calling itself)

- Uses **call stack** memory
- Common in **DSA, trees, graphs, backtracking**

---

## 1️⃣ Example: Factorial (Classic Recursion)

### 📌 Problem

Find factorial of a number `n`

```
5! = 5 × 4 × 3 × 2 × 1
```

### ✅ Code

```js
function fact(n) {
  if (n === 1) return 1 // Base case
  return n * fact(n - 1) // Recursive call
}
```

### ⏱ Complexity

- Time: `O(n)`
- Space: `O(n)` (call stack)

---

## 2️⃣ Real-Life Example: Washing Plates 🍽️

### 🧠 Idea

Wash one plate, then call function for remaining plates

### ✅ Code

```js
function WashPlates(plates) {
  if (plates === 0) {
    console.log('All plates are washed!')
    return
  }

  console.log('Washing a plate')
  WashPlates(plates - 1)
}

WashPlates(4)
```

### 📌 Learning

- Each call reduces the problem
- Base case stops recursion

---

## 3️⃣ Searching Using Recursion

### 📌 Problem

Find a name in an array

### ✅ Code

```js
function findName(names, index) {
  if (index === names.length) {
    console.log('Name not found')
    return
  }

  if (names[index] === 'Ali') {
    console.log('Found Ali!')
    return
  }

  findName(names, index + 1)
}

findName(['Ahmed', 'Usman', 'Ali', 'Bilal'], 0)
```

### 🧠 Concept

- Recursive **linear search**

---

## 4️⃣ Best Example: Factorial (Optimized)

```js
function Factorial(n) {
  if (n === 0 || n === 1) return 1 // Base case
  return n * Factorial(n - 1)
}

console.log(Factorial(5))
```

---

## 5️⃣ Fibonacci Series (Iterative Approach)

### 📌 Concept

Each number = sum of previous two

### ✅ Code

```js
function fibonacci(n) {
  let first = 0,
    second = 1
  process.stdout.write(first + ' ' + second + ' ')

  for (let i = 0; i < n; i++) {
    let third = first + second
    first = second
    second = third
    process.stdout.write(third + ' ')
  }
}

fibonacci(5)
```

### ⏱ Complexity

- Time: `O(n)`
- Space: `O(1)`

---

## 6️⃣ Fibonacci Using Recursion (Classic)

```js
function fibonacci(n) {
  if (n === 0) return 0
  if (n === 1) return 1

  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(6))
```

### ⚠️ Important

- Very slow for large `n`
- Time: `O(2^n)` ❌

---

## 7️⃣ Fibonacci Using Tail Recursion 🚀

```js
function fibonacci(n, first, second) {
  if (n === 0) return

  let third = first + second
  process.stdout.write(third + ' ')

  fibonacci(n - 1, second, third)
}

fibonacci(4, 0, 1)
```

### ✅ Benefits

- Efficient
- Less recomputation

---

## 📊 Recursion vs Loop

| Feature     | Recursion  | Loop         |
| ----------- | ---------- | ------------ |
| Readability | High       | Medium       |
| Memory      | Uses stack | wLess memory |
| Speed       | Slower     | Faster       |

---

## 🎯 When to Use Recursion?

- Tree / Graph traversal
- Divide & Conquer (Merge Sort, Quick Sort)
- Backtracking (N-Queen, Maze)
- Mathematical problems

---

## 🧠 Interview Tips (Google-Level)

- Always explain **base case** first
- Draw **recursion tree**
- Mention **time & space complexity**
- Avoid recursion if stack overflow possible

---

## ✅ Summary

- Recursion = function calling itself
- Base case is mandatory
- Powerful but must be used carefully

---

🔥 **Next Topics Suggestion**
w

- Recursion Tree Dry Run
- Backtracking Problems
- Recursion → Dynamic Programming
- Stack vs Recursion

---

✍️ _Prepared for DSA & Google-level interviews_
