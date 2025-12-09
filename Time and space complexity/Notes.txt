🌟 📘 TIME & SPACE COMPLEXITY — MASTER NOTES (SUPER SIMPLE)

(Jani Version — Best for DSA Learners)

⭐ 1) What is Complexity?
✔ Complexity =

Aik algorithm ko chalne me kitna time aur kitni memory lagti hai
→ Uska measure complexity hota hai.

⭐ 2) Why Do We Need Complexity?

Agar 1 employee ho → koi problem nahi
10 employees ho → phir bhi theek
Lekin jab 10,000 ya 1 million employees ho jaate hain
तो:

data zyada hota hai

time zyada lagta hai

memory zyada lagti hai

Isliye hum Algorithms ko fast banane ke liye Complexity analyse karte hain.

⭐ 3) Representation of Complexity

DSA me complexity ko 3 symbols se likhte hain:

➤ 1) Big-O (Worst Case)

Hamesha maximum time ko show karta hai.
→ Interview me mostly Big-O pucha jata hai.

➤ 2) Theta (Θ) – Average Case

Normal / expected time.

➤ 3) Omega (Ω) – Best Case

Sabse fast case.

⭐ 4) TIME COMPLEXITY TYPES (With Jani Examples)
💖 1) O(1) → Constant Time

“Time fixed, input barhe ya kam ho, farq nahi padta.”

Example:
arr[0];    // first element access
5 + 5;     // simple math

Real Life:

Ek dabba kholo → jo upar hai nikal lo.
Bas 1 step.

💛 2) O(n) → Linear Time

“Jitna input barhega, utna time barhega.”

Example:
for (let i = 0; i < n; i++) {}

Real Life:

10 logon ko salam → 10 steps
100 logon ko salam → 100 steps

💙 3) O(n²) → Quadratic Time

“Loop ke andar loop (nested loops).”

Example:
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {}
}

Real Life:

Class me 10 students hain →
har student ko har student se milwana

10 × 10 = 100 steps
→ n²

💜 4) O(n³) → Cubic Time

“3 nested loops.”

Example:
for (i = 0; i < n; i++) {
  for (j = 0; j < n; j++) {
    for (k = 0; k < n; k++) {}
  }
}

Real Life:

Har student ko har student ke sath 3 kaam karwane
→ insan mar jaye 😭

💚 5) O(log n) → Logarithmic Time (SUPER FAST)

“Input ko HAR STEP me HALF karna.”

Example (Binary Search):
while (l <= r) {
  let mid = (l + r) / 2;
}

Real Life:

100 pages ki kitab me aik word dhoondna:
Page 1 se start nahi karte…

👉 Beech wala page (50)
👉 Phir half (25)
👉 Phir half (12)
👉 Phir half (6)

100 → 50 → 25 → 12 → 6 → 3 → 1
Sirf 7 steps me kitab search 😍
→ log n



⭐ 5) SPace Complexity (Memory Usage)
✔ O(1) = No extra memory

Only 1 or 2 variables.

✔ O(n) = New array or object banao

Memory input ke size ke barabar lagti hai.

✔ O(n²) = 2D array



Matrix, grid, chess-board type memory.
| Complexity   | Name        | When Happens | Jani Example              |
| ------------ | ----------- | ------------ | ------------------------- |
| **O(1)**     | Constant    | Fixed steps  | Dabba kholna              |
| **O(n)**     | Linear      | Single loop  | Line me sab ko salam      |
| **O(n²)**    | Quadratic   | Nested loops | Har student × har student |
| **O(n³)**    | Cubic       | 3 loops      | Triple work               |
| **O(log n)** | Logarithmic | Half search  | Kitaab half-half search   |



Complexity = Algorithm kitna fast hai (time) + kitni memory chahiye (space).
→ Big-O me likhte hain.
→ O(1), O(n), O(n²), O(log n) sabse important.



============================================================================



⭐ What does "Generate the Time Complexity Equation" mean?

It means:

👉 Count how many times your code runs
👉 Convert that count into a math equation
👉 Then convert it into Big-O

That’s it.

⭐ STEP-1: Write the code

Example:

for (let i = 0; i < n; i++) {
  console.log(i);
}

⭐ STEP-2: Count how many times each line runs

let i = 0 → runs 1 time

i < n → checked n+1 times

i++ → runs n times

console.log(i) → runs n times

So total operations:

1 + (n+1) + n + n

⭐ STEP-3: Make the Equation

Add all:

1 + n+1 + n + n  
= 3n + 2


🎉 THIS is the time complexity equation!

