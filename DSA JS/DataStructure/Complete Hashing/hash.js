function checkPangram(inputStr) {
  let set = new Set()
  for (let index = 0; index < inputStr.length; index++) {
    let ch = inputStr.charAt(index)
    set.add(ch)
  }

  return set.size === 26
}

console.log(checkPangram('thequickbrownfoxjumpsoverthelazydog'))
