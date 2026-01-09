// Craete A Node

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

// Linklist
class LinkList {
  constructor() {
    this.head = null
  }

  //Insert At Head

  insertAtHead(data) {
    let newNode = new Node(data)
    newNode.next = this.head
    this.head = newNode
  }

  // Insert At Tail

  insertAtTail(data) {
    let newNode = new Node(data)

    if (!this.head) {
      this.head = newNode
      return
    }
    let temp = this.head
    while (temp.next != null) {
      temp = temp.next
    }
    temp.next = newNode
  }

  // insert At Position :
  insertAtPosition(data, pos) {
    if (pos === 0) {
      this.insertAtHead(data)
      return
    }

    let temp = this.head
    let newNode = new Node(data)

    for (let i = 0; i < pos - 1; i++) {
      temp = temp.next
    }

    if (temp === null) {
      console.log('INVALIDE  POSITION')
      return
    }

    newNode.next = temp.next
    temp.next = newNode
  }
  // Show length

  length() {
    let temp = this.head
    let count = 0
    while (temp) {
      count++
      temp = temp.next
    }
    return count
  }
  // DELETE AT THE HEAD

  deleteAtHead() {
    this.head = this.head.next
  }

  //   INSERT AT POSITION

  //REVERSE THE ARRAY

  reverse() {
    let prev = null
    let curr = this.head

    while (curr != null) {
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    this.head = prev
  }

  // Print The Result

  print() {
    let temp = this.head
    let result = ''

    while (temp) {
      result += temp.data + ' -> '
      temp = temp.next
    }

    console.log(result)
  }
}

const list = new LinkList()

//INSERT AT TAIL
list.insertAtTail(10)
list.insertAtTail(20)
list.insertAtTail(30)
list.insertAtTail(40)

// ISNERT AT HEAD
list.insertAtHead(5)

// INSERT AT POSITION

list.insertAtPosition(40000000, 2)

//REVERSE THE LINKLIST

// DELETE AT THE HEAD
list.deleteAtHead()

// SHOW ALL LIST
list.print()

// SHOW THE LENGTH OF ALL LIST
console.log('The Length OF link List is :', list.length())
