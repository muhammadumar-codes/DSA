let rows = 5

for (let i = 1; i < rows; i++) {
  console.log(' \n')

  let asciii = 65

  for (let j = 1; j < i; j++) {
    process.stdout.write(String.fromCharCode(`  ${asciii} `))
    asciii++
  }
}
