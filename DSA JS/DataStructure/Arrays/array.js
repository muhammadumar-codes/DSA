const arr = [1, 2, 3, 4, 5]
let i=0;
let j=arr.length-1
while (i<=j) {
    [arr[j],arr[i]]=[arr[i],arr[j]]
    i++
    j--
    
}

console.log(arr)