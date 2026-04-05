You are learning how to:

Take user input from the terminal using the prompt-sync package.
Use loops (for loops) to print patterns such as stars (\*), numbers, and alphabets.
Use process.stdout.write() to print multiple items on the same line instead of using console.log() (which prints a new line automatically).
⚙️ Step-by-Step Concepts and Examples

1. Taking Input from the Terminal
   In Node.js, we cannot use prompt() directly (like in browsers).
   We use the prompt-sync package instead.

npm install prompt-sync
Example:

let prompt = require("prompt-sync")(); // Import prompt-sync
let name = prompt("Enter your name: "); // Take input
console.log("Hello " + name); 2. Printing on the Same Line
console.log() adds a newline after each print.
To print on the same line, use process.stdout.write().

Example:

process.stdout.write("Hello ");
process.stdout.write("World!");
// Output: Hello World! 3. Printing a Simple Pattern (Single Line of Stars)
Goal: Print \* symbols in one line based on user input.

let prompt = require("prompt-sync")();
let user = Number(prompt("Enter Your End Point: "));

for (let i = 1; i <= user; i++) {
process.stdout.write("\*");
}
Explanation:

The loop runs user times.
Each iteration prints \* without a newline.
Time Complexity: O(n) 4. Printing Rows and Columns (Rectangle Pattern)
Goal: Print a grid of stars (rows × columns).

let prompt = require("prompt-sync")();
let rows = Number(prompt("Enter Rows: "));
let columns = Number(prompt("Enter Columns: "));

for (let i = 1; i <= rows; i++) {
for (let j = 1; j <= columns; j++) {
process.stdout.write("\* ");
}
console.log(); // Move to next line after each row
}
Output Example (3×5):

---

---

---

Concept: Nested loops — outer loop controls rows, inner loop controls columns.
Time Complexity: O(rows × columns)

5. Printing a Right Triangle Pattern
   Goal: Print a triangle of stars aligned to the left.

let prompt = require("prompt-sync")();
let rows = Number(prompt("Enter Rows: "));

for (let i = 1; i <= rows; i++) {
for (let j = 1; j <= i; j++) {
process.stdout.write("\*");
}
console.log();
}
Output (rows = 5):

- \*\*
  ***
  ***
  ***
  Concept:

Inner loop runs i times for each row.
Time Complexity: O(n²) 6. Printing Number Triangle
Goal: Print increasing numbers in a triangle.

let prompt = require("prompt-sync")();
let rows = Number(prompt("Enter Rows: "));

for (let i = 1; i <= rows; i++) {
for (let j = 1; j <= i; j++) {
process.stdout.write(j + " ");
}
console.log();
}
Output (rows = 4):

1
1 2
1 2 3
1 2 3 4 7. Printing Alphabet Triangle
Goal: Print alphabets in increasing order.

let prompt = require("prompt-sync")();
let rows = Number(prompt("Enter Rows: "));

for (let i = 1; i <= rows; i++) {
let ascii = 65; // ASCII for 'A'
for (let j = 1; j <= i; j++) {
process.stdout.write(String.fromCharCode(ascii));
ascii++;
}
console.log();
}
Output (rows = 4):

A
x`~AB
ABC
ABCD
Concept:

String.fromCharCode(65) converts ASCII code to a character.
Time Complexity: O(n²) 8. Printing an X Pattern (Cross Pattern)
Goal: Print \* where row index equals column index or their sum equals total + 1.

let prompt = require("prompt-sync")();
let rows = Number(prompt("Enter Rows: "));

for (let i = 1; i <= rows; i++) {
for (let j = 1; j <= rows; j++) {
if (i === j || i + j === rows + 1) {
process.stdout.write("\* ");
} else {
process.stdout.write(" ");
}
}
console.log();
}
Output (rows = 5):

-       *
  - -
  -
  - -
-       *
  Concept:

Conditional logic inside nested loops.
Time Complexity: O(n²)
🧩 Key Concepts Recap
| Concept | Description | Example | |----------|--------------|----------| | prompt-sync | Takes input from terminal | let prompt=require("prompt-sync")(); | | process.stdout.write() | Prints without newline | process.stdout.write("\*"); | | Nested Loops | Used for rows and columns | for(i)...for(j)... | | ASCII Conversion | String.fromCharCode(65) → 'A' | Used in alphabet patterns | | Conditional Printing | Used for shapes like X or diamond | if (i===j) |

⚖️ Complexity Analysis
| Pattern Type | Time Complexity | Space Complexity | |---------------|----------------|------------------| | Single Line | O(n) | O(1) | | Rectangle | O(r × c) | O(1) | | Triangle (Star/Number/Alphabet) | O(n²) | O(1) | | X Pattern | O(n²) | O(1) |

📚 Study Sources
MDN Web Docs – process.stdout.write()
W3Schools – JavaScript Loops
GeeksforGeeks – Pattern Printing in JavaScript
✅ Final Answer Summary
You learned how to:

Use prompt-sync for terminal input.
Use process.stdout.write() for same-line printing.
Build various star, number, and alphabet patterns using nested loops.
Apply conditional logic to create complex shapes like the “X” pattern.
Analyze time and space complexity for each pattern.
These examples form the foundation for pattern-based logic building in JavaScript — a crucial skill for mastering loops and nested structures.
