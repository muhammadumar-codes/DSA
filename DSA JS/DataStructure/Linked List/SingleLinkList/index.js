// // Craete A Node

// class Node {
//   constructor(data) {
//     this.data = data
//     this.next = null
//   }
// }

// // Linklist
// class LinkList {
//   constructor() {
//     this.head = null
//   }

//   //Insert At Head

//   insertAtHead(data) {
//     let newNode = new Node(data)
//     newNode.next = this.head
//     this.head = newNode
//   }

//   // Insert At Tail

//   insertAtTail(data) {
//     let newNode = new Node(data)

//     if (!this.head) {
//       this.head = newNode
//       return
//     }
//     let temp = this.head
//     while (temp.next != null) {
//       temp = temp.next
//     }
//     temp.next = newNode
//   }

//   // insert At Position :

//   // Show length

//   length() {
//     let count = 0
//     let temp = this.head

//     while (temp) {
//       count++
//       temp = temp.next
//     }
//     return count
//   }

//   // DELETE AT THE HEAD

//   deleteAtHead() {
//     this.head = this.head.next
//   }

//   //REVERSE THE ARRAY

//   reverse() {
//     let prev = null
//     let curr = this.head

//     while (curr) {
//       let next = curr.next
//       curr.next = prev
//       prev = curr
//       curr = next
//     }
//     this.head = prev
//   }

//   // Print The Result

//   print() {
//     let temp = this.head
//     let result = ''

//     while (temp) {
//       result += temp.data + ' -> '
//       temp = temp.next
//     }

//     console.log(result)
//   }
// }

// const list = new LinkList()

// //INSERT AT TAIL
// list.insertAtTail(10)
// list.insertAtTail(20)
// list.insertAtTail(30)
// list.insertAtTail(40)

// // ISNERT AT HEAD
// list.insertAtHead(5)

// // REVERSE THE ARRAY
// list.reverse()

// // DELETE AT THE HEAD
// list.deleteAtHead()

// // SHOW ALL LIST
// list.print()

// // SHOW THE LENGTH OF ALL LIST
// console.log('The Length OF link List is :', list.length())






