# 🌐 Graph Learning – Step by Step with Adjacency List

---

# 🎯 Goal

We will learn:

- What is Adjacency List
- How to create graph
- How to add edges
- How to print graph
- How to run BFS
- How to run DFS

Everything step by step with code.

---

# 1️⃣ What is Adjacency List?

Adjacency List = Store graph as an array of lists.

Instead of matrix (V × V), we store only connections.

Example Graph:

```
0 ----- 1
|       |
|       |
2 ----- 3
```

Adjacency List Representation:

0 → [1,2]
1 → [0,3]
2 → [0,3]
3 → [1,2]

Space Complexity: O(V + E)

---

# 2️⃣ Step 1: Create Graph Class

```js
class Graph {
  constructor(vertices) {
    this.vertices = vertices
    this.adjList = new Map()

    // initialize empty list for each vertex
    for (let i = 0; i < vertices; i++) {
      this.adjList.set(i, [])
    }
  }
}
```

Now graph is created with empty adjacency list.

---

# 3️⃣ Step 2: Add Edge (Undirected Graph)

```js
addEdge(v, w) {
  this.adjList.get(v).push(w)
  this.adjList.get(w).push(v)
}
```

If directed graph:

```js
addEdge(v, w) {
  this.adjList.get(v).push(w)
}
```

---

# 4️⃣ Step 3: Print Graph

```js
printGraph() {
  for (let [vertex, neighbors] of this.adjList) {
    console.log(vertex + " -> " + neighbors.join(", "))
  }
}
```

---

# 5️⃣ Full Graph Setup Example

```js
class Graph {
  constructor(vertices) {
    this.vertices = vertices
    this.adjList = new Map()

    for (let i = 0; i < vertices; i++) {
      this.adjList.set(i, [])
    }
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w)
    this.adjList.get(w).push(v)
  }

  printGraph() {
    for (let [vertex, neighbors] of this.adjList) {
      console.log(vertex + ' -> ' + neighbors.join(', '))
    }
  }
}

// Create graph
let graph = new Graph(4)

graph.addEdge(0, 1)
graph.addEdge(0, 2)
graph.addEdge(1, 3)
graph.addEdge(2, 3)

graph.printGraph()
```

---

# 6️⃣ BFS (Breadth First Search)

Level by level traversal.

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

# 7️⃣ DFS (Depth First Search)

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

# 8️⃣ Complete Graph with BFS + DFS

```js
class Graph {
  constructor(vertices) {
    this.vertices = vertices
    this.adjList = new Map()

    for (let i = 0; i < vertices; i++) {
      this.adjList.set(i, [])
    }
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w)
    this.adjList.get(w).push(v)
  }

  printGraph() {
    for (let [vertex, neighbors] of this.adjList) {
      console.log(vertex + ' -> ' + neighbors.join(', '))
    }
  }

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

  dfs(start, visited = new Array(this.vertices).fill(false)) {
    visited[start] = true
    console.log(start)

    for (let neighbor of this.adjList.get(start)) {
      if (!visited[neighbor]) {
        this.dfs(neighbor, visited)
      }
    }
  }
}
```

---

# 🚀 What You Learned

- Graph structure
- Adjacency List storage
- Add edge
- Print graph
- BFS traversal
- DFS traversal

---

# 🧠 Practice Task

1. Create graph of 5 nodes
2. Make it directed
3. Run BFS from node 0
4. Run DFS from node 0
5. Try detecting cycle next

---

🌟 You are now officially starting Graph coding properly.
