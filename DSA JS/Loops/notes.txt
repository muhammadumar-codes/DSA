 Loop Working:

=>First it check the starting point 
=>check the codition
=>go to body
=>for  next loop it  incremented by one then check the condition for next loops 

for (i=1; i < 10; i++) {
  console.log(i);
}
console.log(`The Falsy value is ${i}`);?//so it is printing the falsy value

-------------------------------------------------------------------------------------------------------
=> Question for Reverse Numbers

Basic Reverse loop
for (i=700; i>=100; i--) {
  console.log(i);
}

-------------------------------------------------------------------------------------------------------

=> Sum of Natural Number?


const num = Number(prompt("Enter Your Number !"));

if (isNaN(num)) {
  console.log("Invalide Number");
} else {
  if (num > 0) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    console.log(sum);
  } else {
    console.log("Sum Should be Positive");
  }
}


const num = Number(prompt("Enter Your Number ❓"));

if (isNaN(num)) {
  console.log("Invlide Value ! Please Try Enter Number !");
} else {
  if (num > 0) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    console.log(sum);
  } else {
    console.log("The Number should Be Positive and Greater Than zero");
  }
}


-------------------------------------------------------------------------------------------------------
Question => Find  Out the Factorail of Number ?

const fact = Number(prompt("Enter Your Number !"));
if (isNaN(fact)) {
  console.log("Invlide Number 🤦‍♀️");
} else {
  if (fact > 0) {
    let factorial = 1;
    for (let i = 1; i <=fact; i++) {
        factorial*=i;
    }
    console.log(factorial)
  } else {
    console.log("Number Must be positive and Greater than 0");
  }
}


-------------------------------------------------------------------------------------------------------
Question => How to find the Factors of Numbers 


const pr = Number(prompt("Enter Your Number"));

if (isNaN(pr)) {
  console.log("Invlide ");
} else {
  if (pr > 0) {
    for (let i = 1; i <= pr; i++) {
      if (pr % i === 0) {
        console.log(i);
      }
    }
  } else {
    console.log("invlide Must Positive And Greater Than  zero");
  }
}
-------------------------------------------------------------------------------------------------------
small consept to learn the Prime no =>
function isPrime(num) {
  let prime = true;
  for (let i = 3; i <= num; i++) {
    if (i % 2 === 0) {
      prime = false;
      console.log("Not Prime No", i);
    } else {
      console.log("Prime No", i);
    }
  }
}
isPrime(20);

----------------------------------------------------------

const number = Number(prompt("Enter Your Number!"));
if (isNaN(number)) {
  console.log("invalide Number !");
}
else {
    if  (number>0){
        let sum=0;
        for (let i=1;i<=number;i++){
        sum+=i;
        }
        console.log(sum);
        
    }
    else{
        console.log("Must be positive Greater than 1")
    }
}

----------------------------------------------------------

const number = Number(prompt("Enter Your Number!"));
  if (isNaN(number)) {
    console.log("invalide Number !");
  } else {
    if (number > 0) {
      let i = 1;
      let sum = 0;
      while (i <= number) {
        sum = sum + i;
        i++;
      }
      console.log(sum)
    } else {
      console.log("Must be positive Greater than 1");
    }
  }
------------------------------------------------------------------------------------

it is using the while loop when give it number it take teh remainder part from a number and it then sum it in to the sum  varibles after takeing the last by division methods we cut it

let number = Number(prompt("Enter Your Number!"));
if (isNaN(number)) {
  console.log("invalide Number !");
} else {

  if (number > 0) {
    let sum = 0;
    while (number > 0) {
      let rem = number % 10;
      sum += rem;
      number = Math.floor(number / 10);
    }
    console.log(sum);
  } else {
    console.log("Must be positive Greater than 1");
  }
}

------------------------------------------------------------------------------------

How  to reverse a number ?


let number = Number(prompt("Enter Your Number!"));
if (isNaN(number)) {
  console.log("invalide Number !");
} else {
  if (number > 0) {
    let rev = 0;
    while (number > 0) {
      let rem = number % 10;
      // this is the equation for that it reverse the given value in prompt
      rev = rev * 10 + rem;
      number = Math.floor(number / 10);
    }
    console.log(rev);
  } else {
    console.log("Must be positive Greater than 1");
  }
}

------------------------------------------------------------------------------------

=> How to Code for Strong Number 

Algorithem

START
  INPUT num
  SET temp = num
  SET sum = 0

  WHILE temp > 0 DO
      rem = temp % 10
      fact = 1
      FOR i = 1 TO rem DO
          fact = fact * i
      END FOR
      sum = sum + fact
      temp = temp / 10 (integer division)
  END WHILE

  IF sum == num THEN
      PRINT "Strong Number"
  ELSE
      PRINT "Not a Strong Number"
  END IF
STOP


          full javascript coding 



let number = Number(prompt("Enter Your Number!"));

if (isNaN(number)) {
  console.log("Invalid Number!");
} else {
  if (number > 0) {
    let sum = 0;
    let temp = number; // store original number (optional)

    while (number > 0) {
      let remainder = number % 10;
      let fact = 1; // reset factorial every time

      for (let i = 1; i <= remainder; i++) {
        fact *= i;
      }

      sum += fact;
      number = Math.floor(number / 10);
    }

    console.log("Sum of factorials of digits:", sum);
  } else {
    console.log("Must be positive and greater than 1");
  }
}

------------------------------------------------------------------------------------
let  number;
do {
number  =Number(prompt("Enter Your value!"))
  
} while (number!==0);

_---------------------------------------------------------------------------------------------------

Question how to make the Quesss NO =>

let exit;
do {
  const number = Number(Math.floor(Math.random() * 10) + 1);
  let guess;

  while (guess !== number) {
    guess = Number(prompt("Enter Your Guess Number!"));
    if (guess < 1 || isNaN(guess) || guess > 10) {
      console.log("Please Write the the correct Number !");
      continue;
    } else if (guess > number) {
      console.log("The number You Selected is too high ");
    } else if (guess < number) {
      console.log("The number is two Low");
    } else {
      console.log("Congratulation You Guess the Correct value  🎉🎉  ", guess);
    }
  }
  exit = prompt("Do You Want to Start Again (yes/No)");
} while (exit !== "No");

-------------------------------------------------------------------------------------------------
=> Nadia Tara sorri  😂 Tara Bagoo 🤦‍♀️ Program End on G


let  user;
do {
  user=  prompt('Enter Your ...')

} while (user!=="G");

-------------------------------------------------------------------------------------------------
