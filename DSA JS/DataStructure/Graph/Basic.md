# 🌐 Graph Basics – From Child Level to Interview Level

---

# 🧠 1️⃣ What is a Graph? (Child Level Explanation)

Imagine:

- 🏙 Cities connected by roads
- 👥 People connected by friendships
- 💻 Computers connected by cables

That is a **Graph**.

Graph =

- 🔵 Dots → Nodes / Vertices (V)
- ➖ Lines → Edges (E)

Example:

```
A ---- B
|      |
C ---- D
```

Dots = Nodes
Lines = Edges

---

# 🧱 2️⃣ Graph Has 2 Main Things

- **Vertices (V)** → Total nodes
- **Edges (E)** → Total connections

If someone says:

Graph with **V = 4** and **E = 4**

That means:

- 4 nodes
- 4 connections

---

# 🛣 3️⃣ Types of Graphs (Very Important)

## 1️⃣ Undirected Graph

Connection goes both ways.

```
A ---- B
```

If A connects to B
Then B connects to A

Example: Facebook friends

---

## 2️⃣ Directed Graph (Digraph)

Connection has direction.

```
A → B
```

A follows B
B may not follow A

Example: Instagram follow

---

## 3️⃣ Weighted Graph

Edges have cost.

```
A --5-- B
```

5 can represent:

- Distance
- Time
- Money

---

# 🧠 4️⃣ How Do We Store a Graph?

Two main ways:

---

## 1️⃣ Adjacency Matrix ❌

Matrix of size V × V

If 1000 nodes:

1000 × 1000 = 1,000,000 spaces 😵

Space Complexity:

O(V²)

Not memory efficient.

---

## 2️⃣ Adjacency List ✅ (Best Method)

Store only neighbors.

Example:

```
0 → [1,2]
1 → [0,3]
2 → [0,3]
3 → [1,2]
```

Space Complexity:

O(V + E)

🔥 This is what real interviews prefer.

---

# 👶 5️⃣ Understanding the Code (Step by Step)

## Create Adjacency List

```js
this.adjList = new Map()
```

Map means:

```
key   → value
0     → [1,2]
1     → [0,3]
```

---

## Initialize Empty List for Every Node

```js
this.adjList.set(i, [])
```

Meaning:

"Every node starts with empty friends list"

---

# 🔗 6️⃣ addEdge(v, w)

```js
addEdge(v, w) {
  this.adjList.get(v).push(w)
  this.adjList.get(w).push(v)
}
```

Child meaning:

If 0 connects to 1:

- Add 1 inside 0 list
- Add 0 inside 1 list

Because this is an **Undirected Graph**.

---

# 🚶 7️⃣ BFS – Breadth First Search

Level by level traversal.

Think like throwing a stone in water 🌊
Waves go layer by layer.

Example starting at 0:

```
Level 0 → 0
Level 1 → 1,2
Level 2 → 3
```

Output:

```
0 1 2 3
```

Uses:

- Queue
- Visited array

Queue works as FIFO (First In First Out)

---

## BFS Code

```js
bfs(start) {
  let visited = new Array(this.vertices).fill(false)
  let queue = []

  visited[start] = true
  queue.push(start)

  while (queue.length > 0) {
    let node = queue.shift()
    console.log(node)

    for (let neighbor of this.adjList.get(node)) {
      if (!visited[neighbor]) {
        visited[neighbor] = true
        queue.push(neighbor)
      }
    }
  }
}
```

---

# 🌲 8️⃣ DFS – Depth First Search

Go deep first.

Like exploring a maze.

Example:

```
Start 0
Go 1
Go 3
Back
Go 2
```

Output:

```
0 1 3 2
```

Uses:

- Recursion
- Stack (internally)

---

## DFS Code

```js
dfs(start, visited = new Array(this.vertices).fill(false)) {
  visited[start] = true
  console.log(start)

  for (let neighbor of this.adjList.get(start)) {
    if (!visited[neighbor]) {
      this.dfs(neighbor, visited)
    }
  }
}
```

---

# 🔥 9️⃣ Time Complexity (Very Important)

For Adjacency List:

| Algorithm | Time Complexity |
| --------- | --------------- |
| BFS       | O(V + E)        |
| DFS       | O(V + E)        |

Why?

- Visit every vertex once
- Visit every edge once

---

# 🧠 Interview Understanding

When you see a problem ask yourself:

1. Is it traversal? → BFS or DFS
2. Is it shortest path? → BFS (unweighted) / Dijkstra (weighted)
3. Is it cycle detection? → DFS + visited logic
4. Is it dependency ordering? → Topological Sort

---

# 🚀 Final Summary

Graph = Nodes + Edges
Best storage = Adjacency List
Traversal = BFS & DFS
Complexity = O(V + E)

Master these basics and you can solve most beginner & intermediate graph problems.

---

🌟 End of Graph Beginner Master Notes
