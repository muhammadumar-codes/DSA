# 🌳 Important Tree Problems – Complete Learning Notes

---

# 1️⃣ Example Tree Used in All Problems

```
        1
      /   \
     2     3
    / \   / \
   4   5 6   7
```

---

# 2️⃣ Count of Nodes

## 📌 Problem

Count total number of nodes in a binary tree.

## 🧠 Idea

Every node contributes 1 + left subtree count + right subtree count.

## ✅ Recursive Formula

Count(root) =
1 + Count(left) + Count(right)

## 💻 Code

```js
function countNodes(root) {
  if (!root) return 0

  return 1 + countNodes(root.left) + countNodes(root.right)
}
```

## ⏱ Complexity

Time: O(n)
Space: O(h)

---

# 3️⃣ Sum of All Nodes

## 📌 Problem

Find sum of all node values in tree.

## 🧠 Idea

Root value + sum(left) + sum(right)

## 💻 Code

```js
function sumNodes(root) {
  if (!root) return 0

  return root.value + sumNodes(root.left) + sumNodes(root.right)
}
```

## ⏱ Complexity

Time: O(n)
Space: O(h)

---

# 4️⃣ Height of Tree

## 📌 Problem

Find height of tree.

Height = Maximum number of edges from root to leaf.

## 🧠 Idea

Height(root) =
1 + max(height(left), height(right))

## 💻 Code

```js
function height(root) {
  if (!root) return -1 // edge-based height

  return 1 + Math.max(height(root.left), height(root.right))
}
```

## ⏱ Complexity

Time: O(n)
Space: O(h)

---

# 5️⃣ Diameter of Tree

## 📌 Problem

Diameter = Longest path between any two nodes.

Path may or may not pass through root.

## 🧠 Idea

Diameter at root =
height(left) + height(right)

We check for every node.

## 💻 Code (Optimized O(n))

```js
let diameter = 0

function findHeight(root) {
  if (!root) return 0

  let left = findHeight(root.left)
  let right = findHeight(root.right)

  diameter = Math.max(diameter, left + right)

  return 1 + Math.max(left, right)
}

function getDiameter(root) {
  diameter = 0
  findHeight(root)
  return diameter
}
```

## ⏱ Complexity

Time: O(n)
Space: O(h)

---

# 6️⃣ Sum of Kth Level

## 📌 Problem

Find sum of nodes at level K.

Level starts from 0 (root level = 0)

## 🧠 Idea

Use BFS (Queue) and track level.

## 💻 Code

```js
function sumAtKLevel(root, k) {
  if (!root) return 0

  let queue = [root]
  let level = 0

  while (queue.length > 0) {
    let size = queue.length

    if (level === k) {
      let sum = 0
      for (let node of queue) {
        sum += node.value
      }
      return sum
    }

    for (let i = 0; i < size; i++) {
      let node = queue.shift()

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    level++
  }

  return 0
}
```

## ⏱ Complexity

Time: O(n)
Space: O(n)

---

# 7️⃣ Complete Working Setup

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
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.left = new Node(6)
root.right.right = new Node(7)

console.log('Count:', countNodes(root))
console.log('Sum:', sumNodes(root))
console.log('Height:', height(root))
console.log('Diameter:', getDiameter(root))
console.log('Sum at level 2:', sumAtKLevel(root, 2))
```

---

# 🔥 Final Revision Summary

- Count = 1 + left + right
- Sum = value + left + right
- Height = 1 + max(left, right)
- Diameter = leftHeight + rightHeight
- Kth level sum = BFS level tracking

Master these 5 → You are strong in Tree recursion 🚀
