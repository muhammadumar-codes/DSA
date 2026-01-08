# 🔗 Doubly Linked List (DLL) – Complete DSA Notes

📌 _From Basics to Professional & Interview Level_

---

## 📘 Definition

A **Doubly Linked List** is a linear data structure where:

- Each node contains **three parts**:

  1. `prev` → pointer to previous node
  2. `data` → actual value
  3. `next` → pointer to next node

👉 Unlike a Singly Linked List, traversal is possible in **both directions**.

---

## 🧠 Structure of a Node

```
null ← [prev | data | next] → null
```

### JavaScript Node Class

```js
class Node {
  constructor(data) {
    this.data = data
    this.prev = null
    this.next = null
  }
}
```

---

## 📦 Doubly Linked List Class

```js
class DoublyLinkedList {
  constructor() {
    this.head = null
  }
}
```

---

## ➕ Insertion Operations

### 1️⃣ Insert at Head

```js
insertAtHead(data) {
  let newNode = new Node(data);

  if (this.head !== null) {
    newNode.next = this.head;
    this.head.prev = newNode;
  }

  this.head = newNode;
}
```

### 🧠 Dry Run

Before:

```
null ← 10 ↔ 20 → null
```

Insert `5` at head

After:

```
null ← 5 ↔ 10 ↔ 20 → null
```

---

### 2️⃣ Insert at Tail

```js
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
  newNode.prev = temp;
}
```

---

### 3️⃣ Insert at Position

```js
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
    console.log('Invalid Position');
    return;
  }

  newNode.next = temp.next;
  newNode.prev = temp;

  if (temp.next !== null) {
    temp.next.prev = newNode;
  }

  temp.next = newNode;
}
```

---

## ➖ Deletion Operations

### 4️⃣ Delete Head

```js
deleteHead() {
  if (this.head === null) return;

  this.head = this.head.next;
  if (this.head !== null) this.head.prev = null;
}
```

---

### 5️⃣ Delete Tail

```js
deleteTail() {
  if (this.head === null) return;

  if (this.head.next === null) {
    this.head = null;
    return;
  }

  let temp = this.head;
  while (temp.next !== null) {
    temp = temp.next;
  }

  temp.prev.next = null;
}
```

---

### 6️⃣ Delete by Value

```js
deleteByValue(value) {
  let temp = this.head;

  while (temp !== null && temp.data !== value) {
    temp = temp.next;
  }

  if (temp === null) return;

  if (temp.prev !== null) temp.prev.next = temp.next;
  else this.head = temp.next;

  if (temp.next !== null) temp.next.prev = temp.prev;
}
```

---

## 🖨️ Print Operations

### Forward Print

```js
printForward() {
  let temp = this.head;
  let res = '';

  while (temp !== null) {
    res += temp.data + ' ↔ ';
    temp = temp.next;
  }

  console.log(res + 'null');
}
```

### Backward Print

```js
printBackward() {
  let temp = this.head;

  while (temp && temp.next) {
    temp = temp.next;
  }

  let res = '';
  while (temp !== null) {
    res += temp.data + ' ↔ ';
    temp = temp.prev;
  }

  console.log(res + 'null');
}
```

---

## ⏱️ Time & Space Complexity

| Operation   | Time | Space |
| ----------- | ---- | ----- |
| Insert Head | O(1) | O(1)  |
| Insert Tail | O(n) | O(1)  |
| Delete Head | O(1) | O(1)  |
| Delete Tail | O(n) | O(1)  |
| Search      | O(n) | O(1)  |

---

## 📊 Singly vs Doubly Linked List

| Feature   | Singly LL | Doubly LL |
| --------- | --------- | --------- |
| Traversal | One-way   | Two-way   |
| Memory    | Less      | More      |
| Reverse   | Harder    | Easier    |
| Deletion  | Slower    | Faster    |

---

## 🎯 Interview-Level Points

- Why DLL uses more memory? → extra `prev` pointer
- Why deletion is faster? → direct access to previous node
- Used in:

  - Browser back/forward
  - Undo/Redo
  - Music playlist

---

## ❌ Common Mistakes

- Forgetting to update `prev`
- Breaking links during delete
- Not handling head/tail edge cases

---

## ✅ Summary

- DLL allows **bidirectional traversal**
- Easier deletion & reversal
- Slightly higher memory cost

---

✨ _Prepared for DSA, FAANG & Google-level Interviews_
