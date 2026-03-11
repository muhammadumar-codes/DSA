What is a String?
A string is a sequence of characters (letters, numbers, symbols, or spaces) stored inside quotes. In JavaScript, strings are primitive data types and are immutable (cannot be changed in-place after creation). Any "modification" creates a new string.

Types of Quotes
Single Quotes: 'Umar' – Ideal for simple strings.
Double Quotes: "Janii" – Also for simple strings; useful when including single quotes inside.
Template Literals (Backticks): `Hello ${a}` – Allows interpolation (embedding variables/expressions) and multi-line strings without escape characters.
js

````js
let a = 'Umar';        // Single quotes
let b = "Janii";       // Double quotes
let c = `Hello ${a}`;  // Template literal (interpolation)
console.log(c);        // Output: Hello Umar
Key Point: Strings are immutable. Operations like concatenation or slicing return new strings.

String Indexing
Strings use zero-based indexing, meaning the first character is at index 0. You can access individual characters using bracket notation (str[index]).

js

```js
const str = 'umar';
console.log(str[0]);  // 'u'
console.log(str[1]);  // 'm'
console.log(str[3]);  // 'r'
console.log(str[4]);  // undefined (out of bounds)
Note: Negative indexing (e.g., str[-1]) is not supported natively; use slice() for that.

Length of String
The length property returns the number of characters in the string.

js

```js
const str = 'umar';
console.log(str.length);  // 4
Edge Case: Empty string '' has length 0.

Traversing / Looping a String
Strings can be looped like arrays. Use for...of for simplicity or traditional for for index-based access.

for...of Loop (Modern, Readable)
js

```js
for (const ch of 'Umar') {
  console.log(ch);  // Outputs: U, m, a, r (one per line)
}
Traditional for Loop (Index-Based)
js

```js
const s = 'Hello';
for (let i = 0; i < s.length; i++) {
  console.log(s[i]);  // Outputs: H, e, l, l, o
}
Time Complexity: O(n) for both (linear traversal).

Tip: Prefer for...of for character iteration; use traditional for when you need indices.

Escape Characters
Escape sequences allow special characters in strings. They start with a backslash (\).

Escape Sequence

Meaning

Example Output

\'

Single Quote

'It\'s' → It's

\"

Double Quote

"He said \"Hi\"" → He said "Hi"

\\

Backslash

'Path\\to\\file' → Path\to\file

\n

New Line

'Hello\nWorld' → Hello (newline) World

\t

Tab

'Name\tAge' → Name Age

js

```js
console.log('Hello\nWorld');  // Outputs on two lines
console.log('Tab:\tHere');    // Outputs with tab space
Use Case: Essential for formatting output or handling user input with special chars.

Important String Methods (Core DSA)
These are built-in methods for manipulation. Remember, they return new strings due to immutability.

charAt(index)
Returns the character at a specific index (safer than bracket notation for out-of-bounds).

js

```js
'Janii'.charAt(2);  // 'n'
'Janii'.charAt(10); // '' (empty string, no error)
toUpperCase() / toLowerCase()
Converts case.

js

```js
'hello'.toUpperCase();  // 'HELLO'
'WORLD'.toLowerCase();  // 'world'
Interview Note: Avoid in pure DSA problems; use ASCII for custom logic.

Searching in String
Methods to find substrings or characters.

indexOf(substring, startIndex?)
Returns the first index of the substring (or -1 if not found). Optional start index.

js

```js
'Umar Khan'.indexOf('Khan');     // 5
'Umar Khan'.indexOf('Khan', 6);  // -1 (starts searching from index 6)
lastIndexOf(substring, startIndex?)
Returns the last index of the substring.

js

```js
'hello hello'.lastIndexOf('hello');  // 6
includes(substring)
Checks if the substring exists (returns boolean).

js

```js
'email@gmail.com'.includes('@');  // true
'hello'.includes('x');            // false
startsWith(substring) / endsWith(substring)
Checks prefix/suffix.

js

```js
'Hello World'.startsWith('Hello');  // true
'Hello World'.endsWith('World');    // true
Time Complexity: O(n) for all (worst-case scan).

Search & Match (Interview Use)
For regex-based searching (common in advanced problems).

search(regex)
Returns the index of the first match (or -1).

js

```js
'I love JS'.search('love');  // 2
'I love JS'.search(/love/i); // 2 (case-insensitive with regex)
match(regex)
Returns an array of matches (or null).

js

