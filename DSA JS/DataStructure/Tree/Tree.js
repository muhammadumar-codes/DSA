class TreeNode {
  // constructer ..
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  // Tranverse of the Tree

  inOrder(root) {
    if (!root) return

    this.inOrder(root.left)
    console.log(root.value)
    this.inOrder(root.right)
  }

  // left to the right to add the nodes

  postorder(root) {
    // Base case
    if (!root) return

    postorder(root.left)
    postorder(root.right)
    console.log(root.val)
  }
}

// Creating an object of the tree
const root = new TreeNode(10)
