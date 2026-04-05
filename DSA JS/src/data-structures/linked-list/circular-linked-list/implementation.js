// ======================
// NODE CLASS
// ======================
class Node {
  constructor(data) {
    this.data = data
    this.prev = null
    this.next = null
  }
}

// ======================
// CIRCULAR DOUBLY LINKED LIST
// ======================
class CircularDoublyLinkedList {
  constructor() {
    this.head = null
  }

  // ======================
  // INSERT AT HEAD
  // ======================
  insertAtHead(data) {
    const newNode = new Node(data)

    if (this.head === null) {
      newNode.next = newNode
      newNode.prev = newNode
      this.head = newNode
      return
    }

    const tail = this.head.prev

    newNode.next = this.head
    newNode.prev = tail
    tail.next = newNode
    this.head.prev = newNode
    this.head = newNode
  }

  // ======================
  // INSERT AT TAIL
  // ======================
  insertAtTail(data) {
    const newNode = new Node(data)

    if (this.head === null) {
      newNode.next = newNode
      newNode.prev = newNode
      this.head = newNode
      return
    }

    const tail = this.head.prev

    tail.next = newNode
    newNode.prev = tail
    newNode.next = this.head
    this.head.prev = newNode
  }

  // ======================
  // DELETE AT HEAD
  // ======================
  deleteAtHead() {
    if (!this.head) {
      console.log('List is empty')
      return
    }

    if (this.head.next === this.head) {
      this.head = null
      return
    }

    const tail = this.head.prev
    this.head = this.head.next
    this.head.prev = tail
    tail.next = this.head
  }

  // ======================
  // DELETE AT TAIL
  // ======================
  deleteAtTail() {
    if (!this.head) {
      console.log('List is empty')
      return
    }

    if (this.head.next === this.head) {
      this.head = null
      return
    }

    const tail = this.head.prev
    const newTail = tail.prev

    newTail.next = this.head
    this.head.prev = newTail
  }

  // ======================
  // DELETE AT POSITION
  // ======================
  deleteAtPosition(pos) {
    if (!this.head || pos < 1) {
      console.log('Invalid position')
      return
    }

    if (pos === 1) {
      this.deleteAtHead()
      return
    }

    let temp = this.head
    let count = 1

    while (count < pos && temp.next !== this.head) {
      temp = temp.next
      count++
    }

    if (count !== pos) {
      console.log('Invalid position')
      return
    }

    // middle or tail node
    temp.prev.next = temp.next
    temp.next.prev = temp.prev
  }

  // ======================
  // LENGTH
  // ======================
  length() {
    if (!this.head) return 0

    let count = 1
    let temp = this.head.next

    while (temp !== this.head) {
      count++
      temp = temp.next
    }

    console.log(`LENGTH: ${count}`)
  }

  // ======================
  // PRINT LIST
  // ======================
  print() {
    if (!this.head) {
      console.log('List is empty')
      return
    }

    let temp = this.head
    let result = ''

    do {
      result += temp.data + ' <-> '
      temp = temp.next
    } while (temp !== this.head)

    console.log(result + '(head)')
  }

  // ======================
  // REVERSE LIST
  // ======================
  reverse() {
    if (!this.head || this.head.next === this.head) return

    let curr = this.head
    let temp = null

    do {
      temp = curr.prev
      curr.prev = curr.next
      curr.next = temp
      curr = curr.prev
    } while (curr !== this.head)

    this.head = temp.prev
  }
}

// ======================
// TESTING
// ======================
const cdll = new CircularDoublyLinkedList()

// INSERT HEAD
cdll.insertAtHead(100)
cdll.insertAtHead(300)
cdll.insertAtHead(600)
cdll.insertAtHead(900)
cdll.insertAtHead(10000)

// INSERT TAIL
cdll.insertAtTail(500000)

// PRINT
cdll.print() // Circular view
cdll.length()

// DELETE HEAD
cdll.deleteAtHead()
cdll.print()

// DELETE TAIL
cdll.deleteAtTail()
cdll.print()

// DELETE POSITION
cdll.deleteAtPosition(3)
cdll.print()

// REVERSE
cdll.reverse()
cdll.print()
