// // ⭐ 3. Shadowing (inner hides outer)

// // Definition:
// // Shadowing happens when a variable inside a smaller scope has the same name as a variable in the outer scope.
// // Inside the smaller scope, the inner variable hides (shadows) the outer one.

// // ✔ Example (Correct)
// let x = 10

// {
//   let x = 20 // inner x shadows outer x
//   console.log(x) // 20
// }

// console.log(x) // 10

// // ✔ Explanation:

// // Inside the block, the inner x is used.

// // Outside, the outer x is used.

// // The outer value is NOT changed.

// ---------------------------------------------------------------------------------------------
// // ⭐ Next Topic: First-Class Citizens

// // Definition:
// // A first-class citizen is something the language treats like a VIP value.
// // It can be used anywhere with full freedom.

// // ✔ In JavaScript:

// // ➡ Functions are first-class citizens.

// // That means a function can:

// // ✔ be stored in a variable
// // ✔ be passed as an argument
// // ✔ be returned from another function
// // ✔ be placed inside arrays/objects
// // ✔ be created at runtime

// // ⭐ EXAMPLES
// // ✔ 1. Store a function in a variable

// // (This is NOT called a function statement — this is called a function expression)

// const sayHi = function () {
//   console.log('Hi')
// }

// // ✔ 2. Pass a function to another function
// function greet(fn) {
//   fn()
// }

// greet(() => console.log('Hello!'))

// // ✔ 3. Return a function from a function

// // (Your example — CORRECT)

// function makeSayHi() {
//   return () => console.log('Hi Jani')
// }

// const greet = makeSayHi() // greet holds a function
// greet() // calls the returned function

// // ➡ This is a perfect example of first-class functions.

// // ✔ 4. Put a function inside an array
// const arr = [() => console.log('A'), () => console.log('B')]

// arr[0]() // A
// arr[1]() // B

// // ✔ 5. Put a function inside an object
// const user = {
//   speak: () => console.log('Hello from object!'),
// }

// user.speak()

// // ✔ 6. Create a function at runtime
// const dynamic = function () {
//   console.log('Created at runtime!')
// }

// // ⭐ Clarifying Your Notes
// // ❌ Your line:

// // it is called the function statement

// // ✔ Correction:

// // No janiii ❤️
// // The example below is NOT a function statement.

// function makeSayHi() {
//   return () => console.log('Hi Jani')
// }

// // This IS a function statement (correct).

// // But this one:

// const greet = makeSayHi()

// // // This uses a function expression (anonymous arrow function returned).

// // ⭐ Function Declaration vs Function Expression (Super Simple)
// // ✔ Function Declaration (Statement)
// function sayHi() {
//   console.log('Hi')
// }

// ---------------------------------------------------------------------------------------------

// // ✔ Function Expression (stored in a variable)
// const sayHi = function () {
//   console.log('Hi')
// }

// // ✔ Arrow Function Expression
// const sayHi = () => console.log('Hi')

// // ⭐ Your Array Example (Correct)
// const array = [1, 2, 3]
// const result = array.map((item) => item * 2)

// // ✔ This is declarative
// // ✔ Uses a function expression
// // ✔ Shows first-class functions
// // ✔ Clean and modern JS

// // ❤️ FINAL REVIEW OF YOUR NOTES
// // ✔ Shadowing ✔ Correct
// // ✔ First-class citizen ✔ Correct
// // ✔ makeSayHi example ✔ Perfect
// // ❌ “function statement” note → needs correction
// // ✔ Your map example ✔ Correct

// // Your notes are 90% correct, and now they are 100% perfect after corrections ❤️🔥

// ---------------------------------------------------------------------------------------------
