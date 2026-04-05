# 🔥 Dynamic Programming – Complete Master Notes (Beginner to Advanced)

---

# 🧠 1️⃣ What is Dynamic Programming? (Super Simple)

Dynamic Programming (DP) =

👉 Solve big problem
👉 Break into small problems
👉 Store answers
👉 Reuse stored answers

Simple meaning:

"Don't solve same problem again and again."

---

# 🧱 2️⃣ When to Use DP?

DP is used when problem has:

1️⃣ Overlapping Subproblems
2️⃣ Optimal Substructure

---

## ✅ Overlapping Subproblems

Example: Fibonacci

```
fib(5)
├── fib(4)
│   ├── fib(3)
│   └── fib(2)
└── fib(3)
```

fib(3) is calculated multiple times 😵

---

## ✅ Optimal Substructure

If best answer of big problem depends on best answer of small problems.

Example:

Shortest path
Knapsack

---

# 🧩 3️⃣ Two Ways to Do DP

## 1️⃣ Memoization (Top-Down)

* Recursion
* Store answers in array/map

## 2️⃣ Tabulation (Bottom-Up)

* Iterative
* Build solution step by step

---

# 🌱 4️⃣ Fibonacci Example (Starter DP)

---

## ❌ Normal Recursion (Bad)

Time: O(2^n)

```js
function fib(n) {
  if (n <= 1) return n
  return fib(n-1) + fib(n-2)
}
```

---

## ✅ Memoization

Time: O(n)

```js
function fib(n, dp = {}) {
  if (n in dp) return dp[n]
  if (n <= 1) return n

  dp[n] = fib(n-1, dp) + fib(n-2, dp)
  return dp[n]
}
```

---

## ✅ Tabulation

```js
function fib(n) {
  let dp = new Array(n+1).fill(0)
  dp[1] = 1

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
  }

  return dp[n]
}
```

---

# 🪜 5️⃣ Climbing Stairs

You can climb 1 or 2 steps.

How many ways to reach n?

Same as Fibonacci!

Transition:

```
dp[i] = dp[i-1] + dp[i-2]
```

---

# 🎒 6️⃣ 0/1 Knapsack (Important)

You have:

* Weights
* Values
* Capacity

Goal:
Maximize value without exceeding capacity.

DP State:

```
dp[i][w] = max value using first i items and capacity w
```

Transition:

```
If weight <= w:
  dp[i][w] = max(
      dp[i-1][w],
      value + dp[i-1][w-weight]
  )
Else:
  dp[i][w] = dp[i-1][w]
```

Time: O(n × capacity)

---

# 💰 7️⃣ Coin Change

Given coins, find minimum coins to make amount.

State:

```
dp[i] = minimum coins to make amount i
```

Transition:

```
dp[i] = min(dp[i], dp[i-coin] + 1)
```

---

# 🔤 8️⃣ Longest Common Subsequence (LCS)

Given two strings.
Find longest common subsequence.

State:

```
dp[i][j] = LCS length of s1[0..i-1] and s2[0..j-1]
```

Transition:

If characters match:

```
dp[i][j] = 1 + dp[i-1][j-1]
```

Else:

```
dp[i][j] = max(dp[i-1][j], dp[i][j-1])
```

Time: O(n × m)

---

# 📈 9️⃣ Longest Increasing Subsequence (LIS)

Find longest increasing subsequence.

Basic DP:

```
dp[i] = length of LIS ending at i
```

Time: O(n²)

Optimized:

Binary Search method → O(n log n)

---

# 🧮 🔟 DP on Grid (Matrix DP)

Common Problems:

* Unique paths
* Minimum path sum

State:

```
dp[i][j] = answer for cell (i, j)
```

Transition:

```
dp[i][j] = dp[i-1][j] + dp[i][j-1]
```

---

# 🔁 1️⃣1️⃣ DP on Subsequences

Pattern:

"Include or Exclude"

Example:

* Subset sum
* Partition equal subset
* Target sum

---

# 🔥 1️⃣2️⃣ DP Optimization Techniques

## 1️⃣ Space Optimization

Instead of 2D dp, use 1D dp.

## 2️⃣ Bitmask DP

Used in advanced problems.

## 3️⃣ Digit DP

Used in number problems.

## 4️⃣ DP with State Compression

Advanced competitive programming technique.

---

# 🧠 How to Think in DP (Step-by-Step)

1️⃣ Define state
2️⃣ Define transition
3️⃣ Define base case
4️⃣ Decide memoization or tabulation
5️⃣ Optimize space

---

# 🚀 Complexity Summary

| Problem         | Time Complexity    |
| --------------- | ------------------ |
| Fibonacci       | O(n)               |
| Climbing Stairs | O(n)               |
| Knapsack        | O(nW)              |
| Coin Change     | O(n × amount)      |
| LCS             | O(nm)              |
| LIS             | O(n²) / O(n log n) |
| Grid DP         | O(nm)              |

---

# 🎯 DP Master Roadmap

Level 1:

* Fibonacci
* Climbing Stairs

Level 2:

* Coin Change
* Knapsack
* Subset Sum

Level 3:

* LCS
* LIS
* Matrix DP

Level 4:

* Bitmask DP
* Digit DP
* Advanced Optimization

---

# 🌟 Final Advice

DP is not about memorizing formulas.

It is about pattern recognition.

If you can:

* Define state
* Write transition
* Handle base case

You can solve any DP problem.

---

🔥 End of Dynamic Programming Complete Notes
a