class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  // preorder
  preOrder(root) {
    if (root === null) return
    console.log(root.value)
    this.preOrder(root.left)
    this.preOrder(root.right)
  }

  // inorder
  inOrder(root) {
    if (root === null) return
    this.inOrder(root.left)
    console.log(root.value)
    this.inOrder(root.right)
  }

  // post order

  postOrder(root) {
    if (root === null) return
    this.postOrder(root.left)
    this.postOrder(root.right)
    console.log(root.value)
  }

  //   level order
  levelOrder(root) {
    if (!root) return

    let queue = [root]

    while (queue.length > 0) {
      let node = queue.shift()
      console.log(node.value)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  //   count node
  countNode(root) {
    if (!root) return 0
    return 1 + this.countNode(root.left) + this.countNode(root.right)
  }

  sumOfNode(root) {
    if (!root) return 0
    return root.value + this.sumOfNode(root.left) + this.sumOfNode(root.right)
  }

  height(root) {
    if (!root) return -1 // edge-based height

    return 1 + Math.max(this.height(root.left), this.height(root.right))
  }
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(7)

console.log('Pre order')
root.preOrder(root)
console.log('level order')
root.levelOrder(root)
console.log('count the nodes')
console.log(root.countNode(root))
console.log('sum of nodes is ')
console.log(root.sumOfNode(root))
console.log('Height')
console.log(root.height(root))
