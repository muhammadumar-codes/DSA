# 🧠 JavaScript Master Basics – Complete Interview Notes

These notes cover **JavaScript fundamentals** from basics to **interview-level concepts**. Mastering this file means your JS foundation is solid.

---

## 📦 Variables: `var`, `let`, `const`

### `var`

```js
var num = 34;
var num = 34343; // redeclare allowed
num = 100000;    // reassign allowed
```

* Function-scoped
* Hoisted (initialized as `undefined`)
* ❌ Avoid in modern JS

### `let`

```js
let first = 1000;
first = 10000;   // reassign allowed
// let first = 2000 ❌ redeclare not allowed
```

* Block-scoped
* Hoisted but in **TDZ**

### `const`

```js
const pi = 3.14;
// pi = 10 ❌
// const pi = 5 ❌
```

* Block-scoped
* Must be initialized
* Cannot reassign or redeclare

---

## 🚀 Hoisting

* `var` → hoisted & initialized as `undefined`
* `let` / `const` → hoisted but **not accessible (TDZ)**

```js
console.log(a); // undefined
var a = 10;
```

---

## 🔒 Scope Example

```js
function test() {
  if (true) {
    var x = 10;
    let y = 20;
    const z = 30;
  }
  console.log(x); // ✅
  console.log(y); // ❌ ReferenceError
  console.log(z); // ❌ ReferenceError
}
```

---

## 📊 var vs let vs const

| Feature   | var       | let   | const |
| --------- | --------- | ----- | ----- |
| Scope     | Function  | Block | Block |
| Redeclare | ✅         | ❌     | ❌     |
| Reassign  | ✅         | ✅     | ❌     |
| Hoisting  | undefined | TDZ   | TDZ   |

---

## 🧩 Primitive vs Non-Primitive Types

### Primitive

* string
* number
* boolean
* undefined
* null
* symbol
* bigint

```js
typeof 42;        // number
typeof null;      // object (JS bug)
```

### Non-Primitive

* object
* array
* function

```js
const user = { name: 'Jani' };
const arr = [1,2,3];
function greet() {}
```

---

## ❓ undefined vs null vs NaN

| Value     | Meaning                   |
| --------- | ------------------------- |
| undefined | declared but not assigned |
| null      | intentional empty value   |
| NaN       | invalid number            |

```js
NaN === NaN; // false
Number.isNaN(NaN); // true
```

---

## 🔁 Type Coercion (Implicit)

```js
'5' + 5;   // '55'
'5' - 2;   // 3
true + 1;  // 2
```

Rules:

* `+` with string → concatenation
* `- * / %` → numeric conversion
* `==` performs coercion (avoid)

---

## 🎯 Explicit Type Casting

```js
Number('123');
String(123);
Boolean(1);
+"45"; // unary plus
parseInt('08', 10);
```

---

## ❌ Falsy & Truthy Values

### Falsy (ONLY 7)

* false
* 0
* ""
* null
* undefined
* NaN

Everything else is **truthy**

---

## 🧠 Equality Pitfalls

```js
null == undefined; // true
[] == '';          // true
NaN !== NaN;       // true
Object.is(NaN, NaN); // true
```

✅ Always use `===`

---

## ➗ Math & Operators

```js
(5 + 2) * 2 + 13 / 2; // BODMAS
```

Operators:

* Arithmetic: `+ - * / % **`
* Assignment: `= += -= *= /=`
* Unary: `+value`, `-value`, `typeof`
* Logical: `&& || !`

---

## 🔄 Swapping Numbers

### Method 1 (Temp)

```js
let a=1,b=2,temp;
temp=a; a=b; b=temp;
```

### Method 2 (Destructuring)

```js
[a,b]=[b,a];
```

### Method 3 (Math)

```js
a=a+b; b=a-b; a=a-b;
```

---

## ⚡ Short-Circuiting

```js
let value = data || 'default';
let safe = obj && obj.name;
```

---

## 📐 Operator Precedence (Short)

1. ()
2. Unary
3. **
4. * / %
5. * -
6. < >
7. == ===
8. &&
9. ||
10. =

---

## 🔐 Random OTP Example

```js
let otp = Math.floor(Math.random()*1000 + 1000);
console.log(otp);
```

---

## 💬 Interview One-Liners

* JavaScript is **dynamically typed**
* `typeof null` is a known JS bug
* `NaN` is never equal to itself
* Prefer `const` → `let` → avoid `var`
* Use `===` always

---

🔥 **If you understand this file completely, you are interview-ready for JavaScript basics**
