# Stack Data Structure

## What It Is

A stack is a linear data structure that follows the `LIFO` rule: `Last In, First Out`.

Examples:

- Browser back navigation
- Undo and redo history
- Function call stack
- Expression parsing
- Monotonic stack problems

Representation:

```text
bottom [10, 20, 30] top
```

---

## Core Operations

| Operation | Purpose | Expected Complexity |
| --- | --- | --- |
| `push(x)` | Insert `x` at the top | `O(1)` |
| `pop()` | Remove and return top element | `O(1)` |
| `peek()` | Return top element without removing it | `O(1)` |
| `isEmpty()` | Check whether stack has no elements | `O(1)` |
| `size()` | Number of elements in stack | `O(1)` |

Interview note:

- `push`, `pop`, and `peek` are only `O(1)` if we operate at one end.
- Using `Array.prototype.shift()` or `unshift()` would make operations `O(n)`, so they should not be used for stack implementations.

---

## Interview Invariants

For a correct stack implementation:

- The newest item must always be the next item removed.
- `peek()` must not modify the stack.
- Underflow should be handled predictably.
- `size()` should always match the number of stored elements.

Good interview explanation:

1. Define the invariant: top element is the most recently inserted unremoved item.
2. Show how each operation preserves that invariant.
3. State time and space complexity.
4. Call out underflow handling.

---

## Implementation 1: Stack Using Array

### When To Use It

Use an array-backed stack when:

- You want a compact implementation
- Random access to the internal backing store is acceptable
- Dynamic resizing from the language runtime is fine

### JavaScript Implementation

```js
class ArrayStack {
  constructor() {
    this.items = []
  }

  push(value) {
    this.items.push(value)
    return this.items.length
  }

  pop() {
    if (this.items.length === 0) {
      return null
    }

    return this.items.pop()
  }

  peek() {
    if (this.items.length === 0) {
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
}
```

### Complexity

- `push`: `O(1)` amortized
- `pop`: `O(1)`
- `peek`: `O(1)`
- `isEmpty`: `O(1)`
- `size`: `O(1)`
- Space: `O(n)`

### Edge Cases

- `pop()` on empty stack
- `peek()` on empty stack
- Repeated push/pop alternating sequences
- Duplicates and falsy values like `0`, `false`, `''`, and `null`

---

## Implementation 2: Stack Using Linked List

### When To Use It

Use a linked-list-backed stack when:

- You want explicit node-level structure
- You want `O(1)` push/pop without relying on array resizing
- You are practicing pointer manipulation for interviews

### JavaScript Implementation

```js
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
    if (this.top === null) {
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
}
```

### Complexity

- `push`: `O(1)`
- `pop`: `O(1)`
- `peek`: `O(1)`
- `isEmpty`: `O(1)`
- `size`: `O(1)`
- Space: `O(n)`

### Trade-Offs vs Array

| Factor | Array Stack | Linked List Stack |
| --- | --- | --- |
| Simplicity | Better | Slightly worse |
| Constant factors | Better in JS | Worse |
| Dynamic growth | Yes | Yes |
| Pointer practice | No | Yes |
| Interview teaching value | Good | Very good |

Important correction:

- Saying an array stack has "fixed memory" is inaccurate in JavaScript because arrays resize dynamically.
- Saying linked lists have "no overflow" is also inaccurate in practical systems. They can still fail due to memory limits.

---

## Pattern: Valid Parentheses

### Problem

Given a string containing only brackets, determine whether every opening bracket is closed in the correct order.

### Why Stack Fits

The most recently opened bracket must be matched first, which is exactly `LIFO`.

### Optimal Approach

1. Push opening brackets.
2. On a closing bracket, pop and verify the type matches.
3. At the end, the stack must be empty.

### Code

```js
function isValidParentheses(sequence) {
  const stack = []
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

  return stack.length === 0
}
```

### Complexity

- Time: `O(n)`
- Space: `O(n)` in the worst case

### Interview Discussion Points

- Why this is not a counting problem
- Why order matters, not just frequency
- Why stack is better than trying to match from the start greedily

---

## Pattern: Reverse a String

### Problem

Reverse a string using stack behavior.

### Code

```js
function reverseStringWithStack(value) {
  const stack = []

  for (const char of value) {
    stack.push(char)
  }

  let reversed = ''
  while (stack.length > 0) {
    reversed += stack.pop()
  }

  return reversed
}
```

### Complexity

- Time: `O(n)`
- Space: `O(n)`

Interview note:

- In production JavaScript, `split('').reverse().join('')` is often shorter, but the stack version is useful for teaching the pattern.

---

## Common Stack Patterns

### 1. Parenthesis and Expression Validation

- Valid Parentheses
- Remove Outermost Parentheses
- Minimum Add to Make Parentheses Valid

### 2. Monotonic Stack

Use a stack that is kept increasing or decreasing.

- Next Greater Element
- Daily Temperatures
- Largest Rectangle in Histogram
- Trapping Rain Water

### 3. Simulation Problems

- Baseball Game
- Backspace String Compare
- Decode String

### 4. Stack Transformation

- Implement Queue using Stacks
- Implement Stack using Queues
- Min Stack

---

## FAANG-Level Follow-Up Questions

For stack implementations:

- How would you support `getMin()` in `O(1)`?
- How would you implement a stack using two queues?
- How would you make it generic enough for interview reuse?
- What changes if the stack must be thread-safe?

For stack pattern problems:

- Can you reduce extra space?
- Can you derive the monotonic invariant clearly?
- What happens with duplicate values?
- How do you justify correctness, not just complexity?

---

## Whiteboard Strategy

When presenting a stack problem in an interview:

1. State why `LIFO` matches the problem.
2. Define what is stored in the stack.
3. Walk through one example manually.
4. Identify underflow or empty-stack cases.
5. Give final complexity and trade-offs.

---

## Weak Spots To Fix In The Current Repo

- Canonical stack implementation now lives in [implementation.js](/home/engineer/projects/DSA/DSA%20JS/src/data-structures/stack/implementation.js)
- Automated coverage currently starts with [stack.test.js](/home/engineer/projects/DSA/DSA%20JS/tests/stack.test.js)
- Practice list has been normalized to `practice.md`
- Notes should be standardized by `concept -> invariant -> implementation -> pattern -> practice`

---

## Recommended Practice Set

Easy:

- Valid Parentheses
- Implement Stack using Queues
- Baseball Game

Medium:

- Min Stack
- Daily Temperatures
- Next Greater Element II
- Decode String

Hard:

- Largest Rectangle in Histogram
- Maximal Rectangle
- Basic Calculator II

---

## Final Takeaway

If you can:

- implement a stack from scratch,
- explain why `LIFO` is correct,
- solve bracket validation confidently,
- and recognize monotonic stack patterns,

then your stack fundamentals are interview ready.
