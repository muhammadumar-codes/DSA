// Single LinkList With full details

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkList {
  constructor() {
    this.head = null;
  }

  // Insert At the Head.

  insertAtHead(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // insert at tail

  insertAtTail(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = newNode;
  }

  // Print All The Data

  // delete the head
  deleteHead() {
    if (this.head === null) return;
    this.head = this.head.next;
  }

  deleteAtTail() {
    if (this.head === null || this.head.next === null) {
      this.head = null;
    }

    let temp = this.head;
    while (temp.next.next !== null) {
      temp = temp.next;
    }
    temp.next = null;
  }

  reverse() {
    let prev = null;
    let curr = this.head;

    while (curr !== null) {
      let next = curr.next;

      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
  }

  print() {
    let temp = this.head;
    let result = " ";
    while (temp !== null) {
      // tell me about this how the temp is acccessing the data here

      result += temp.data + " -> ";

      temp = temp.next;
    }
    console.log(result + "null");
  }
}

let list = new linkList();
list.insertAtHead(10);
list.insertAtHead(20);
list.insertAtHead(30);

list.insertAtHead(5615851);
list.insertAtTail(563);
list.insertAtTail(123411);
list.deleteAtTail();
list.reverse();

list.print();
