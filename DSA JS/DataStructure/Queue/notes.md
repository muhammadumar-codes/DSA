# 📚 Stack Data Structure (DSA Notes – JavaScript)

---

## 🔰 What is a Stack?

A **Stack** is a **linear data structure** that follows the principle:

> **LIFO – Last In, First Out**

🔹 The element inserted **last** is removed **first**.

### 🧠 Real-Life Examples

- Stack of **plates** 🍽️
- **Undo / Redo** operations
- **Browser back button**
- **Function calls (Call Stack)**

---

## 🧱 Stack Terminology

| Term       | Meaning                              |
| ---------- | ------------------------------------ |
| Push       | Insert element into stack            |
| Pop        | Remove top element                   |
| Peek / Top | View top element                     |
| isEmpty    | Check if stack is empty              |
| isFull     | Check if stack is full (array stack) |

---

## 📌 Basic Stack Operations

1. **Push** – Add element at top
2. **Pop** – Remove element from top
3. **Peek** – See top element
4. **isEmpty** – Check empty stack

All operations work in **O(1)** time ⏱️

---

## 🧠 Stack Representation

```
Bottom → [10, 20, 30] ← Top
```

---

## 1️⃣ Stack Implementation Using Array (JavaScript)

### ✅ Code

```js
class Stack {
  constructor() {
    this.stack = []
  }

  push(data) {
    this.stack.push(data)
  }

  pop() {
    if (this.isEmpty()) {
      console.log('Stack Underflow')
      return
    }
    return this.stack.pop()
  }

  peek() {
    if (this.isEmpty()) return null
    return this.stack[this.stack.length - 1]
  }

  isEmpty() {
    return this.stack.length === 0
  }

  size() {
    return this.stack.length
  }

  print() {
    console.log(this.stack.join(' -> '))
  }
}
```

---

## 🧪 Dry Run Example

```js
const s = new Stack()

s.push(10)
s.push(20)
s.push(30)

s.pop()
s.print()
```

### 🔍 Execution

```
Push 10 → [10]
Push 20 → [10, 20]
Push 30 → [10, 20, 30]
Pop → removes 30
Final Stack → [10, 20]
```

---

## 2️⃣ Stack Using Linked List (Professional Level)

### 📌 Why Linked List Stack?

- No fixed size
- Efficient memory usage
- No overflow

---

### ✅ Code

```js
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
  }

  push(data) {
    let newNode = new Node(data)
    newNode.next = this.top
    this.top = newNode
  }

  pop() {
    if (this.isEmpty()) {
      console.log('Stack Underflow')
      return
    }
    let removed = this.top.data
    this.top = this.top.next
    return removed
  }

  peek() {
    if (this.isEmpty()) return null
    return this.top.data
  }

  isEmpty() {
    return this.top === null
  }

  print() {
    let temp = this.top
    let result = ''
    while (temp) {
      result += temp.data + ' -> '
      temp = temp.next
    }
    console.log(result + 'null')
  }
}
```

---

## 🔁 Stack Using Linked List (Dry Run)

```
Push 10
Top → 10 → null

Push 20
Top → 20 → 10 → null

Pop
Removed: 20
Top → 10 → null
```

---

## 📊 Array Stack vs Linked List Stack

| Feature        | Array Stack | Linked List Stack |
| -------------- | ----------- | ----------------- |
| Memory         | Fixed       | Dynamic           |
| Overflow       | Possible    | Not possible      |
| Speed          | Fast        | Slightly slower   |
| Implementation | Easy        | Moderate          |

---

## 🧠 Important Stack Applications (Interview ⭐)

### 1️⃣ Reverse a String

```js
function reverseString(str) {
  let stack = []
  for (let ch of str) stack.push(ch)

  let result = ''
  while (stack.length) result += stack.pop()

  return result
}
```

---

### 2️⃣ Valid Parentheses Problem

```js
function isValid(s) {
  let stack = []
  let map = { ')': '(', '}': '{', ']': '[' }

  for (let ch of s) {
    if (ch === '(' || ch === '{' || ch === '[') {
      stack.push(ch)
    } else {
      if (stack.pop() !== map[ch]) return false
    }
  }
  return stack.length === 0
}
```

---

## ⏱️ Time & Space Complexity

