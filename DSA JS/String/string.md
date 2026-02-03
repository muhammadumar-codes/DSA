# 📘 JavaScript Strings – DSA Level (Google / FAANG Ready)

---

## 🔹 What is a String?

A **string** is a sequence of characters stored inside quotes.

### Types of Quotes

```js
let a = 'Umar' // Double quotes
let b = 'Janii' // Single quotes
let c = `Hello ${a}` // Template literals
```

✔ Strings are **immutable** (cannot be changed in-place).

---

## 🔹 String Indexing

Each character has an index starting from **0**.

```js
const str = 'umar'
console.log(str[0]) // u
```

---

## 🔹 Length of String

```js
console.log(str.length) // 4
```

---

## 🔹 Traversing / Looping a String

### for...of loop

```js
for (const ch of 'Umar') {
  console.log(ch)
}
```

### Traditional for loop

```js
const s = 'Hello'
for (let i = 0; i < s.length; i++) {
  console.log(s[i])
}
```

---

## 🔹 Escape Characters

| Escape | Meaning      |
| ------ | ------------ |
| \'     | Single Quote |
| "      | Double Quote |
| \      | Backslash    |
| \n     | New Line     |
| \t     | Tab          |

```js
console.log('Hello\nWorld')
```

---

## 🔹 Important String Methods (Core DSA)

### charAt()

```js
'Janii'.charAt(2) // n
```

### toUpperCase() / toLowerCase()

```js
'hello'.toUpperCase()
'WORLD'.toLowerCase()
```

---

## 🔹 Searching in String

### indexOf()

```js
'Umar Khan'.indexOf('Khan') // 5
```

### lastIndexOf()

```js
'hello hello'.lastIndexOf('hello') // 6
```

### includes()

```js
'email@gmail.com'.includes('@') // true
```

### startsWith() / endsWith()

```js
'Hello World'.startsWith('Hello')
'He llo World'.endsWith('World')
```

---

## 🔹 Search & Match (Interview Use)

### search()

```js
'I love JS'.search('love') // 2
```

### match()

```js
'Hi Hi'.match(/Hi/g) // ["Hi", "Hi"]
```

---

## 🔹 Slice (Very Important)

```js
const str = 'JavaScript'
str.slice(0, 4) // Java
str.slice(-6) // Script
str.slice(4) // Script
```

---

## 🔹 concat()

```js
'Hello'.concat(' ', 'World')
```

---

## 🔹 charCodeAt() & fromCharCode()

```js
'A'.charCodeAt(0) // 65
String.fromCharCode(65) // A
```

Used in **hashing, encryption, frequency problems**.

---

## 🔹 split() → String to Array

```js
'I love JS'.split(' ') // ["I","love","JS"]
```

---

## 🔹 replace()

```js
'Hello World'.replace('World', 'JS')
```

---

## 🔹 Reverse a String (Classic DSA)

```js
function reverseString(s) {
  let res = ''
  for (let i = s.length - 1; i >= 0; i--) {
    res += s[i]
  }
  return res
}
```

⏱ Time: O(n) | Space: O(n)

---

## 🔹 Palindrome Check (Two Pointer – Google Favorite)

```js
function isPalindrome(s) {
  let i = 0,
    j = s.length - 1
  while (i < j) {
    if (s[i] !== s[j]) return false
    i++
    j--
  }
  return true
}
```

✔ Asked in **Google / Amazon / Meta**

---

## 🔹 String Immutability (IMPORTANT CONCEPT)

```js
let s = 'abc'
s[0] = 'z'
console.log(s) // abc ❌ not changed
```

✔ Always create a **new string**

---

## 🔹 Common DSA String Problems

1. Reverse String
2. Palindrome Check
3. Anagram Check
4. Frequency Count
5. Longest Substring
6. Valid Parentheses
7. Remove Duplicates
8. String Compression

---

## 🔹 Time Complexity Summary

| Operation  | Time |
| ---------- | ---- |
| Access     | O(1) |
| Traverse   | O(n) |
| Slice      | O(n) |
| Reverse    | O(n) |
| Palindrome | O(n) |

