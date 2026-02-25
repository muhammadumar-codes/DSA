# 🌳 Tree Traversal – Super Simple Beginner Notes

---

# 1️⃣ What is Tree Traversal?

Tree Traversal = Visiting every node of a tree exactly once.

Think like:
👉 "How do I read the whole tree?"

---

# 2️⃣ Example Tree (We Will Use This)

```
        1
      /   \
     2     3
    / \
   4   5
```

---

# 3️⃣ Types of Tree Traversal

There are TWO main categories:

1. DFS (Depth First Search)
   - Inorder
   - Preorder
   - Postorder

2. BFS (Breadth First Search)
   - Level Order Traversal

---

# 🌿 PART 1: DFS Traversals

DFS = Go deep first, then come back.

Important Rule:
We use RECURSION.

---

# 4️⃣ Inorder Traversal (Left → Root → Right)

Order:

1. Go Left
2. Print Root
3. Go Right

Memory Trick:
👉 L R Root

Example Output:
4 → 2 → 5 → 1 → 3

```js
function inorder(root) {
  if (root === null) return
  inorder(root.left)
  console.log(root.value)
  inorder(root.right)
}
```

---

# 5️⃣ Preorder Traversal (Root → Left → Right)

Order:

1. Print Root
2. Go Left
3. Go Right

Memory Trick:
👉 Root L R

Example Output:
1 → 2 → 4 → 5 → 3

```js
function preorder(root) {
  if (root === null) return
  console.log(root.value)
  preorder(root.left)
  preorder(root.right)
}
```

---

# 6️⃣ Postorder Traversal (Left → Right → Root)

Order:

1. Go Left
2. Go Right
3. Print Root

Memory Trick:
👉 L R Root

Example Output:
4 → 5 → 2 → 3 → 1

```js
function postorder(root) {
  if (root === null) return
  postorder(root.left)
  postorder(root.right)
  console.log(root.value)
}
```

---

# 🌊 PART 2: BFS Traversal

## Level Order Traversal (Level by Level)

Visit nodes row by row using a queue.

Example Output:
1 → 2 → 3 → 4 → 5

```js
function levelOrder(root) {
  if (!root) return
  let queue = [root]
  while (queue.length > 0) {
    let node = queue.shift()
    console.log(node.value)
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
}
```

---

# 7️⃣ Traversal Summary Table

| Traversal   | Output    |
| ----------- | --------- |
| Inorder     | 4 2 5 1 3 |
| Preorder    | 1 2 4 5 3 |
| Postorder   | 4 5 2 3 1 |
| Level Order | 1 2 3 4 5 |

---

# 8️⃣ Time & Space Complexity

- Time Complexity: O(n) for all traversals
- Space Complexity: O(h) for DFS (recursion stack), O(n) for BFS (queue)

Where h = height of tree

---

# 9️⃣ Quick Tips

- DFS → Recursion
- BFS → Queue
- Inorder → Sorted order in BST
- Preorder → Used for copying tree
- Postorder → Useful for deletion
- Level Order → Shortest path / levels

---

# ✅ End of Tree Traversal Notes
