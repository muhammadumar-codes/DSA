# 🌳 Tree Traversal – Level Wise (BFS) Notes

---

# 1️⃣ What is Level Wise Traversal?

Level Wise Traversal = Visiting all nodes **level by level**, from top to bottom.

Also called **Breadth First Search (BFS)**.

Think: "Read tree row by row"

---

# 2️⃣ Example Tree

```
        1
      /   \
     2     3
    / \   / \
   4   5 6   7
```

---

# 3️⃣ Algorithm Steps

1. Create a queue and enqueue root node.
2. While queue is not empty:
   - Dequeue a node
   - Print its value
   - Enqueue its left child (if exists)
   - Enqueue its right child (if exists)

---

# 4️⃣ JavaScript Code (Level Order Traversal)

```js
class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// Create tree
let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.left = new Node(6)
root.right.right = new Node(7)

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

console.log('Level Order Traversal:')
levelOrder(root)
```

---

# 5️⃣ Expected Output

```
1
2
3
4
5
6
7
```

---

# 6️⃣ Notes / Key Points

- Uses **Queue** data structure
- Visits nodes **level by level**
- Time Complexity: O(n)
- Space Complexity: O(n) (for queue)
- Useful for:
  - Finding shortest path in tree
  - Printing levels
  - BFS-based tree problems

---

# 7️⃣ Quick Comparison with DFS

| Traversal Type   | Order          | Data Structure  | Use Case                      |
| ---------------- | -------------- | --------------- | ----------------------------- |
| Inorder (DFS)    | L R Root       | Recursion/Stack | BST sorted output             |
| Preorder (DFS)   | Root L R       | Recursion/Stack | Copy/Serialize tree           |
| Postorder(DFS)   | L R Root       | Recursion/Stack | Delete tree, height calc      |
| Level Order(BFS) | Level by level | Queue           | Shortest path, level printing |

---

# 8️⃣ Visualization

Level 1: 1

Level 2: 2 3

Level 3: 4 5 6 7

---

# 9️⃣ Revision Summary

- Level Order = BFS = Top to bottom, left to right
- Use queue to maintain order
- Visit all nodes at current level before next level
- Time O(n), Space O(n)