---

## 🔹 Interview Tip (VERY IMPORTANT)

> 💡 Strings behave like **arrays**, but they are **immutable**.
> Always think in terms of **Two Pointers**, **Frequency Map**, or **Sliding Window**.

---

## ✅ Final Note

These notes are **DSA + Interview ready**.
Perfect before starting:

- Sliding Window
- Binary Search on Strings
- Pattern Matching

---# 📘 JavaScript Strings – DSA Level (Google / FAANG Ready)

---

## 🔹 What is a String?

A **string** is a sequence of characters stored inside quotes.

### Types of Quotes

```js
let a = 'Umar' // Double quotes
let b = 'Janii' // Single quotes
let c = `Hello ${a}` // Template literals
```

✔ Strings are **immutable** (cannot be changed in-place).

---

## 🔹 String Indexing

Each character has an index starting from **0**.

```js
const str = 'umar'
console.log(str[0]) // u
```

---

## 🔹 Length of String

```js
console.log(str.length) // 4
```

---

## 🔹 Traversing / Looping a String

### for...of loop

```js
for (const ch of 'Umar') {
  console.log(ch)
}
```

### Traditional for loop

```js
const s = 'Hello'
for (let i = 0; i < s.length; i++) {
  console.log(s[i])
}
```

---

## 🔹 Escape Characters

| Escape | Meaning      |
| ------ | ------------ |
| \'     | Single Quote |
| "      | Double Quote |
| \      | Backslash    |
| \n     | New Line     |
| \t     | Tab          |

```js
console.log('Hello\nWorld')
```

---

## 🔹 Important String Methods (Core DSA)

### charAt()

```js
'Janii'.charAt(2) // n
```

### toUpperCase() / toLowerCase()

```js
'hello'.toUpperCase()
'WORLD'.toLowerCase()
```

---

## 🔹 Searching in String

### indexOf()

```js
'Umar Khan'.indexOf('Khan') // 5
```

### lastIndexOf()

```js
'hello hello'.lastIndexOf('hello') // 6
```

### includes()

```js
'email@gmail.com'.includes('@') // true
```

### startsWith() / endsWith()

```js
'Hello World'.startsWith('Hello')
'Hello World'.endsWith('World')
```

---

## 🔹 Search & Match (Interview Use)

### search()

```js
'I love JS'.search('love') // 2
```

### match()

```js
'Hi Hi'.match(/Hi/g) // ["Hi", "Hi"]
```

---

## 🔹 Slice (Very Important)

```js
const str = 'JavaScript'
str.slice(0, 4) // Java
str.slice(-6) // Script
str.slice(4) // Script
```

---

## 🔹 concat()

```js
'Hello'.concat(' ', 'World')
```

---

## 🔹 charCodeAt() & fromCharCode()

```js
'A'.charCodeAt(0) // 65
String.fromCharCode(65) // A
```

Used in **hashing, encryption, frequency problems**.

---

## 🔹 split() → String to Array

```js
'I love JS'.split(' ') // ["I","love","JS"]
```

---

## 🔹 replace()

```js
'Hello World'.replace('World', 'JS')
```

---

## 🔹 Reverse a String (Classic DSA)

```js
function reverseString(s) {
  let res = ''
  for (let i = s.length - 1; i >= 0; i--) {
    res += s[i]
  }
  return res
}
```

⏱ Time: O(n) | Space: O(n)

---

## 🔹 Palindrome Check (Two Pointer – Google Favorite)

```js
function isPalindrome(s) {
  let i = 0,
    j = s.length - 1
  while (i < j) {
    if (s[i] !== s[j]) return false
    i++
    j--
  }
  return true
}
```

✔ Asked in **Google / Amazon / Meta**

---

## 🔹 String Immutability (IMPORTANT CONCEPT)

```js
let s = 'abc'
s[0] = 'z'
console.log(s) // abc ❌ not changed
```

✔ Always create a **new string**

---

## 🔹 Common DSA String Problems

1. Reverse String
2. Palindrome Check
3. Anagram Check
4. Frequency Count
5. Longest Substring
6. Valid Parentheses
7. Remove Duplicates
8. String Compression

