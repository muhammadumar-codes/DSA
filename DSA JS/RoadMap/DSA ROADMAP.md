    ==== *  DSA ROADMAP IN  JAVASCRIPT  TO LEARN *====

<!-- Revice The Topics -->

1. Array
2. String
3. Algorithm
4. Link List
5. Stack
6. Queue
7. HashMap
8. Recursion
9. Tree
10. Graph
11. Dynamic Programming

# Complete DSA Algorithms Notes (Beginner → Advanced)

# 1️⃣ ARRAYS

## Traversal

Loop through all elements.
Time: O(n)

## Find Max / Min

Keep variable and update while traversing.
Time: O(n)

## Reverse Array

Two pointer (swap start & end).
Time: O(n)

## Prefix Sum

prefix[i] = prefix[i-1] + arr[i]
Used for range sum queries.

## Kadane’s Algorithm (Maximum Subarray)

Maintain currentSum and maxSum.
If currentSum < 0 → reset.
Time: O(n)

## Two Sum

Use HashMap to store visited elements.
Time: O(n)

## Subarray Sum = K

Use prefix sum + hashmap.
Time: O(n)

## Rotate Array

Reverse method or modular indexing.
Time: O(n)

## Remove Duplicates (Sorted Array)

Two pointer method.
Time: O(n)

## Merge Intervals

Sort intervals → merge overlapping.
Time: O(n log n)

---

# 2️⃣ STRINGS

## Reverse String

Two pointer swap.

## Palindrome Check

Compare start & end characters.

## Anagram Check

Use frequency count array/map.

## Frequency Count

HashMap or array[26].

## Longest Substring Without Repeating

Sliding window + set/map.
Time: O(n)

## String Matching

Naive O(n\*m), or KMP (advanced).

## Valid Parentheses

Use stack.

## Pattern Matching

KMP / Rabin-Karp (advanced).

---

# 3️⃣ SEARCHING

## Linear Search

Check one by one.
Time: O(n)

## Binary Search

Sorted array.
Time: O(log n)

## Lower Bound / Upper Bound

First >= target.
First > target.

## Search in Rotated Sorted Array

Modified Binary Search.

## First & Last Occurrence

Binary search variant.

---

# 4️⃣ SORTING

## Bubble Sort

Repeated swapping.
Time: O(n²)

## Selection Sort

Select min and swap.
Time: O(n²)

## Insertion Sort

Insert at correct position.
Time: O(n²)

## Merge Sort

Divide & merge.
Time: O(n log n)
Space: O(n)

## Quick Sort

Pivot partitioning.
Average: O(n log n)
Worst: O(n²)

## Counting Sort

For small range numbers.
Time: O(n+k)

## Built-in Sort

Uses TimSort (Merge + Insertion).
Time: O(n log n)

---

# 5️⃣ TWO POINTER TECHNIQUE

Used when array is sorted or for reversal.

## Applications

- Reverse array
- Pair sum
- Remove duplicates
- Container with most water
- Trapping rain water

Time usually O(n)

---

# 6️⃣ SLIDING WINDOW

## Fixed Size

Window of size k.

## Variable Size

Expand & shrink window.

## Applications

- Maximum sum subarray
- Longest substring
- Sliding window maximum (Deque)

Time: O(n)

---

# 7️⃣ HASHING (Map / Set)

Used for O(1) lookup.

## Applications

- Frequency count
- Two sum
- Duplicate detection
- Subarray sum
- Anagrams

---

# 8️⃣ RECURSION & BACKTRACKING

## Basic Recursion

- Factorial
- Fibonacci
- Reverse array

## Backtracking

- Subsets
- Permutations
- Combination Sum
- N-Queens

Pattern:
Choose → Explore → Undo

---

# 9️⃣ LINKED LIST

## Traversal

Iterate using next pointer.

## Reverse Linked List

Three pointers method.

## Detect Cycle

Floyd’s cycle detection.

## Middle of List

Slow & fast pointer.

## Merge Two Sorted Lists

Two pointer merge.

## Remove Nth Node

Two pointer gap method.

---

# 🔟 STACK

LIFO Structure.

## Applications

- Valid parentheses
- Next greater element
- Infix → Postfix
- Monotonic stack
- Min stack

---

# 1️⃣1️⃣ QUEUE

FIFO Structure.

## Types

- Simple queue
- Circular queue
- Deque

## Applications

- Sliding window maximum
- BFS

---

# 1️⃣2️⃣ TREE 🌳

## DFS

- Preorder
- Inorder
- Postorder

## BFS

- Level order

## Important Problems

- Height
- Diameter
- LCA
- BST operations
- Validate BST
- Count of nodes
- sum of all nodes
- Hight of the tree
- Diameter of the tree
- sum of all tree kth level

Time: O(n)

---

# 1️⃣3️⃣ HEAP / PRIORITY QUEUE

Min Heap / Max Heap.

## Applications

- K largest elements
- Top K frequent
- Merge K lists
- Median in stream

Time: O(log n) per operation

---

# 1️⃣4️⃣ GRAPH 🌐

## Traversal

- BFS
- DFS

## Cycle Detection

Directed & Undirected

## Topological Sort

DAG only.

## Shortest Path

- Dijkstra (weighted)
- BFS (unweighted)

## Union Find

Disjoint set operations.

## Number of Islands

Grid DFS/BFS problem.

---

# 1️⃣5️⃣ DYNAMIC PROGRAMMING 🔥

Solve overlapping subproblems.

## Techniques

- Memoization (Top-down)
- Tabulation (Bottom-up)

## Important Problems

- Fibonacci
- Climbing stairs
- Knapsack
- Coin change
- LCS
- LIS
- Matrix DP
- DP on subsequences

---

# 🧠 Final Advice

Master in order:
Arrays → Strings → Searching → Sorting → Two Pointer → Sliding Window → Hashing → Recursion → Linked List → Stack → Queue → Tree → Heap → Graph → DP

Practice consistently on problems after each topic.

This roadmap covers 90% of coding interview questions 🚀
