# 🔗 Singly Linked List (DSA) — Complete Notes (.md)

> **Prepared for Beginner → Professional → Interview Level**

---

## 📘 What is a Singly Linked List?

A **Singly Linked List** is a **linear data structure** where each element (called a **node**) contains:

1. **Data** – the value
2. **Next** – reference (address) of the next node

```
[data | next] → [data | next] → [data | null]
```

The list is accessed using a pointer called **HEAD**.

---

## 🧠 Why Linked List?

| Problem with Array        | Linked List Solution         |
| ------------------------- | ---------------------------- |
| Fixed size                | Dynamic size                 |
| Costly insertion/deletion | Efficient insertion/deletion |
| Memory contiguous         | Memory non-contiguous        |

---

## 🧩 Basic Structure

### Node Structure

```js
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}
```

### Linked List Structure

```js
class LinkedList {
  constructor() {
    this.head = null
  }
}
```

---

## 📌 Types of Linked List

1. Singly Linked List ✅ (this topic)
2. Doubly Linked List
3. Circular Linked List
4. Circular Doubly Linked List

---

## 1️⃣ Insert Operations

### 🔹 Insert at Head (Beginning)

**Steps:**

1. Create new node
2. Point newNode.next → head
3. Move head → newNode

```js
insertAtHead(data)
```

**Time Complexity:** `O(1)`

---

### 🔹 Insert at Tail (End)

**Steps:**

1. Traverse till last node
2. last.next → newNode

```js
insertAtTail(data)
```

**Time Complexity:** `O(n)`

---

### 🔹 Insert at Position

**Steps:**

1. Traverse till (position - 1)
2. Update links carefully

```js
insertAtPosition(data, pos)
```

⚠️ Order of pointer updates is very important

---

## 2️⃣ Delete Operations

### 🔸 Delete Head

```js
deleteHead()
```

**Logic:**

```
head = head.next
```

**Time:** `O(1)`

---

### 🔸 Delete Tail

**Steps:**

1. Traverse till second last node
2. temp.next = null

**Time:** `O(n)`

---

### 🔸 Delete by Value

**Steps:**

1. Find previous node
2. Skip target node

```js
temp.next = temp.next.next
```

---

## 3️⃣ Traversal / Printing

```js
print()
```

```
10 → 20 → 30 → null
```

**Time:** `O(n)`

---

## 4️⃣ Reverse Linked List ⭐ (VERY IMPORTANT)

### Approach: Iterative (Best)

**Pointers Used:**

- prev
- curr
- next

**Core Idea:**
Reverse direction of `next` pointers

**Time:** `O(n)`
**Space:** `O(1)`

📌 Most asked interview question

---

## 5️⃣ Find Middle Node (Slow & Fast Pointer)

**Logic:**

- Slow moves 1 step
- Fast moves 2 steps

When fast reaches end → slow is at middle

**Time:** `O(n)`

---

## 6️⃣ Detect Cycle (Loop Detection)

### Floyd’s Cycle Detection Algorithm

**Pointers:**

- Slow
- Fast

If slow == fast → cycle exists

**Time:** `O(n)`
**Space:** `O(1)`

---

## 7️⃣ Length of Linked List

Traverse and count nodes

```js
length()
```

---

## 8️⃣ Search in Linked List

Linear search

```js
search(value)
```

**Time:** `O(n)`

---

## 📊 Time Complexity Summary

| Operation   | Time |
| ----------- | ---- |
| Insert Head | O(1) |
| Insert Tail | O(n) |
| Delete Head | O(1) |
| Delete Tail | O(n) |
| Search      | O(n) |
| Reverse     | O(n) |

---

## ❌ Common Mistakes (Interview Killers)

- Forgetting base case when list is empty
- Losing reference during pointer update
- Not handling single-node list
- Wrong loop condition (`temp.next.next`)

---

## 🎯 Interview-Level Questions

1. Reverse linked list
2. Find middle node
3. Detect loop
4. Remove Nth node from end
5. Merge two sorted linked lists
6. Check palindrome linked list

---

## 🧠 When to Use Linked List?

✔ Frequent insertions/deletions
✔ Unknown size data
❌ Random access needed

---

## 🆚 Linked List vs Array

| Feature       | Array      | Linked List    |
| ------------- | ---------- | -------------- |
| Access        | O(1)       | O(n)           |
| Insert/Delete | O(n)       | O(1)           |
| Memory        | Contiguous | Non-contiguous |

---

## 🏁 Final Summary

- Linked List uses **nodes + pointers**
- No indexing
- Pointer handling is key
- Very important for **DSA & Interviews**

---

🔥 **Next Recommended Topics**

- Doubly Linked List
- Circular Linked List
- Linked List Interview Problems (LeetCode)
- Recursion on Linked List

---

✍️ _Prepared for DSA, FAANG & Google-level interviews_

// ===============================
// Node Class (Har dabba / node)
// ================================
class Node {
constructor(data) {
this.data = data; // value
this.next = null; // next node ka address
}
}

// ==================================
// LinkedList Class (Poori chain)
// ==================================
class LinkedList {
constructor() {
this.head = null; // pehla node
}

// ----------------------------
// Insert at Head (Start)
// ----------------------------
insertAtHead(data) {
let newNode = new Node(data);
newNode.next = this.head;
this.head = newNode;
}

// ----------------------------
// Insert at Tail (End)
// ----------------------------
insertAtTail(data) {
let newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = newNode;

}

// ----------------------------
// Insert at Position (Index)
// ----------------------------

insertAtPosition(data, pos) {
if (pos === 0) {
this.insertAtHead(data);
return;
}

    let newNode = new Node(data);
    let temp = this.head;

    for (let i = 0; i < pos - 1 && temp !== null; i++) {
      temp = temp.next;
    }

    if (temp === null) {
      console.log("Position invalid");
      return;
    }

    newNode.next = temp.next;
    temp.next = newNode;

}

// ----------------------------
// Delete Head
// ----------------------------
deleteHead() {
if (this.head === null) return;
this.head = this.head.next;
}

// ----------------------------
// Delete Tail
// ----------------------------
deleteTail() {
if (this.head === null || this.head.next === null) {
this.head = null;
return;
}

    let temp = this.head;
    while (temp.next.next !== null) {
      temp = temp.next;
    }
    temp.next = null;

}

// ----------------------------
// Delete by Value
// ----------------------------
deleteByValue(value) {
if (this.head === null) return;

    if (this.head.data === value) {
      this.head = this.head.next;
      return;
    }

    let temp = this.head;
    while (temp.next !== null && temp.next.data !== value) {
      temp = temp.next;
    }

    if (temp.next !== null) {
      temp.next = temp.next.next;
    }

}

// ----------------------------
// Print Linked List
// ----------------------------
print() {
let temp = this.head;
let result = "";

    while (temp !== null) {
      result += temp.data + " → ";
      temp = temp.next;
    }
    console.log(result + "null");

}

// ----------------------------
// Reverse Linked List
// ----------------------------
reverse() {
let prev = null;
let curr = this.head;

    while (curr !== null) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;

}

// ----------------------------
// Find Middle Node
// ----------------------------
findMiddle() {
let slow = this.head;
let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow ? slow.data : null;

}

// ----------------------------
// Detect Cycle (Loop)
// ----------------------------
hasCycle() {
let slow = this.head;
let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) return true;
    }
    return false;

}
}
