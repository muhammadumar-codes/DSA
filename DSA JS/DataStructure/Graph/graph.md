# 🌐 Graph – Complete Master Notes (DSA)

---

# 1️⃣ What is a Graph?

A Graph is a data structure used to represent relationships between objects.

It consists of:

- Vertices (Nodes)
- Edges (Connections between nodes)

Example:

```
A ----- B
|       |
|       |
C ----- D
```

---

# 2️⃣ Types of Graphs

## 1. Undirected Graph

Edges have no direction.

A — B (same as B — A)

## 2. Directed Graph (Digraph)

Edges have direction.

A → B (not equal to B → A)

## 3. Weighted Graph

Edges have weights (cost/distance).

A --5--> B

## 4. Unweighted Graph

All edges have equal weight.

## 5. Cyclic Graph

Contains a cycle.

## 6. Acyclic Graph

No cycle present.

## 7. Connected Graph

All nodes are reachable.

## 8. Disconnected Graph

Some nodes are not connected.

---

# 3️⃣ Graph Representation

## 1. Adjacency Matrix

Matrix of size V x V

Space Complexity: O(V²)

Example:

```
0 1 0
1 0 1
0 1 0
```

## 2. Adjacency List (Most Used)

Array of lists

0 → [1,2]
1 → [0,3]
2 → [0]
3 → [1]

Space Complexity: O(V + E)

---

# 4️⃣ Graph Traversal

Traversal = Visit all vertices.

Two main methods:

- BFS (Breadth First Search)
- DFS (Depth First Search)

---

# 🔵 Breadth First Search (BFS)

Level by level traversal.

Uses: Queue

Time Complexity: O(V + E)
Space Complexity: O(V)

## Algorithm Steps:

1. Push starting node into queue
2. Mark visited
3. While queue not empty:
   - Pop node
   - Visit it
   - Push unvisited neighbors

## Code (JavaScript)

```js
function bfs(graph, start) {
  let visited = new Set()
  let queue = [start]
  visited.add(start)

  while (queue.length > 0) {
    let node = queue.shift()
    console.log(node)

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor)
        queue.push(neighbor)
      }
    }
  }
}
```

---

# 🔴 Depth First Search (DFS)

Go deep first, then backtrack.

Uses: Recursion or Stack

Time Complexity: O(V + E)
Space Complexity: O(V)

## Code (Recursive)

```js
function dfs(graph, node, visited = new Set()) {
  visited.add(node)
  console.log(node)

  for (let neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited)
    }
  }
}
```

---

# 5️⃣ Detect Cycle

## In Undirected Graph (Using DFS)

Track parent node.
If visited neighbor != parent → Cycle exists.

Time Complexity: O(V + E)

---

## In Directed Graph (Using Recursion Stack)

Use:

- visited array
- recursion stack array

If node is visited AND in recursion stack → Cycle

---

# 6️⃣ Topological Sort (Only for DAG)

Linear ordering of vertices.

Condition:
Graph must be Directed Acyclic Graph.

Uses:

- Course scheduling
- Dependency resolution

Method 1: DFS + Stack
Method 2: Kahn’s Algorithm (BFS + Indegree)

Time Complexity: O(V + E)

---

# 7️⃣ Shortest Path Algorithms

## 1. BFS (Unweighted Graph)

Gives shortest path in unweighted graph.

## 2. Dijkstra’s Algorithm

Used for weighted graph (no negative weights).

Data Structure Used:

- Min Heap / Priority Queue

Time Complexity: O((V + E) log V)

---

# 8️⃣ Union Find (Disjoint Set)

Used for:

- Cycle detection
- Kruskal’s Algorithm

Operations:

- Find
- Union

Optimizations:

- Path Compression
- Union by Rank

Time Complexity: Nearly O(1)

---

# 9️⃣ Number of Islands (Important Problem)

Grid-based graph problem.

Approach:

- Traverse grid
- If cell is '1' → run DFS/BFS
- Mark visited
- Count components

Time Complexity: O(n × m)

---

# 🔟 Minimum Spanning Tree (MST)

Spanning tree with minimum total weight.

Algorithms:

1. Kruskal’s Algorithm
   - Sort edges
   - Use Union-Find

2. Prim’s Algorithm
   - Use Min Heap

Time Complexity: O(E log V)

---

# 1️⃣1️⃣ Strongly Connected Components

Algorithm:

- Kosaraju’s Algorithm
- Tarjan’s Algorithm

Used in advanced graph problems.

---

# 🎯 Interview Strategy for Graph

1. Always think: BFS or DFS?
2. Is it shortest path?
3. Is it cycle detection?
4. Is it DAG?
5. Convert grid to graph if needed.

---

# 🚀 Complexity Summary

| Algorithm        | Time Complexity |
| ---------------- | --------------- |
| BFS              | O(V + E)        |
| DFS              | O(V + E)        |
| Dijkstra         | O((V+E) log V)  |
| Union Find       | ~O(1)           |
| Topological Sort | O(V + E)        |
| MST              | O(E log V)      |

---

# 🔥 Final Advice

Graph problems look scary but are pattern-based.

Master these core patterns:

- BFS
- DFS
- Cycle Detection
- Topological Sort
- Shortest Path
- Union Find

If you master these 6, you can solve 80% of graph problems in interviews.

---

🌟 End of Graph Master Notes
