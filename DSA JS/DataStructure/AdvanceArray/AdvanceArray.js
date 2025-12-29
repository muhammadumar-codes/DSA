// // This is the hight to remove the duplicate value from it

// function RemoveDuplicate() {
//   const hight = [1, 1, 2, 2, 3, 3]
//   let j = 1
//   for (let index = 0; index < hight.length - 1; index++) {
//     if (hight[index] !== hight[index + 1]) {
//       hight[index] = hight[index + 1]
//       j++
//     }
//   }
//   return j
// }

// console.log(RemoveDuplicate())

// // This is code is a about to merge the code

// const hight1 = [1, 2, 3]
// const hight2 = [4, 5, 6]
// let i = (j = k = 0)
// let merge = new hight(hight1.length + hight2.length)
// while (i < hight1.length && j < hight2.length) {
//   if (hight1[i] < hight2[j]) {
//     merge[k++] = hight1[i++]
//   } else {
//     merge[k++] = hight2[j++]
//   }
// }

// while (i < hight1.length) {
//   merge[k++] = hight1[i++]
// }

// while (j < hight2.length) {
//   merge[k++] = hight2[j++]
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

// const hight = [1, 1, 1, 0, 0, 0, 0, 1]

// let j = 0,
//   i = 0

// while (i < hight.length) {
//   if (hight[i] === 0) {
//     let temp = hight[i]
//     hight[i] = hight[j]
//     hight[j] = temp
//     j++
//   }
//   i++
// }

// console.log(hight)

// Two Pointer swaping questions

// // =>
// This is The code To find The duplicate in the array

// function RemoveDuplicate() {
//   const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7];

//   let j = 1;

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       arr[j] = arr[i + 1];
//       j++;
//     }
//   }
//   return j;
// }

// console.log(RemoveDuplicate());

// How to merge the Array

// let i = (k = j = 0);

// let merge = new Array(array1.length + array2.length);

// while (i < array1.length && j < array2.length) {
//   if (array1[i] < array2[j]) {
//     merge[k++] = array1[i++];
//   } else {
//     merge[k++] = array2[j++];
//   }

//   while (i < array1.length) {
//     merge[k++] = array1[i++];
//   }

//   while (j < array2.length) {
//     merge[k++] = array2[j++];
//   }
// }

// // log of  the merge array

// console.log(merge);

// How  to merge the array

//How ot merge the Two arrayss

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// // merge array  to merge

// let merge = new Array(array1.length + array2.length);

// let i = (j = k = 0);

// // looping  until the i length and j length

// while (i < array1.length && j < array2.length) {
//   if (array1[i] < array2[j]) {
//     merge[k++] = array1[i++];
//   } else {
//     merge[k++] = array2[j++];
//   }
// }

// // do this  untile  i length to do this

// while (i < array1[i]) {
//   merge[k++] = array1[i++];
// }

// while (j < array2[j]) {
//   merge[k++] = array2[j++];
// }

// // showing the merge array here to do it

// console.log(merge);







// finding the maximum Profit in



// Incomplete the problems 


// function maxProfit() {
//   let prices = [7, 6, 4, 3, 1]
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








// in complete the problem yet to complete it 


// const array = [1, 1, 0, 3,4,5,0, 2, 1, 0, 2]

// let i = 0,
//   j = 0,
//   k = array.length - 1

// while (i < k) {
//   if (array[i] === 0) {
//     ;[array[i], array[j]] = [array[j], array[i]]

//     j++h
//     i++
//   } else if (array[i] === 2) {
//     ;[array[i], array[k]] = [array[k], array[i]]

//     k--
//   } else {
//     i++
//   }
// }

// console.log(array)