```js
'Hi Hi'.match(/Hi/g);  // ['Hi', 'Hi'] (global flag for all matches)
'Hi Hi'.match(/Hi/);   // ['Hi'] (first match only)
Tip: Regex is powerful for patterns but can be slow; use for interviews requiring pattern matching.

Slice (Very Important)
Extracts a substring from start to end (exclusive). Supports negative indices (counts from end).

js

```js
const str = 'JavaScript';
str.slice(0, 4);   // 'Java' (indices 0-3)
str.slice(4);      // 'Script' (from 4 to end)
str.slice(-6);     // 'Script' (last 6 chars)
str.slice(2, -2);  // 'vaScri' (from 2 to 2nd last)
Time Complexity: O(n) (creates new string).

DSA Use: Core for substring problems; efficient for extraction.

concat()
Joins strings (alternative to + operator).

js

```js
'Hello'.concat(' ', 'World');  // 'Hello World'
'Hi'.concat(' there', '!');    // 'Hi there!'
Time Complexity: O(n + m) where n and m are string lengths.

charCodeAt() & fromCharCode()
ASCII manipulation (crucial for hashing, encryption, and frequency problems).

charCodeAt(index): Returns ASCII code of char at index.
String.fromCharCode(code): Returns char from ASCII code.
js

```js
'A'.charCodeAt(0);          // 65 (ASCII for 'A')
String.fromCharCode(65);    // 'A'
'abc'.charCodeAt(1);        // 98 ('b')
String.fromCharCode(97, 98, 99);  // 'abc' (multiple codes)
Ranges: A-Z: 65-90, a-z: 97-122, 0-9: 48-57.

DSA Use: Frequency counts, case toggles, cipher problems.

split() → String to Array
Splits string into an array based on a separator.

js

```js
'I love JS'.split(' ');     // ['I', 'love', 'JS']
'hello-world'.split('-');   // ['hello', 'world']
'abc'.split('');            // ['a', 'b', 'c'] (empty separator splits chars)
'a,b,c'.split(',');         // ['a', 'b', 'c']
Time Complexity: O(n).

DSA Use: Convert to array for sorting, reversing, or further processing.

replace(searchValue, replaceValue)
Replaces the first occurrence of a substring (or regex).

js

```js
'Hello World'.replace('World', 'JS');  // 'Hello JS'
'foo foo'.replace('foo', 'bar');       // 'bar foo' (only first)
'foo foo'.replace(/foo/g, 'bar');      // 'bar bar' (global with regex)
Time Complexity: O(n).

Note: For all occurrences, use regex with global flag.

Reverse a String (Classic DSA)
Reverses the string by building a new one.

js

```js
function reverseString(s) {
  let res = '';
  for (let i = s.length - 1; i >= 0; i--) {
    res += s[i];
  }
  return res;
}

console.log(reverseString('hello'));  // 'olleh'
Time: O(n) | Space: O(n) (new string).

Alternative (Cheat): 'hello'.split('').reverse().join('') – but avoid in interviews for manual practice.

Palindrome Check (Two Pointer – Google Favorite)
Checks if a string reads the same forwards and backwards using two pointers.

js

```js
function isPalindrome(s) {
  let i = 0, j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }
  return true;
}

console.log(isPalindrome('racecar'));  // true
console.log(isPalindrome('hello'));    // false
Time: O(n) | Space: O(1).

Asked in: Google, Amazon, Meta. Handles case-sensitive checks; extend for case-insensitive by converting to lower.

String Immutability (IMPORTANT CONCEPT)
Strings cannot be mutated in-place. Attempts to change fail silently.

js

```js
let s = 'abc';
s[0] = 'z';          // No effect
console.log(s);      // 'abc' (unchanged)
s = s + 'd';         // Creates new string
console.log(s);      // 'abcd'
Why?: JavaScript treats strings as primitives. Always assign to a new variable or use methods that return new strings.

Toggle Character Case & Character Frequency (Google-Level DSA)
Problem 1: Toggle Character Case (Upper ↔ Lower)
Convert uppercase to lowercase and vice versa.

Example: Input: "JaNi" → Output: "jAnI"

Algorithm:

Traverse each char.
Use ASCII: Upper (65-90) → add 32; Lower (97-122) → subtract 32.
Handle non-letters unchanged.
js

```js

