// 1. Create a function that calculates the sum of two given numbers.
// Input: 3, 5
// Output: 8

function sum(x, y) {
  return x + y;
}

// console.log(sum(5, 6));

// 2. Write a function that checks if a number is prime (a number that can only
//     be divided by 1 and itself without any remainder).
//     Input: 7
//     Output: true

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == +0) {
      return false;
    }
  }

  return true;
}

// console.log(isPrime(3));

// 3. Write a function to reverse a given string (using built in method).
// Input: "hello"
// Output: “olleh"

function reverseString(str) {
  return str.split("").reverse().join("");
}

// console.log(reverseString("hello"));

// 4. Write a function to find the largest number in an array.
// Input: [1, 3, 7, 2, 4]
// Output: 7

function maxNum(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}
// console.log(maxNum([1, 3, 7, 2, 4]));

// 5. Write a function that filters an array and returns only the even numbers.
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

function evenNum(arr) {
  function calc(ele) {
    if (ele % 2 === 0) {
      return ele;
    }
  }

  let evens = arr.filter(calc);
  return evens;
}

// console.log(evenNum([1, 2, 3, 4, 5, 6]));

// 6. Implement a function to reverse a string without using the built-in reverse()
// method.
// Input: "route"
// Output: “etuor"

function reverseStrAltr(str) {
  let strArr = str.split("");
  let res = [strArr[strArr.length - 1]];
  for (let i = strArr.length - 2; i >= 0; i--) {
    res.push(strArr[i]);
  }
  return res;
}

// console.log(reverseStrAltr("hello"));

// 7. Write a function to calculate the average value of all numbers in an array.
// Input: [1, 2, 3, 4, 5]
// Output: 3

function avg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// console.log(avg([1, 2, 3, 4, 5]));

// 8. Write a function that determines whether a given day number (1-7)
// represents a weekday or weekend.
// Input: 5
// Output: "Weekday"
// Input: 7
// Output: “Weekend"

function weakend(num) {
  if (num == 7) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}
// console.log(weakend(7));

// 9. Write a function that filters an array of numbers and returns only those that
// are divisible by 2 or 3.
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Output: [2, 3, 4, 6, 8, 9]

function dividedbytwoAndThree(arr) {
  let devided = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0 || arr[i] % 3 == 0) {
      devided.push(arr[i]);
    }
  }
  return devided;
}

// console.log(dividedbytwoAndThree([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 10. Write a function that finds the index of a given element in an array. If the
// element isn’t found, return `-1`.
// Input: [1, 2, 3, 4, 5], 3
// Output: 2
// Input: [1, 2,

function finndIndex(arr, num) {
  let index = arr.indexOf(num);
  if (index == -1) {
    return -1;
  } else {
    return index;
  }
}
// console.log(finndIndex([1, 2, 3, 4, 5], 3));

// Write a function to calculate the factorial of a given number.
// Input: 5
// Output: 120

function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}
// console.log(factorial(5));

// 12. Write a function that takes an object and returns an array containing only
// its keys.
// Input: {name: "John", age: 30}
// Output: ["name", “age"]

function objKey(obj) {
  let arr = [];
  for (const key in obj) {
    arr.push(obj[key]);
  }
  return arr;
}

// console.log(objKey({ name: "John", age: 30 }));

// 13. Write a function that returns only the unique numbers from an array.
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 3, 5]

function uniqueNum(arr) {
  arr.sort((a, b) => a - b);
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      unique.push(arr[i]);
    } else {
      i++;
    }
  }
  return unique;
}

// console.log(uniqueNum([1, 2, 2, 3, 4, 4, 5]));

// 14. Write a function to count the occurrences of each character in a string.
// Input: "hello"
// Output: {h: 1, e: 1, l: 2, o: 1}
function occurance(str) {
  let obj = {};
  for (const char of str) {
    obj[char] = (obj[char] || 0) + 1;
  }
  return obj;
}
// console.log(occurance("hello"));

// 15. Write a function that sorts an array of numbers in ascending order.
// Input: [5, 3, 8, 1, 2]
// Output: [1, 2, 3, 5, 8]

function sortArr(arr) {
  arr.sort((a, b) => a - b);
  return arr;
}

// console.log(sortArr([5, 3, 8, 1, 2]));

// 16. Write a function to check if a given string is an anagram of another string
// (i.e., contains the same characters in a different order).
// Input: "listen", "silent"
// Output: true

function angaram(str1, str2) {
  let one = str1.split("").sort().join("");
  let two = str2.split("").sort().join("");
  return one === two;
}

// console.log(angaram("listen", "silent"));

// 17. Write a function that creates a car object with properties such as `model`
// and `year’ and includes a method to display the car's details.
// Input: Toyota, 2020
// Output: "Model: Toyota, Year: 2020"

function car(modell, yearr) {
  let obj = {
    model: `${modell}`,
    year: `${yearr}`,
  };

  return obj;
}

// console.log(car("Toyota", 2020));

// 19. Write a function that checks if a given object contains a specific property.
// Input: {name: "Alice", age: 25}, "name"
// Output: true
// Input: {name: "Alice", age: 25}, "address"
// Output: false

function checkProp(obj, prop) {
  let arr = Object.keys(obj);
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === prop) {
      return true;
    }
  }
  return false;
}

// console.log(checkProp({ name: "Alice", age: 25 }, "name"));

// 20. Write a function that performs a mathematical operation (`+`, `-`, `*`, `/`)
// on two numbers.
// Input: 5, 3, "+"
// Output: 8
// Input: 5, 3, "%"
// Output: "Invalid operator"

function mathematical(num1, num2, opr) {
  switch (opr) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}

console.log(mathematical(5, 3, "+"));
