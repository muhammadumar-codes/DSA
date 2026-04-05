class ArrayStack {
  constructor() {
    this.items = []
  }

  push(value) {
    this.items.push(value)
    return this.size()
  }

  pop() {
    if (this.isEmpty()) {
      return null
    }

    return this.items.pop()
  }

  peek() {
    if (this.isEmpty()) {
      return null
    }

    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  clear() {
    this.items.length = 0
  }

  toArray() {
    return [...this.items]
  }
}

class StackNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedListStack {
  constructor() {
    this.top = null
    this.length = 0
  }

  push(value) {
    const node = new StackNode(value)
    node.next = this.top
    this.top = node
    this.length += 1
    return this.length
  }

  pop() {
    if (this.isEmpty()) {
      return null
    }

    const removedValue = this.top.value
    this.top = this.top.next
    this.length -= 1
    return removedValue
  }

  peek() {
    return this.top ? this.top.value : null
  }

  isEmpty() {
    return this.length === 0
  }

  size() {
    return this.length
  }

  clear() {
    this.top = null
    this.length = 0
  }

  toArray() {
    const result = []
    let current = this.top

    while (current) {
      result.push(current.value)
      current = current.next
    }

    return result
  }
}

function isValidParentheses(sequence) {
  const stack = new ArrayStack()
  const closingToOpening = {
    ')': '(',
    ']': '[',
    '}': '{',
  }

  for (const char of sequence) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char)
      continue
    }

    if (closingToOpening[char]) {
      if (stack.pop() !== closingToOpening[char]) {
        return false
      }
    }
  }

  return stack.isEmpty()
}

function reverseStringWithStack(value) {
  const stack = new ArrayStack()

  for (const char of value) {
    stack.push(char)
  }

  let reversed = ''
  while (!stack.isEmpty()) {
    reversed += stack.pop()
  }

  return reversed
}

module.exports = {
  ArrayStack,
  LinkedListStack,
  StackNode,
  isValidParentheses,
  reverseStringWithStack,
}
