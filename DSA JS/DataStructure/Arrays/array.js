const fruits = ['apple', 'banana', 'apple', 'orange', 'banana']
const count = fruits.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1
  return acc
}, {})

// This will output the correct count object: { apple: 2, banana: 2, orange: 1 }
console.log(count) 
