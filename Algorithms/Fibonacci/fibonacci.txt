
Example:First solution ;


function fibonacci(n) {
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    console.log(a);
    let next = a + b;
    a = b;

    b = next;
  }
}

fibonacci(7);

Dry Run the code :



| Step | a | b  | Print |
| ---- | - | -- | ----- |
| 1    | 0 | 1  | 0     |
| 2    | 1 | 1  | 1     |
| 3    | 1 | 2  | 1     |
| 4    | 2 | 3  | 2     |
| 5    | 3 | 5  | 3     |
| 6    | 5 | 8  | 5     |
| 7    | 8 | 13 | 8     |



Example :Second Solution:



function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(6));



//Using Recursion Method


function fib(n) {
  // Base case in fib
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fib(n - 1) + fib(n - 2);
}
console.log(fib(6));

