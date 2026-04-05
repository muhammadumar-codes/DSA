```js
class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// Step 2️⃣: Create Sample Tree
/*
            1
          /   \
         2     3
        / \
       4   5
*/

let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)root.left.right = new Node(5)


// =============================
// 🔹 Inorder Traversal
// Left → Root → Right
// =============================

function inorder(root) {
  if (root === null) return

  inorder(root.left)
  console.log(root.value)
  inorder(root.right)
}

// =============================
// 🔹 Preorder Traversal
// Root → Left → Right
// =============================

function preorder(root) {
  if (root === null) return

  console.log(root.value)
  preorder(root.left)
  preorder(root.right)
}

// =============================
// 🔹 Postorder Traversal
// Left → Right → Root
// =============================

function postorder(root) {
  if (root === null) return

  postorder(root.left)
  postorder(root.right)
  console.log(root.value)
}

// =============================
// 🚀 Run All Traversals
// =============================

console.log('Inorder Traversal:')
inorder(root)

console.log('Preorder Traversal:')
preorder(root)

console.log('Postorder Traversal:')
postorder(root)
```
