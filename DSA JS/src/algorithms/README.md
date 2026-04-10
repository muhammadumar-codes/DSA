# 🔢 Algorithms - Complete Learning Notes

> **Master all essential algorithms for DSA interviews and competitive programming**

---

## 📚 Table of Contents

1. [Binary Search](#binary-search)
2. [Recursion](#recursion)
3. [Dynamic Programming](#dynamic-programming)
4. [Math Algorithms](#math-algorithms)
5. [Sorting Algorithms](#sorting-algorithms)
   - [Bubble Sort](#bubble-sort)
   - [Selection Sort](#selection-sort)
   - [Insertion Sort](#insertion-sort)
   - [Merge Sort](#merge-sort)
   - [Quick Sort](#quick-sort)

---

## 🔍 Binary Search

### Definition
Binary Search is a searching algorithm that works on a **sorted array**. It reduces the search space by **dividing it in half on every step**.

### Key Concept
> Binary Search = Divide by 2

At each step:
- Find the **middle element**
- Compare it with the **target**
- Eliminate **half of the array**

### Important Notes
- ✅ Array **must be sorted**
- ❌ Does NOT work on unsorted arrays
- 🔥 Very efficient for large data

### Time & Space Complexity
| Case | Complexity |
|------|------------|
| Time | **O(log n)** |
| Space | **O(1)** (Iterative) |

### Algorithm Steps
1. Set `left = 0`
2. Set `right = arr.length - 1`
3. Find `mid`
4. Compare `arr[mid]` with `target`
5. Move left or right pointer
6. Repeat until found or pointers cross

### JavaScript Implementation
```javascript
function binarySearch(arr, target) {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1
}
```

### Example Usage
```javascript
const arr = [2, 4, 6, 8, 10, 12, 14]
const target = 10
const result = binarySearch(arr, target)
console.log(result) // 4
```

### Common Mistakes
- Using binary search on **unsorted array**
- Wrong `mid` calculation
- Infinite loop due to wrong pointer update
- Comparing index instead of value

### Interview Answer (One Line)
> **Binary search reduces the search space by half in every step.**

### Where Binary Search is Used
- Arrays
- Searching problems
- Interview questions
- DSA & Competitive Programming
- LeetCode / Codeforces

---

## 🔁 Recursion

### Definition
**Recursion** is a technique where a function **calls itself** to solve a problem by breaking it into **smaller subproblems**, until it reaches a **base case**.

> 🛑 **Base Case** stops infinite calls  
> 🔁 **Recursive Case** calls the function again

### Key Concepts
- Every recursion must have:
  1. **Base Case** (stop condition)
  2. **Recursive Call** (same function calling itself)
- Uses **call stack** memory
- Common in **DSA, trees, graphs, backtracking**

### Example: Factorial
```javascript
function fact(n) {
  if (n === 1) return 1 // Base case
  return n * fact(n - 1) // Recursive call
}
```
- Time: `O(n)`
- Space: `O(n)` (call stack)

### Fibonacci Series (Iterative)
```javascript
function fibonacci(n) {
  let first = 0, second = 1
  process.stdout.write(first + ' ' + second + ' ')

  for (let i = 0; i < n; i++) {
    let third = first + second
    first = second
    second = third
    process.stdout.write(third + ' ')
  }
}
```
- Time: `O(n)`
- Space: `O(1)`

### Fibonacci Using Recursion
```javascript
function fibonacci(n) {
  if (n === 0) return 0
  if (n === 1) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}
```
- Time: `O(2^n)` ❌ (Very slow for large n)

### Recursion vs Loop
| Feature | Recursion | Loop |
|---------|-----------|------|
| Readability | High | Medium |
| Memory | Uses stack | Less memory |
| Speed | Slower | Faster |

### When to Use Recursion?
- Tree / Graph traversal
- Divide & Conquer (Merge Sort, Quick Sort)
- Backtracking (N-Queen, Maze)
- Mathematical problems

### Interview Tips
- Always explain **base case** first
- Draw **recursion tree**
- Mention **time & space complexity**
- Avoid recursion if stack overflow possible

### Practice Problems by Level

**LEVEL 1: Recursion Basics**
- Fibonacci Number
- Factorial Trailing Zeroes
- Power of Two/Three/Four
- Reverse String
- Sum of Digits of String After Convert

**LEVEL 2: Backtracking Basics**
- Subsets / Subsets II
- Permutations / Permutations II
- Combinations / Combination Sum

**LEVEL 3: Recursion on Strings**
- Letter Combinations of a Phone Number
- Generate Parentheses 🔥
- Palindrome Partitioning
- Restore IP Addresses
- Word Search

**LEVEL 4-7: Advanced**
- Recursion on Arrays, Trees, DP, and Advanced Backtracking

---

## 🔥 Dynamic Programming

### What is Dynamic Programming?
Dynamic Programming (DP) = 
- 👉 Solve big problem
- 👉 Break into small problems
- 👉 Store answers
- 👉 Reuse stored answers

**Simple meaning:** "Don't solve same problem again and again."

### When to Use DP?
DP is used when problem has:
1. **Overlapping Subproblems**
2. **Optimal Substructure**

### Two Ways to Do DP
1. **Memoization (Top-Down)** - Recursion + Store answers in array/map
2. **Tabulation (Bottom-Up)** - Iterative, build solution step by step

### Fibonacci Example (Starter DP)

**❌ Normal Recursion (Bad)** - Time: O(2^n)
```javascript
function fib(n) {
  if (n <= 1) return n
  return fib(n-1) + fib(n-2)
}
```

**✅ Memoization** - Time: O(n)
```javascript
function fib(n, dp = {}) {
  if (n in dp) return dp[n]
  if (n <= 1) return n
  dp[n] = fib(n-1, dp) + fib(n-2, dp)
  return dp[n]
}
```

**✅ Tabulation**
```javascript
function fib(n) {
  let dp = new Array(n+1).fill(0)
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n]
}
```

### Important DP Problems

**1. Climbing Stairs**
- Same as Fibonacci!
- Transition: `dp[i] = dp[i-1] + dp[i-2]`

**2. 0/1 Knapsack**
- Maximize value without exceeding capacity
- DP State: `dp[i][w] = max value using first i items and capacity w`

**3. Coin Change**
- Find minimum coins to make amount
- Transition: `dp[i] = min(dp[i], dp[i-coin] + 1)`

**4. Longest Common Subsequence (LCS)**
- If characters match: `dp[i][j] = 1 + dp[i-1][j-1]`
- Else: `dp[i][j] = max(dp[i-1][j], dp[i][j-1])`
- Time: O(n × m)

**5. Longest Increasing Subsequence (LIS)**
- Basic DP: O(n²)
- Optimized with Binary Search: O(n log n)

**6. DP on Grid (Matrix DP)**
- Unique paths, Minimum path sum
- Transition: `dp[i][j] = dp[i-1][j] + dp[i][j-1]`

### How to Think in DP (Step-by-Step)
1. Define state
2. Define transition
3. Define base case
4. Decide memoization or tabulation
5. Optimize space

### Complexity Summary
| Problem | Time Complexity |
|---------|-----------------|
| Fibonacci | O(n) |
| Climbing Stairs | O(n) |
| Knapsack | O(nW) |
| Coin Change | O(n × amount) |
| LCS | O(nm) |
| LIS | O(n²) / O(n log n) |
| Grid DP | O(nm) |

### DP Master Roadmap
**Level 1:** Fibonacci, Climbing Stairs  
**Level 2:** Coin Change, Knapsack, Subset Sum  
**Level 3:** LCS, LIS, Matrix DP  
**Level 4:** Bitmask DP, Digit DP, Advanced Optimization

### Final Advice
> DP is not about memorizing formulas. It is about **pattern recognition**. If you can define state, write transition, and handle base case, you can solve any DP problem.

---

## 🔢 Math Algorithms

### GCD (Greatest Common Divisor)

#### Euclidean Algorithm (Using Subtraction)
```javascript
let a = 32, b = 20
while (a != b) {
  if (a > b) a = a - b
  else b = b - a
}
console.log(`GCD: ${a}`) // 4
```

#### Euclidean Algorithm (Using Recursion)
```javascript
function GCD(a, b) {
  if (a === b) return a
  if (a > b) return GCD(a - b, b)
  else return GCD(b - a, a)
}
```

#### Euclidean Algorithm (Using Modulo) - **Most Efficient**
```javascript
function GCD(a, b) {
  if (b === 0) return a
  return GCD(b, a % b)
}
```

### Finding Factors
```javascript
function factors(n) {
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) console.log(i)
    if (i !== n / i) {
      console.log(Math.floor(n / i))
    }
  }
}
```

### Prime Number Check
```javascript
function primeNumber(n) {
  if (!n) return false
  if (n <= 1) return false
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false
  }
  return true
}
```

---

## 📊 Sorting Algorithms

### 🔵 Bubble Sort

#### Definition
**Bubble Sort** is a simple comparison-based sorting algorithm where **adjacent elements are repeatedly compared and swapped** if they are in the wrong order. The largest element **"bubbles up"** to the end of the array in each pass.

#### How It Works
1. Start from index `0`
2. Compare `arr[i]` with `arr[i + 1]`
3. Swap if `arr[i] > arr[i + 1]`
4. Continue till the end of the array
5. Repeat passes until no swaps are needed

#### Time Complexity
| Case | Complexity |
|------|------------|
| Best | **O(n)** (Already sorted with flag) |
| Average | **O(n²)** |
| Worst | **O(n²)** |

#### Space Complexity
- **O(1)** (In-place sorting)

#### JavaScript Implementation
```javascript
function bubbleSort(arr) {
  let n = arr.length
  for (let i = 0; i < n - 1; i++) {
    let swapped = false
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        swapped = true
      }
    }
    if (!swapped) break
  }
  return arr
}
```

#### Interview Answer (One Line)
> **Bubble Sort repeatedly swaps adjacent elements until the array is sorted.**

---

### 🟠 Selection Sort

#### Definition
**Selection Sort** repeatedly **selects the minimum element** from the unsorted part of the array and places it at its **correct position**.

#### How It Works
1. Start from index `i = 0`
2. Find the minimum element from index `i` to the end
3. Swap the minimum element with the element at index `i`
4. Move `i` to the next position
5. Repeat until the array is sorted

#### Time Complexity
| Case | Complexity |
|------|------------|
| Best | **O(n²)** |
| Average | **O(n²)** |
| Worst | **O(n²)** |

#### Space Complexity
- **O(1)** (In-place sorting)

#### JavaScript Implementation
```javascript
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]]
  }
  return arr
}
```

#### Interview Answer (One Line)
> **Selection Sort repeatedly selects the smallest element from the unsorted part and places it at the correct position.**

---

### 🟢 Insertion Sort

#### Definition
**Insertion Sort** builds the final sorted array **one item at a time**. It works similar to the way you **sort playing cards in your hands**.

#### How It Works
1. Start from the second element (`i = 1`)
2. Store the current element in `key`
3. Compare `key` with elements in the sorted part (`arr[0..i-1]`)
4. Move elements greater than `key` one position ahead
5. Insert `key` at the correct position
6. Repeat for all elements

#### Time Complexity
| Case | Complexity |
|------|------------|
| Best | **O(n)** (Already sorted) |
| Average | **O(n²)** |
| Worst | **O(n²)** |

#### Space Complexity
- **O(1)** (In-place)

#### JavaScript Implementation
```javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = key
  }
  return arr
}
```

#### Interview Answer (One Line)
> **Insertion Sort places each element at its correct position by comparing with the sorted part of the array.**

---

### 🔀 Merge Sort

#### Definition
**Merge Sort** is a **Divide and Conquer** sorting algorithm that:
1. Divides the array into **smaller subarrays**
2. Sorts each subarray **recursively**
3. **Merges** the sorted subarrays back together

➡️ Merge Sort guarantees **O(n log n)** time complexity in **all cases**.

#### Core Concept
> "Divide until one element remains, then merge in sorted order."

#### Time Complexity
| Case | Complexity |
|------|------------|
| Best | **O(n log n)** |
| Average | **O(n log n)** |
| Worst | **O(n log n)** |

#### Space Complexity
- **O(n)** (Not in-place, uses extra space)

#### Is Merge Sort Stable?
✅ **YES** - Merge Sort is stable (equal elements keep their original order)

#### JavaScript Implementation
```javascript
function mergeSort(arr) {
  if (arr.length <= 1) return arr

  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))

  return merge(left, right)
}

function merge(left, right) {
  let result = []
  let i = 0, j = 0

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i])
      i++
    } else {
      result.push(right[j])
      j++
    }
  }

  return result
    .concat(left.slice(i))
    .concat(right.slice(j))
}
```

#### When to Use Merge Sort?
✔ When stability is required  
✔ Sorting linked lists  
✔ Large datasets  
✔ Guaranteed performance needed

#### Interview One-Line Answer
> Merge Sort is a divide and conquer algorithm that splits the array and merges sorted halves with O(n log n) time.

---

### ⚡ Quick Sort

#### Definition
**Quick Sort** is a **divide and conquer** sorting algorithm that:
1. Selects a **pivot** element
2. Places the pivot at its **correct position**
3. Recursively sorts the **left** and **right** subarrays

➡️ It is one of the **fastest sorting algorithms in practice**.

#### Steps
1. Choose a pivot (first / last / middle / random)
2. Partition the array so that:
   - Elements < pivot → left
   - Elements > pivot → right
3. Pivot is now in correct position
4. Apply Quick Sort on left and right subarrays

#### Time Complexity
| Case | Complexity |
|------|------------|
| Best | **O(n log n)** |
| Average | **O(n log n)** |
| Worst | **O(n²)** (when pivot is smallest/largest) |

#### Space Complexity
- **O(log n)** → Recursive stack (in-place version)
- **O(n)** → Extra space version

#### Quick Sort vs Merge Sort
| Feature | Quick Sort | Merge Sort |
|---------|------------|------------|
| Speed | Faster in practice | Slightly slower |
| Space | O(log n) | O(n) |
| Stable | ❌ No | ✅ Yes |
| In-place | ✅ Yes | ❌ No |

#### JavaScript Implementation
```javascript
function quickSort(arr) {
  if (arr.length <= 1) return arr

  let pivot = arr[arr.length - 1]
  let left = []
  let right = []

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i])
    else right.push(arr[i])
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}
```

#### Interview Answer (One Line)
> Quick Sort works by selecting a pivot and partitioning the array around it, recursively sorting subarrays.

---

## 📝 Summary Table: All Sorting Algorithms

| Algorithm | Best Time | Average Time | Worst Time | Space | Stable? | In-place? |
|-----------|-----------|--------------|------------|-------|---------|-----------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | ✅ Yes | ✅ Yes |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | ❌ No | ✅ Yes |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) | ✅ Yes | ✅ Yes |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | ✅ Yes | ❌ No |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) | ❌ No | ✅ Yes |

---

**🔥 End of Algorithms Master Notes**
