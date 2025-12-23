let prompt = require("prompt-sync")();

let rows = Number(prompt("Enter Your rows"))

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= rows; j++) {
    if (i===j || i +j ===rows+1){
      process.stdout.write(" *")
    }else process.stdout.write(" ")
    
  }
  console.log("");
}
