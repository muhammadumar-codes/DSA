
//DssCount Optimize coding 

const price = Number(prompt("Enter Your price "));
let discount=0;
if (price >= 500 && price <= 1500) {
  discount = 10;
} else if (price >= 1501 && price <= 4000) {
  discount = 15;
}
console.log((discount = (discount * price) / 100));



------------------------------------------------------------------------
second Tricky Question To Solve:



let unit = +prompt("Enter Your Units"); //700
let amount = 0;
if (amount > 400) {
  amount += (unit - 400) * 13;
  unit = 400;
}

if (amount > 200 && amount <= 400) {
  amount += (unit - 200) * 8;
  unit = 200;
}
if (amount > 100 && amount <= 200) {//600
  amount += (unit - 100) * 6;
  unit = 100;
}
amount += unit * 4;
console.log(amount);



------------------------------------------------------------------------
//Checking the Notes system for while entring the amounts 
// This code is for checking the note which is greater than 500  so it  calculate the  show the note it can be make it here


let  Amount = parseInt(prompt("Enter Your Amount"));

if (Amount >= 5000) {
  console.log("5000 note: ", Math.floor(Amount / 5000));
  Amount = Amount % 5000;
}
if (Amount >= 1000) {
  console.log("1000 note :", Math.floor(Amount / 1000));
  Amount = Amount % 1000;
}

if (Amount >= 500) {
  console.log("500 note :", Math.floor(Amount / 500));
  Amount = Amount % 500;
}
if (Amount >= 100) {
  console.log("100 note :", Math.floor(Amount / 100));
  Amount = Amount % 100;
}

if (Amount >= 50) {
  console.log("50 note :", Math.floor(Amount / 50));
  Amount = Amount % 50;
}

if (Amount >= 20) {
  console.log("20 note :", Math.floor(Amount / 20));
  Amount = Amount % 20;
}

if (Amount >= 10) {
  console.log("50 note :", Math.floor(Amount / 10));
  Amount = Amount % 10;
}

if (Amount >= 5) {
  console.log("5 note :", Math.floor(Amount / 5));
  Amount = Amount % 5;
}

if (Amount === 1) {
  console.log(`"1 note :",${Amount}`)
  
}



------------------------------------------------------------------------
=> Ternary Operators Nested 

const age =parseInt(prompt("Enter Your Age"))   
const  result=age<=18?"Under Eighteen": age<=30?" Under Thirty":"You Are overAged";
console.log(result);

------------------------------------------------------------------------
=> we have the switch and if condition => here when we have very complex   problem so we use if like if check logical comparsion ,



=> Nested For operator that is  Zero  Positive and Check the Negative
const value=parseInt(prompt('Enter Value !')) 
const  result=value >0 ? "Positive" : value <0 ? "Negative": "Zero"
console.log(result);

------------------------------------------------------------------------
const user = +prompt("Enter Your Age");
switch (user) {
  case 10:
  console.log("Your Age is 10")
  break;
  case 20:
    console.log("Your age is 20");
    break;
  case 30:
    console.log("Your age is 30");
    break;

  default:
    console.log("Invlide");
}



=>Switch With Multiple Condition 


const user = +prompt("Enter Your Age");
switch (user) {
  case 10:
  case 20:
  case 30:
    console.log("Your age is 30");
    break;
case 50:
case 60:
case 70:

console.log('Above than 70')
break;


  default:
    console.log("Invlide");
}



------------------------------------------------------------------------

let value = 0.2 + 0.3 +0.1;

switch (value) {
  case 0.4:
    console.log("good Morning");
    break;

  case 0.5:
    console.log("Good aferNoon");
    break;

  case 0.6:
    console.log("Good Night");
    break;

  default:
    console.log("Sorry");

    break;
}





=>   Short Circuit code 

USING AND 
console.log("True" && "True")  //it will return the True
console.log("" && "True")  //it will return the Empty String
console.log("True" && "")  //it will return the Empty String


USING OR
console.log("FIRST" || "SECOUND")  //it will return the FIRST because it check  for if one be true
console.log("" || "SECOUND")  //it will return the SECOUND because it  will cekc or foirst conditon  if it true that will got to next con diton 
console.log("FIRST" || "")  //it will return the FIRST because the first conditon is true







const age = Number(prompt("Enter Your age"));
if (isNaN(age) || !age) {
  console.log("Please Put the correct value");
} else {
  if (age <= 14) {
    console.log("under 18");
  } else if (age >= 14 && age <= 30) {
    console.log("Your are adult");
  } else {
    console.log("Your are Old");
  }
}


--------------------------------------------------------------------

if ("0") console.log("truthy"); // "0" is a non-empty string → truthy
if (0) console.log("won’t run");

Condition is coerced to Boolean using JS truthy/falsy rules.

Falsy values: false, 0, '', null, undefined, NaN.

Everything else → truthy.

Example:

---------------------------------------------
The fall though in Condition using switch  it happeded without using the break


let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("Apple!");
  case "banana":
    console.log("Banana!");
  default:
    console.log("Other fruit!");
}
// Output:
// Apple!
// Banana!
// Other fruit!


---------------------------------------------

using Ternary operators


const age = Number(prompt("Enter Your Age"));

age <= 14
  ? console.log("You are Under 18")
  : age >= 15 && age <= 30
  ? console.log("Your are Tenagor")
  : console.log("You are old");




---------------------------------------------
You can also use teh short circuit for it
&& || 

