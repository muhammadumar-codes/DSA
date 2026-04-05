# 🔁 Circular Linked List (DSA Notes)

📌 _Prepared for Google / Amazon / FAANG level interviews_

---

## 📘 Definition

A **Circular Linked List (CLL)** is a linked list in which:

- The **last node points back to the first node (head)**
- There is **NO `null`** at the end
- The list forms a **circle**

👉 Traversal can start from **any node**  
👉 Used when **continuous looping** is required

---

## 🧠 Key Characteristics

✔️ No `null` pointer  
✔️ Last node → points to head  
✔️ Traversal is circular  
✔️ Efficient for repeated tasks

---

## 📊 Types of Circular Linked Lists

1️⃣ **Circular Singly Linked List (CSLL)**  
2️⃣ **Circular Doubly Linked List (CDLL)**

> 📌 In this file, we focus on **Circular Singly Linked List**

---

## 🧱 Node Structure

```js
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}
```

📌 Last node must be updated

insertAtHead(data) {
let newNode = new Node(data);

if (this.head === null) {
newNode.next = newNode;
this.head = newNode;
return;
}

let temp = this.head;
while (temp.next !== this.head) {
temp = temp.next;
}

newNode.next = this.head;
temp.next = newNode;
this.head = newNode;
}

🧪 Dry Run

Initial:

10 → 20 → (back to 10)

Insert 5 at head:

5 → 10 → 20 → (back to 5)

2️⃣ Insert at Tail
insertAtTail(data) {
let newNode = new Node(data);

if (this.head === null) {
newNode.next = newNode;
this.head = newNode;
return;
}

let temp = this.head;
while (temp.next !== this.head) {
temp = temp.next;
}

temp.next = newNode;
newNode.next = this.head;
}

3️⃣ Insert at Position
insertAtPosition(data, pos) {
if (pos === 0) {
this.insertAtHead(data);
return;
}

let temp = this.head;
for (let i = 0; i < pos - 1; i++) {
temp = temp.next;
if (temp === this.head) return;
}

let newNode = new Node(data);
newNode.next = temp.next;
temp.next = newNode;
}

❌ Deletion Operations
1️⃣ Delete Head
deleteHead() {
if (!this.head) return;

if (this.head.next === this.head) {
this.head = null;
return;
}

let temp = this.head;
while (temp.next !== this.head) {
temp = temp.next;
}

temp.next = this.head.next;
this.head = this.head.next;
}

2️⃣ Delete Tail
deleteTail() {
if (!this.head) return;

if (this.head.next === this.head) {
this.head = null;
return;
}

let temp = this.head;
while (temp.next.next !== this.head) {
temp = temp.next;
}

temp.next = this.head;
}

3️⃣ Delete by Value
deleteByValue(value) {
if (!this.head) return;

if (this.head.data === value) {
this.deleteHead();
return;
}

let curr = this.head;
while (curr.next !== this.head && curr.next.data !== value) {
curr = curr.next;
}

if (curr.next.data === value) {
curr.next = curr.next.next;
}
}

🔄 Traversal (Printing)

📌 Use do...while because there is no null

print() {
if (!this.head) return;

let temp = this.head;
let result = "";

do {
result += temp.data + " → ";
temp = temp.next;
} while (temp !== this.head);

console.log(result + "(back to head)");
}

🧠 Why do...while?

✔️ Head must print at least once
✔️ Circular list never reaches null

⏱️ Time & Space Complexity
Operation Time Space
Insert O(n) O(1)
Delete O(n) O(1)
Traverse O(n) O(1)
🆚 Singly vs Circular Linked List
Feature Singly LL Circular LL
Last node null points to head
Loop ❌ ✔️
Traversal linear circular
Use case normal repeating tasks
💼 Real-World Applications

🔁 Round Robin Scheduling

🎵 Music playlist loop

🎮 Turn-based games

🧠 CPU task management

❓ Interview Questions (IMPORTANT)

1️⃣ Difference between SLL & CLL
2️⃣ Why no null in CLL?
3️⃣ How to avoid infinite loop?
4️⃣ Insert/delete head efficiently
5️⃣ Use cases of circular list

⚠️ Common Mistakes

❌ Infinite loop in traversal
❌ Forgetting to link last node
❌ Using while(temp !== null)

✅ Summary

✔️ Circular Linked List has no end
✔️ Last node connects to head
✔️ Efficient for cyclic operations
✔️ Frequently asked in interviews
