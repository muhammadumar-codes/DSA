Question :
Remove the duplicate if having in element in the loop ones time first of all remove the elements
if not the element is presetn in the set add it

```js
const array = [1, 2, 3, 4, 4, 3, 3]

const set = new Set()

for (let index = 0; index < array.length; index++) {
  if (set.has(array[index])) {
    set.delete(array[index])
  } else {
    set.add(array[index])
  }
}

console.log(set)
```

Secound methods to remove the duplicate from The array using the set

```js
const array = [1, 2, 3, 4, 4, 3, 3]

const set = new Set(array)

console.log(set)
```

Here to check The pangram of

```js
function checkPangram(inputStr) {
  let set = new Set()

  for (let index = 0; index < inputStr.length; index++) {
    let ch = inputStr.charAt(index)
    set.add(ch)
  }

  return set.size === 26
}

console.log(checkPangram('thequickbrownfoxjumpsoverthelazydog'))
```

checking The frequence of each elements

```js
const arr = [1, 2, 3, 4, 5, 6, 6, 3, 2]

let obj = {}

for (let i = 0; i < arr.length; i++) {
  let element = arr[i]

  if (element in obj) {
    obj[element] += 1
  } else {
    obj[element] = 1
  }
}

console.log(obj)
```

```js
const arr = [1, 2, 3, 4, 5, 6, 6, 3, 2]
const resultCounter = arr.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1
  return acc
}, {})

console.log(resultCounter)
```

```js Solve The problem which is The sort the people on leedcode
/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  let map = new Map()
  for (let i = 0; i < names.length; i++) {
    map.set(heights[i], names[i])
  }
  heights.sort((a, b) => b - a)
  for (let i = 0; i < heights.length; i++) {
    names[i] = map.get(heights[i])
  }

  return names
}
```

```js
Next to solve the problem that is the
Two sum algorithem
```

```js
Insetersection of the arrasy on leedcode to solvee it

Subaray sum equal sum  equal to k



var subarraySum = function(nums, k) {
  let map = new Map()
  map.set(0, 1)   // very important
  let sum = 0
  let count = 0

  for (let num of nums) {
    sum += num

    if (map.has(sum - k)) {
      count += map.get(sum - k)
    }

    map.set(sum, (map.get(sum) || 0) + 1)
  }

  return count
}

```

```js
problem
next problem to solve it
longest subaray



problem
longest consective elements sequn.ce

```
