// FIND THE GCD USING EUCLIDEAN

// These are two points

let a = 32;
let b = 20;

// loop on the values

while (a != b) {
  if (a > b) a = a - b;
  else b = b - a;
}
console.log(`The Factor of A  is  *${a}* And B  is  *${b}*`);


-------------------------------------------------------------------------------------------

USING RECURSION METHOD FOR GCD:

function GCD(a, b) {
  // it is a  base case for  you to do it

  if (a === b) return a;

  if (a > b) return GCD(a - b, b);
  else return GCD(b - a, a);
}
console.log(GCD(32, 20));


-------------------------------------------------------------------------------------------

 
Algorithm Name: Euclidean Algorithm

Uses modulo %

Faster than subtraction method

Mostly used in interviews



function GCD(a, b) {
  if (b === 0) return a;
  return GCD(b, a % b);
}

console.log(GCD(32, 20));


-------------------------------------------------------------------------------------------



function factors(n) {
  
  // loops on give parameters

  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) console.log(i);

    if (i !== n / i) {
      console.log("Unknown", Math.floor(n / i));
    }
  }
}
factors(100);

-------------------------------------------------------------------------------------------

QUESTION : 
HOW TO FIND THE  PRIME NUMBERS ?

// now to  Make the function  for the Prime and non prime numbers

function primeNumber(n) {
  // This is The H -CASE

  if (!n) return false;
  // less tha and equal is  to 1 is not  the prime number
  if (n <= 1) return false;

  for (let i = 2; i * i <= n; i++) {
    // showing that if remainderis  equal to the zero
    if (i % 2 === 0) return false;
  }

  return true;
}
console.log(primeNumber(100));



-------------------------------------------------------------------------------------------

