# 🌳 Tree Fundamentals (Core Structural Terminology)

> These are foundational concepts used in Data Structures, Databases, File Systems, Compilers, and Distributed Systems.

---

# 1️⃣ Basic Tree Example (Reference Diagram)

We will use this tree for understanding all terms:

                A
              /   \
             B     C
            / \     \
           D   E     F
              /
             G

---

# 2️⃣ Parent

## 📌 Definition

A **parent** is a node that has one or more children.

If there is an edge from node `u` to node `v`,
then:

- `u` = Parent
- `v` = Child

## 📌 Examples (From Diagram)

- A is parent of B and C
- B is parent of D and E
- E is parent of G

## 📌 Formal Definition

If `(u → v)` is an edge, then `u` is parent of `v`.

## 📌 Properties

- Every node except root has exactly ONE parent.
- Root has NO parent.

---

# 3️⃣ Child

## 📌 Definition

A **child** is a node directly connected below another node.

## 📌 Examples

- B and C are children of A
- D and E are children of B
- G is child of E

## 📌 Types

- Left Child
- Right Child (in Binary Trees)

---

# 4️⃣ Ancestor

## 📌 Definition

An **ancestor** of a node is any node on the path from root to that node.

Includes:

- Parent
- Grandparent
- Root

## 📌 Example (Node G)

Path from Root → G:
A → B → E → G

Ancestors of G:

- A
- B
- E

## 📌 Important

Every node is NOT considered its own ancestor (in most definitions).

## 📌 Time Complexity Insight

Finding ancestors requires:

- O(h) where h = height of tree

---

# 5️⃣ Subtree

## 📌 Definition

A **subtree** is a tree formed by a node and all its descendants.

Every node can be considered root of its own subtree.

## 📌 Example

Subtree rooted at B:

            B
           / \
          D   E
             /
            G

Subtree rooted at E:

            E
           /
          G

## 📌 Important Property

Total number of subtrees in a tree = number of nodes.

---

# 6️⃣ Depth

## 📌 Definition

Depth of a node = number of edges from root to that node.

Formula:
Depth(node) = Distance from root

## 📌 Example

Node A:
Depth = 0

Node B:
Depth = 1

Node G:
Depth = 3

## 📌 Formula Insight

If root depth = 0:
Depth = Level - 1

---

# 7️⃣ Level

## 📌 Definition

Level of a node = number of nodes from root to that node (including root).

Alternative Definition:
Level = Depth + 1

## 📌 Example

Node A:
Level = 1

Node B:
Level = 2

Node G:
Level = 4

---

# 8️⃣ Depth vs Level (Interview Difference)

| Concept | Definition                | Root Value |
| ------- | ------------------------- | ---------- |
| Depth   | Number of edges from root | 0          |
| Level   | Number of nodes from root | 1          |

Relation:
Level = Depth + 1

---

# 9️⃣ Visual Depth & Level Table

| Node | Depth | Level | Parent |
| ---- | ----- | ----- | ------ |
| A    | 0     | 1     | NULL   |
| B    | 1     | 2     | A      |
| C    | 1     | 2     | A      |
| D    | 2     | 3     | B      |
| E    | 2     | 3     | B      |
| F    | 2     | 3     | C      |
| G    | 3     | 4     | E      |

---

# 🔟 Interview-Level Observations

1. Height of Tree = Max Depth
2. Nodes at same depth are on same level.
3. Number of ancestors of a node = Depth of node.
4. Every node defines a subtree.
5. Root has:
   - No parent
   - Depth = 0
   - Level = 1

---