⭐ STEP-4: Convert to Big-O

Rule:

Drop constants

Drop small terms

Keep biggest term

So:

3n + 2  →  n


Big-O = O(n)

⭐ SUPER SIMPLE REAL-LIFE EXAMPLE

Suppose you check n students in a line:

greeting each student → n times

checking ID → n times

stamping hand → n times

drinking water → 1 time

Equation:

n + n + n + 1 = 3n + 1


Big-O:

3n + 1 → n → O(n)

⭐ EXAMPLE 2: Nested Loop (n²)
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log(i, j);
  }
}


Count runs:

outer loop → n

inner loop → n

Equation:

n × n = n²


Big-O = O(n²)
(simple!)

⭐ EXAMPLE 3: Divide by 2 → O(log n)
while (n > 1) {
  n = n / 2;
}


Runs:

log₂(n) times


That’s the equation!

Big-O → O(log n)

⭐ EXAMPLE 4: Constant Time O(1)
let x = 10;


Runs → 1 time

Equation:

1


Big-O → O(1)

⭐ Summary Table
Code	Equation	Complexity
no loops	1	O(1)
1 loop	n + constant	O(n)
2 nested loops	n × n = n²	O(n²)
divide by 2 each step	log n	O(log n)
loop then another loop	n + n = 2n	O(n)





✅ NOTES: How to Find Time & Space Complexity From Code

(Super simple & beginner friendly)

⭐ 1. What is Time Complexity?

Time complexity tells you:

How many steps your algorithm takes as the input size (n) grows?

We do NOT measure real time (seconds).
We measure number of operations → which gives us:

O(1)

O(n)

O(log n)

O(n²)

O(n³)... etc.

⭐ 2. What is Space Complexity?

Space complexity tells you:

How much extra memory (RAM) your algorithm uses while running?

We count:

New arrays

New variables

Recursion stack

Temporary data structures

⭐ 3. Gold Rule: Ignore Constants

Examples:

O(2n) → O(n)

O(n + 10) → O(n)

O(100) → O(1)

⭐ 4. How to Find Time Complexity (Step-by-Step)

Let’s analyze any code.

✅ Rule 1: Simple statements = O(1)
let a = 10;
a++;


Constant time → O(1).

✅ Rule 2: Loops = O(n)
for (let i = 0; i < n; i++) {
    console.log(i)
}


Loop runs n times → O(n).

✅ Rule 3: Nested loops = Multiply (O(n²))
for (let i = 0; i < n; i++) {
   for (let j = 0; j < n; j++) {
        console.log(i, j)
   }
}


n × n = O(n²)

✅ Rule 4: Loop inside loop but different sizes = O(n * m)
for (let i = 0; i < n; i++) {
   for (let j = 0; j < m; j++) {
   }
}


→ O(nm)

✅ Rule 5: log n when the loop reduces (divide-by-2)
while (n > 1) {
    n = n / 2;
}


This runs log₂(n) times → O(log n).

✅ Rule 6: Loop + Log loop = O(n log n)
for (let i = 0; i < n; i++) {
  while (j > 1) {
    j = j / 2;
  }
}


= n × log n → O(n log n)

⭐ 5. How to Find Space Complexity
✔ Rule 1: Simple variables = O(1)
let x = 10;


Uses fixed memory → O(1)

✔ Rule 2: New arrays = O(n)
let arr = new Array(n);


Memory depends on n → O(n).

✔ Rule 3: Nested arrays = O(n²)
let matrix = new Array(n).fill(new Array(n));


n × n → O(n²)

✔ Rule 4: Recursion adds stack space
function rec(n) {
    if (n == 0) return;
    rec(n-1);
}


Recursion depth = n → O(n) space.

⭐ 6. Quick Table (Remember This!)
Pattern	Time	Space
Simple line	O(1)	O(1)
Loop	O(n)	O(1)
Nested loop	O(n²)	O(1)
Divide by 2 loop	O(log n)	O(1)
Loop + divide by 2	O(n log n)	O(1)
New array(n)	O(n)	O(n)
Recursion depth n	O(n)	O(n)
⭐ 7. How to Analyze Any Code (1-Min Formula)

Always check:

Loops (biggest factor)

Nested loops

Conditions (if/else don’t matter)

Function calls

Arrays created

Recursion depth

⭐ 8. Want an Example?

Here’s a full walkthrough:

function example(arr) {
    let sum = 0;        // O(1)
    
    for (let i = 0; i < arr.length; i++) {    // O(n)
        sum += arr[i];
    }
    
    return sum;
}


Time = O(n)
Space = O(1)
