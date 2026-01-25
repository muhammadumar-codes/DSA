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
