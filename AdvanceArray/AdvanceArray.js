// // This is the array to remove the duplicate value from it

// function RemoveDuplicate() {
//   const array = [1, 1, 2, 2, 3, 3]
//   let j = 1
//   for (let index = 0; index < array.length - 1; index++) {
//     if (array[index] !== array[index + 1]) {
//       array[index] = array[index + 1]
//       j++
//     }
//   }
//   return j
// }

// console.log(RemoveDuplicate())

// // This is code is a about to merge the code

// const array1 = [1, 2, 3]
// const array2 = [4, 5, 6]
// let i = (j = k = 0)
// let merge = new Array(array1.length + array2.length)
// while (i < array1.length && j < array2.length) {
//   if (array1[i] < array2[j]) {
//     merge[k++] = array1[i++]
//   } else {
//     merge[k++] = array2[j++]
//   }
// }

// while (i < array1.length) {
//   merge[k++] = array1[i++]
// }

// while (j < array2.length) {
//   merge[k++] = array2[j++]
// }

// console.log(merge)

// function maxProfit() {
//   let prices = [7, 1, 6, 4, 3, 1]
//   let max = 0 // Maximum profit
//   let min = prices[0] // Minimum price so far

//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < min) min = prices[i] // Update minimum price

//     let profit = prices[i] - min // Current profit

//     max = Math.max(max, profit) // Update max profit if bigger
//   }

//   return max
// }

// console.log(maxProfit()) // You must ADD ()

// here we want to checkk the madimujm profit  int this code to know it

// function maxProfit() {
//   const arr = [1, 2, 3, 4]
//   let min = arr[0]
//   let maxValue = 0

//   // Loop on the arr to solve it

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) min = arr[i]
//     let profit = arr[i] - min

//     maxValue = Math.max(maxValue, profit)
//   }

//   return maxValue
// }
// console.log(maxProfit())

// FIRST  OF ALLL WE WANT TO SHIFT ALL TEH, ZERO ELEMENT TO TEH LEFT SIDE

// const array = [1, 1, 1, 0, 0, 0, 0, 1]

// let j = 0,
//   i = 0

// while (i < array.length) {
//   if (array[i] === 0) {
//     let temp = array[i]
//     array[i] = array[j]
//     array[j] = temp
//     j++
//   }
//   i++
// }

// console.log(array)

// Two Pointer swaping questions

// // =>
