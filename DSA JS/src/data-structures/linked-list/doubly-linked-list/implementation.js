// ======================
// NODE CLASS
// ======================
class Node {
  constructor(data) {
    this.prev = null
    this.data = data
    this.next = null
  }
}

// ======================
// DOUBLY LINKED LIST
// ======================
class DoublyLinkedList {
  constructor() {
    this.head = null
  }

  // ======================
  // INSERT AT HEAD
  // ======================
  insertAtHead(data) {
    const newNode = new Node(data)

    if (this.head === null) {
      this.head = newNode
      return
    }

    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode
  }

  // ======================
  // INSERT AT TAIL
  // ======================
  insertAtTail(data) {
    const newNode = new Node(data)

    if (this.head === null) {
      this.head = newNode
      return
    }

    let temp = this.head
    while (temp.next !== null) {
      temp = temp.next
    }

    temp.next = newNode
    newNode.prev = temp
  }

  // ======================
  // INSERT AT POSITION
  // ======================
  insertAtPosition(data, pos) {
    if (pos < 1) {
      console.log('Invalid position')
      return
    }

    if (pos === 1) {
      this.insertAtHead(data)
      return
    }

    const newNode = new Node(data)
    let temp = this.head

    for (let i = 1; i < pos - 1 && temp !== null; i++) {
      temp = temp.next
    }

    if (temp === null || temp.next === null) {
      console.log('Invalid position')
      return
    }

    newNode.next = temp.next
    newNode.prev = temp
    temp.next.prev = newNode
    temp.next = newNode
  }

  // ======================
  // DELETE AT HEAD
  // ======================
  deleteAtHead() {
    if (this.head === null) {
      console.log('List is empty')
      return
    }

    if (this.head.next === null) {
      this.head = null
      return
    }

    this.head = this.head.next
    this.head.prev = null
  }

  // ======================
  // DELETE AT TAIL
  // ======================
  deleteAtTail() {
    if (this.head === null) {
      console.log('List is empty')
      return
    }

    if (this.head.next === null) {
      this.head = null
      return
    }

    let temp = this.head
    while (temp.next !== null) {
      temp = temp.next
    }

    temp.prev.next = null
  }

  // ======================
  // DELETE AT POSITION
  // ======================
  deleteAtPosition(pos) {
    if (pos < 1 || this.head === null) {
      console.log('Invalid position')
      return
    }

    if (pos === 1) {
      this.deleteAtHead()
      return
    }

    let temp = this.head

    for (let i = 1; i < pos && temp !== null; i++) {
      temp = temp.next
    }

    if (temp === null) {
      console.log('Invalid position')
      return
    }

    if (temp.next === null) {
      temp.prev.next = null
      return
    }

    temp.prev.next = temp.next
    temp.next.prev = temp.prev
  }

  // ======================
  // REVERSE LIST
  // ======================
  reverse() {
    let curr = this.head
    let temp = null

    while (curr) {
      temp = curr.prev
      curr.prev = curr.next
      curr.next = temp
      curr = curr.prev
    }

    if (temp !== null) {
      this.head = temp.prev
    }
  }

  // ======================
  // LENGTH
  // ======================
  length() {
    let count = 0
    let temp = this.head

    while (temp) {
      count++
      temp = temp.next
    }

    console.log(`LENGTH: ${count}`)
  }

  // ======================
  // PRINT LIST
  // ======================
  print() {
    let temp = this.head
    let result = ''

    while (temp) {
      result += temp.data + ' <-> '
      temp = temp.next
    }

    console.log(result + 'null')
  }
}

// ======================
// TESTING
// ======================
const list = new DoublyLinkedList()

list.insertAtHead(100)
list.insertAtHead(300)
list.insertAtHead(600)
list.insertAtHead(900)
list.insertAtHead(10000)

list.insertAtTail(300000000)
list.insertAtPosition(555, 3)

list.print()
list.length()

list.deleteAtHead()
list.deleteAtTail()
list.deleteAtPosition(3)

list.print()
list.reverse()
list.print()
list.length()