function toggleString(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let ch = str.charCodeAt(i);
    if (ch >= 65 && ch <= 90) {
      result += String.fromCharCode(ch + 32);
    } else if (ch >= 97 && ch <= 122) {
      result += String.fromCharCode(ch - 32);
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(toggleString('JaNi'));  // 'jAnI'
Time: O(n) | Space: O(n).

Interview Tip: Avoid toUpperCase(); ASCII shows fundamentals.

Problem 2: Character Frequency Counter
Count occurrences of each character.

Example: Input: "google" → Output: g:2, o:2, l:1, e:1

Algorithm:

Use fixed-size array (128 for ASCII) or object.
Increment counts.
Print non-zero.
js

```js
function charCounter(str) {
  const freq = new Array(128).fill(0);
  for (let i = 0; i < str.length; i++) {
    freq[str.charCodeAt(i)]++;
  }
  for (let i = 0; i < freq.length; i++) {
    if (freq[i] > 0) {
      console.log(`${String.fromCharCode(i)} → ${freq[i]}`);
    }
  }
}

charCounter('google');  // g → 2, o → 2, l → 1, e → 1
Time: O(n) | Space: O(1) (fixed array).

Alternative (Object-Based):

js


function frequencyCoun(string) {
  let counter = {}

  for (let i = 0; i < string.length; i++) {
    if (counter[string[i]]) {
      counter[string[i]] += 1
    } else {
      counter[string[i]] = 1
    }
  }

  return counter
}

console.log(frequencyCoun('google'))

```js
function frequencyCount(str) {
  let freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;  // {g:2, o:2, l:1, e:1}
}
Problem 3: Anagram Check (Using Frequency)
Check if two strings are anagrams (same chars, same counts).

js

```js
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  let count = {};
  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }
  for (let char of t) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
}



## Longest Substring Without Repeating

function lengthOfLongestSubstring(s) {

  let maxLength = 0
  let set = new Set()
  let left = 0

  for (let right = 0; right < s.length; right++) {

    while (set.has(s[right])) {
      set.delete(s[left])
      left++
    }

    set.add(s[right])

    maxLength = Math.max(maxLength, right - left + 1)
  }

  return maxLength
}

console.log(lengthOfLongestSubstring("hellhellhell"))




## String Matching


var strStr = function (haystack, needle) {

    for (let i = 0; i <= haystack.length - needle.length; i++) {

        let j = 0

        while (j < needle.length && haystack[i + j] === needle[j]) {
            j++
        }

        if (j === needle.length) {
            return i
        }
    }

    return -1
};



console.log(isAnagram('listen', 'silent'));  // true
Time: O(n) | Space: O(1) (fixed alphabet).

Common DSA String Problems
Reverse String (Manual loop or built-ins).
Palindrome Check (Two Pointers).
Anagram Check (Frequency Map).
Frequency Count (Array or Object).
Longest Substring Without Repeating Characters (Sliding Window).
Valid Parentheses (Stack).
Remove Duplicates (Set or Frequency).
String Compression (Run-Length Encoding, e.g., "aaabb" → "a3b2").
Group Anagrams (Hash Map).
Longest Palindromic Substring (Expand Around Center).
Practice: LeetCode #5, #125, #242, #3, #20.







New string

Interview Tip (VERY IMPORTANT)
💡 Strings behave like arrays but are immutable. Always create new strings for "modifications." Think in terms of Two Pointers (palindromes), Frequency Maps (anagrams/counts), or Sliding Window (substrings). Master ASCII for custom logic. Edge cases: empty strings, mixed case, special chars. Practice on LeetCode for speed.

Additional Code Examples
Anagram Check
js

```js
function isAnagram(s, t) {
  if (s.length !== t.length) return false
  const freq = {}
  for (let c of s) freq[c] = (freq[c] || 0) + 1
  for (let c of t) {
    if (!freq[c]) return false
    freq[c]--
  }
  return true
}
Length of Longest Substring Without Repeating Characters


```js
function lengthOfLongestSubstring(s) {
  let set = new Set()
  let maxLen = 0
  let start = 0

  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[start])
      start++
    }

    set.add(s[i])
    maxLen = Math.max(maxLen, i - start + 1)
  }

  return maxLen
}
console.log(lengthOfLongestSubstring('abcabcabcabc'))
````

```js
function str(text, pattern) {
  for (let i = 0; i < text.length - pattern.length; i++) {
    if (text.substring(i, i + pattern.length) === pattern) {
      return i
    }
  }
  return -1
}

console.log(str('hellow', 'll'))
```

<!-- important  problem -->

```js
function isValid(s) {
  let stack = []
  let map = {
    ')': '(',
    '}': '{',
    ']': '[',
  }

  for (let char of s) {
    if (char in map) {
      if (stack.pop() !== map[char]) {
        return false
      }
    } else {
      stack.push(char)
    }
  }

  return stack.length === 0
}
```
