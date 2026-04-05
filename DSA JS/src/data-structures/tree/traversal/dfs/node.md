# 🌳 Tree Data Structure – Beginner Starter Notes

---

# 1️⃣ What is a Tree?

A **Tree** is a non-linear data structure made of nodes connected by edges.

It represents hierarchical data.

Examples in real life:

- File System
- Organization Structure
- DOM (HTML structure)

---

# 2️⃣ Basic Terminology

## 📌 Node

Each element in a tree is called a node.

## 📌 Edge

Connection between two nodes.

## 📌 Root

Topmost node of the tree.

- Only one root in a tree.
- Has no parent.

Example:

        A
       / \
      B   C

Here:

- A = Root

---

# 3️⃣ Parent and Child

If a node is connected below another node:

Upper node → Parent  
Lower node → Child

Example:

        A
       / \
      B   C

- A is parent of B and C
- B and C are children of A

---

# 4️⃣ Leaf Node

A node with NO children.

Example:

        A
       / \
      B   C
     /
    D

Leaf nodes:

- D
- C

---

# 5️⃣ Depth

Depth = Number of edges from root to that node.

Root depth = 0

Example:

        A
       /
      B
     /
    C

Depth of:
A = 0  
B = 1  
C = 2

---

# 6️⃣ Height

Height = Maximum depth in the tree.

In above example:
Height = 2

---

# 7️⃣ Subtree

Subtree = A node and all its children.

Example:

        A
       / \
      B   C
     /
    D

Subtree of B:

      B
     /
    D

---

# 8️⃣ Types of Trees (Basic)

## 1. Binary Tree

Each node has at most 2 children.

## 2. Binary Search Tree (BST)

Left < Root < Right

---

# 9️⃣ Basic Binary Tree Structure (JavaScript)

```js
class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)



// Diagram


    1
   / \
  2   3



---

# 🔟 Why Tree is Important?

Used in:
- Searching (BST)
- Heaps
- File systems
- Databases
- Networking
- AI decision making

---

# 🧠 Interview Tip

Tree is based on:
- Recursion
- DFS
- BFS

If you master recursion → Tree becomes easy.

---

# 🚀 Quick Revision

- Tree = Nodes + Edges
- Root = Top node
- Leaf = No children
- Depth = Distance from root
- Height = Max depth
- Subtree = Node + descendants
- Binary Tree = Max 2 children

---
```
