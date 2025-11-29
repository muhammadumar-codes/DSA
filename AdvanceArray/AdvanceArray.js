// // Question: [6,1,2,3,4,5]
let arr = [1, 2, 3, 4, 5, 6]
let copy = arr.length
for (let index = arr.length - 1; index > 0; index--) {
  arr[index] = arr[index - 1]
}
arr[0] = copy
console.log(arr)
