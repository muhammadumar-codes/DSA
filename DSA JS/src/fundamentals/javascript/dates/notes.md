# 📅 JavaScript Date – Complete Notes

The **Date object** in JavaScript is used to work with **dates and times**. It allows you to create, read, manipulate, and format date & time values.

---

## 📌 Creating a Date Object

```js
const now = new Date()
console.log(now)
```

👉 Creates a Date object with **current date & time**.

---

## 🧱 Different Ways to Create Date

### 1️⃣ Current Date & Time

```js
new Date()
```

### 2️⃣ From Date String

```js
new Date('2025-01-01')
new Date('January 1, 2025 10:30:00')
```

### 3️⃣ Using Numbers (Year, Month, Day, Time)

```js
new Date(2025, 0, 1) // Jan 1, 2025
new Date(2025, 0, 1, 10) // Jan 1, 2025, 10 AM
```

⚠️ Month is **0-based**:

- January = 0
- December = 11

---

## 📤 Getting Date Values (Get Methods)

```js
const d = new Date()

d.getFullYear() // Year
d.getMonth() // Month (0-11)
d.getDate() // Day of month
d.getDay() // Day of week (0-6)
d.getHours()
d.getMinutes()
d.getSeconds()
d.getMilliseconds()
d.getTime() // Timestamp (ms since 1970)
```

---

## 📥 Setting Date Values (Set Methods)

```js
const d = new Date()

d.setFullYear(2030)
d.setMonth(5) // June
d.setDate(15)
d.setHours(10)
d.setMinutes(30)
```

---

## 🗓️ Common Date Formats

```js
const d = new Date()

d.toDateString() // Tue Sep 09 2025
d.toTimeString() // 10:30:15 GMT+0500
d.toISOString() // 2025-09-09T05:30:15.000Z
d.toLocaleDateString()
d.toLocaleTimeString()
```

---

## ⏱️ Timestamp (Important for Interviews)

```js
Date.now() // current timestamp in ms
```

Convert timestamp to date:

```js
const time = Date.now()
const d = new Date(time)
```

---

## ➗ Date Difference (Very Important)

### Example: Find Difference in Days

```js
const d1 = new Date('2025-01-01')
const d2 = new Date('2025-01-10')

const diff = d2 - d1 // milliseconds
const days = diff / (1000 * 60 * 60 * 24)

console.log(days) // 9
```

---

## ⏰ Add / Subtract Days

```js
const d = new Date()
d.setDate(d.getDate() + 7) // add 7 days
```

Subtract days:

```js
d.setDate(d.getDate() - 5)
```

---

## 🔁 Compare Dates

```js
const d1 = new Date('2025-01-01')
const d2 = new Date('2025-01-05')

console.log(d1 > d2) // false
console.log(d1 < d2) // true
```

---

## ❌ Common Mistakes

- Forgetting month is **0-based**
- Comparing dates as strings
- Not converting milliseconds to days properly

---

## 💬 Interview One-Liners

- **Date objects store time as milliseconds since Jan 1, 1970 (UTC)**
- **Month index starts from 0 in JavaScript Date**
- **Date comparison works using timestamps**

---

## ✅ Summary

- `Date` is a built-in JS object
- Used for time, scheduling, logs, timers
- Important for backend & frontend
- Date difference & formatting are commonly asked

---

🔥 **Mastering Date = Strong grip on real-world JavaScript**