| Operation | Time | Space |
| --------- | ---- | ----- |
| Push      | O(1) | O(1)  |
| Pop       | O(1) | O(1)  |
| Peek      | O(1) | O(1)  |

---

## 🎯 Interview Tips (Google / Amazon)

- Always mention **LIFO principle**
- Explain **stack overflow & underflow**
- Prefer **linked list stack** when size unknown
- Use stack for **expression evaluation**

---

## ✅ Summary

- Stack follows **LIFO**
- Push & Pop from **top only**
- Can be implemented using **Array or Linked List**
- Very important for **DSA & Interviews**

---

## 🔥 Next Recommended Topics

- Stack Problems (LeetCode)
- Infix → Postfix
- Stack + Recursion
- Monotonic Stack

---

✍️ _Prepared for DSA, Interviews & Professional Learning_

---

## 🧑‍💻 Stack Implementation with **Detailed Comments** (Easy to Understand)

### ✅ Stack Using Array (Beginner Friendly)

```js
// Stack class using Array
class Stack {
  constructor() {
    this.items = [] // array to store stack elements
  }

  // PUSH: add element on top of stack
  push(element) {
    // element ko array ke end me add kar dete hain
    this.items.push(element)
  }

  // POP: remove top element
  pop() {
    // agar stack empty hai to kuch remove nahi hoga
    if (this.isEmpty()) {
      return 'Stack is Empty'
    }
    // last element remove hota hai (LIFO)
    return this.items.pop()
  }

  // PEEK: see top element without removing
  peek() {
    // last index ka element return hota hai
    return this.items[this.items.length - 1]
  }

  // isEmpty: check stack empty hai ya nahi
  isEmpty() {
    return this.items.length === 0
  }

  // SIZE: stack ka size
  size() {
    return this.items.length
  }

  // PRINT: stack ke elements show karna
  print() {
    console.log(this.items.join(' -> '))
  }
}

// ------------------------------
// Stack ka Dry Run
// ------------------------------
const stack = new Stack()

stack.push(10) // Stack: 10
stack.push(20) // Stack: 10 -> 20
stack.push(30) // Stack: 10 -> 20 -> 30

stack.print()

stack.pop() // 30 remove
stack.print() // Stack: 10 -> 20

console.log(stack.peek()) // Top element: 20
```

---

### 🧠 Dry Run Explanation (Simple)

```
Push 10 → [10]
Push 20 → [10, 20]
Push 30 → [10, 20, 30]
Pop     → [10, 20]
Peek    → 20
```

👉 **Last element sab se pehle nikalta hai (LIFO)**

---

### ✅ Stack Using Linked List (Interview Level)

```js
// Node banate hain
class Node {
  constructor(data) {
    this.data = data // value
    this.next = null // next node ka address
  }
}

// Stack using Linked List
class StackLL {
  constructor() {
    this.top = null // stack ka top
  }

  // PUSH operation
  push(data) {
    let newNode = new Node(data)

    // new node ka next current top ban jata hai
    newNode.next = this.top

    // top ko new node bana dete hain
    this.top = newNode
  }

  // POP operation
  pop() {
    if (this.top === null) {
      return 'Stack is Empty'
    }

    // top ka data store kar lete hain
    let removed = this.top.data

    // top ko next node pe move kar dete hain
    this.top = this.top.next

    return removed
  }

  // PEEK operation
  peek() {
    if (this.top === null) return 'Empty Stack'
    return this.top.data
  }

  // PRINT stack
  print() {
    let temp = this.top
    let result = ''

    while (temp) {
      result += temp.data + ' -> '
      temp = temp.next
    }

    console.log(result + 'null')
  }
}

// ------------------------------
// Dry Run
// ------------------------------
const s = new StackLL()

s.push(5) // top → 5
s.push(15) // top → 15 -> 5
s.push(25) // top → 25 -> 15 -> 5

s.print()

s.pop() // remove 25
s.print() // top → 15 -> 5
```

---

## 🧠 Interview Tip (Important ⭐)

- Stack questions me hamesha bolo:

  - **LIFO principle**
  - **push / pop / peek → O(1)**

- Linked List stack me **overflow ka issue nahi hota**
- Array stack fast hota hai but size limited hota hai

---

✅ _Now you can understand every single line step-by-step_

Next bolo:
👉 **"jani queue with comments"**
👉 **"jani stack interview questions with dry run"**