---

## 🔹 Time Complexity Summary

| Operation  | Time |
| ---------- | ---- |
| Access     | O(1) |
| Traverse   | O(n) |
| Slice      | O(n) |
| Reverse    | O(n) |
| Palindrome | O(n) |

---

## 🔹 Interview Tip (VERY IMPORTANT)

> 💡 Strings behave like **arrays**, but they are **immutable**.
> Always think in terms of **Two Pointers**, **Frequency Map**, or **Sliding Window**.

---

## ✅ Final Note

These notes are **DSA + Interview ready**.
Perfect before starting:

- Sliding Window
- Binary Search on Strings
- Pattern Matching

---

📌 _Prepared for Google-level DSA interviews_

---

## 🔤 String Case Toggle & Character Frequency (Google-Level DSA Notes)

📌 **Prepared for Google / FAANG DSA Interviews**

---

### ✅ Problem 1: Toggle Character Case (Upper ↔ Lower)

**Problem Statement:**
Convert every uppercase letter to lowercase and every lowercase letter to uppercase in a given string.

**Example:**
Input: `"JaNi"`
Output: `"jAnI"`

---

### 🧠 Core Logic (ASCII Based)

- Uppercase letters range: **65 → 90** (`A → Z`)
- Lowercase letters range: **97 → 122** (`a → z`)
- Difference between cases = **32**

---

### 💡 Algorithm Steps

1. Traverse each character in the string
2. Convert character to ASCII using `charCodeAt()`
3. Check range:

   - Uppercase → add 32
   - Lowercase → subtract 32

4. Convert back using `String.fromCharCode()`

---

### 🧪 JavaScript Code

```js
function toggleString(str) {
  let result = ''

  for (let i = 0; i < str.length; i++) {
    let ch = str.charCodeAt(i)

    if (ch >= 65 && ch <= 90) {
      result += String.fromCharCode(ch + 32)
    } else if (ch >= 97 && ch <= 122) {
      result += String.fromCharCode(ch - 32)
    } else {
      result += str[i] // special characters
    }
  }

  return result
}

console.log(toggleString('JaNi'))
```

---

### ⏱ Complexity

- **Time:** `O(n)`
- **Space:** `O(n)`

---

### 🎯 Interview Tip

> Avoid built-in methods like `.toUpperCase()` in interviews unless allowed.
> ASCII-based solutions show **strong fundamentals**.

---

## 🔢 Problem 2: Character Frequency Counter

**Problem Statement:**
Count how many times each character appears in a string.

**Example:**
Input: `"google"`
Output:

```
g → 2
o → 2
l → 1
e → 1
```

---

### 🧠 Core Idea

- Use a **fixed-size frequency array** (ASCII size = 128)
- Map characters to ASCII indexes

---

### 💡 Algorithm Steps

1. Create an array of size `128` initialized with `0`
2. Traverse the string
3. Increment count using `charCodeAt()`
4. Print non-zero frequencies

---

### 🧪 JavaScript Code

```js
function charCounter(str) {
  const freq = new Array(128).fill(0)

  for (let i = 0; i < str.length; i++) {
    let index = str.charCodeAt(i)
    freq[index]++
  }

  for (let i = 0; i < freq.length; i++) {
    if (freq[i] > 0) {
      console.log(`${String.fromCharCode(i)} → ${freq[i]}`)
    }
  }
}

charCounter('google')
```

---

### ⏱ Complexity

- **Time:** `O(n + 128)` ≈ `O(n)`
- **Space:** `O(1)` (constant size array)

---

### 🎯 Interview Tip

> This approach is preferred over `Map` when:

- Character set is fixed (ASCII)
- You want **maximum performance**

---

### 🚀 Variations to Practice

- Case-insensitive frequency count
- Count only alphabets
- Highest frequency character
- Anagram check using frequency array

---

📌 **Mastering these patterns = Strong String DSA foundation**

👉 Next recommended topics:

- Sliding Window on Strings
- Anagram Problems
- Palindrome Variations
- Hashing vs Frequency Array
