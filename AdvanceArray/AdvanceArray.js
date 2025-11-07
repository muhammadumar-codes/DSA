const myArray = [1, 2, 3, 4, 5] // Array literal
const anotherArray = new Array('apple', 'banana', 'cherry') // Using constructor
const mixedArray = [1, 'two', true, null, undefined] // Mixed types
console.log('My Array:', myArray)
console.log('Another Array:', anotherArray)

console.log('Mixed Array:', mixedArray)
// Accessing elements
console.log('First element of myArray:', myArray[0])
console.log('Second element of anotherArray:', anotherArray[1])
// Modifying elements
myArray[2] = 10
console.log('Modified myArray:', myArray)
// Array methods
myArray.push(6)
console.log('After push:', myArray)

const poppedElement = myArray.pop()
console.log('Popped element:', poppedElement)
console.log('After pop:', myArray)

anotherArray.unshift('orange')
console.log('After unshift:', anotherArray)
const shiftedElement = anotherArray.shift()
console.log('Shifted element:', shiftedElement)
console.log('After shift:', anotherArray)

const index = anotherArray.indexOf('banana')
console.log("Index of 'banana':", index)
const slicedArray = myArray.slice(1, 4)
console.log('Sliced myArray (1 to 4):', slicedArray)
const splicedArray = anotherArray.splice(1, 1, 'grape')
console.log(
  "Spliced anotherArray (removed 1 at index 1, added 'grape'):",
  anotherArray
)
console.log('Removed elements:', splicedArray)
const concatenatedArray = myArray.concat(anotherArray)
console.log('Concatenated Array:', concatenatedArray)
const joinedString = anotherArray.join(', ')
console.log('Joined anotherArray:', joinedString)
const reversedArray = myArray.reverse()
console.log('Reversed myArray:', reversedArray)
const sortedArray = anotherArray.sort()
console.log('Sorted anotherArray:', sortedArray)
const lengthOfMyArray = myArray.length
console.log('Length of myArray:', lengthOfMyArray)

// Advanced operations
const mappedArray = myArray.map((num) => num * 2)
console.log('Mapped myArray (each element * 2):', mappedArray)
const filteredArray = myArray.filter((num) => num > 2)
console.log('Filtered myArray (elements > 2):', filteredArray)
const reducedValue = myArray.reduce((acc, curr) => acc + curr, 0)
console.log('Reduced myArray (sum of elements):', reducedValue)
// Multi-dimensional array
const multiDimensionalArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
console.log('Multi-dimensional Array:', multiDimensionalArray)
console.log('Element at [1][2]:', multiDimensionalArray[1][2])
// Iterating over arrays
console.log('Iterating over myArray:')
myArray.forEach((element, index) => {
  console.log(`Index ${index}: ${element}`)
})
for (const element of anotherArray) {
  console.log('Element from anotherArray:', element)
}
for (let i = 0; i < mixedArray.length; i++) {
  console.log(`Element at index ${i} in mixedArray:`, mixedArray[i])
}
// Summary of array operations
console.log('Final myArray:', myArray)

console.log('Final anotherArray:', anotherArray)
console.log('Final mixedArray:', mixedArray)
// Advanced Array Operations in JavaScript
// This code demonstrates various advanced operations that can be performed on arrays in JavaScript.
console.log('Mapped myArray:', mappedArray)
console.log('Filtered myArray:', filteredArray)
console.log('Reduced value of myArray:', reducedValue)
console.log('Multi-dimensional Array:', multiDimensionalArray)
console.log(
  'Iterated myArray using forEach, for...of, and traditional for loop.'
)
// This code demonstrates various advanced operations that can be performed on arrays in JavaScript.
console.log('Advanced Array Operations in JavaScript')
console.log(
  'This code demonstrates various advanced operations that can be performed on arrays in JavaScript.'
)
console.log('Advanced Array Operations in JavaScript')
console.log(
  'This code demonstrates various advanced operations that can be performed on arrays in JavaScript.'
)
console.log('Advanced Array Operations in JavaScript')
console.log(
  'This code demonstrates various advanced operations that can be performed on arrays in JavaScript.'
)
console.log('Advanced Array Operations in JavaScript')
