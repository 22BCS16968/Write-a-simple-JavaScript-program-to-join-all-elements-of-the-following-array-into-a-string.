// 1. Join elements of an array into a string
let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join());         // "Red,Green,White,Black"
console.log(myColor.toString());     // "Red,Green,White,Black"
console.log(myColor.join('+'));      // "Red+Green+White+Black"

// 2. Find the most frequent item in an array
let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let freqMap = {};
let maxItem = arr1[0];
let maxCount = 1;

for (let item of arr1) {
  freqMap[item] = (freqMap[item] || 0) + 1;
  if (freqMap[item] > maxCount) {
    maxItem = item;
    maxCount = freqMap[item];
  }
}
console.log(`${maxItem} ( ${maxCount} times )`);  // a ( 5 times )

// 3. Truncate a string
function truncateString(str, num) {
  return str.slice(0, num);
}
console.log(truncateString("Robin Singh", 4)); // "Robi"

// 4. Capitalize each word in a string
function capitalizeWords(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(capitalizeWords('js string exercises')); // "Js String Exercises"

// 5. Filter values between two numbers
function arrBetween(low, high, arr) {
  return arr.filter(num => num > low && num < high);
}
console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));         // [5, 4, 7]
console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]));       // [8, 6]
console.log(arrBetween(7, 32, [1, 2, 3, 78]));               // []

// 6. Find index of an element in array
function findIndex(arr, value) {
  return arr.indexOf(value);
}
console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));          // 2
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));      // 1
console.log(findIndex(["a", "g", "y", "d"], "d"));                      // 3
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")); // 0
