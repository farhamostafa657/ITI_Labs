// 1.	Try arrow function:
// a.	With Array.filter() function, to return the odd numbers from an array.

let arr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10, 11];
let oddNumbers = arr.filter((num) => num % 2 != 0);
console.log(oddNumbers);

// b.	With array.forech() to print the even values.

var evenNum = arr.forEach((num) => {
  if (num % 2 == 0) console.log(num);
});

// c.	With array.map() to print the square of each element.
console.log("**********************");
arr.map((num) => console.log(num * 2));

// 2.	Create a Vehicle Base Class and Car Subclass

class Vehicle {
  constructor(brand, year) {
    this.brand = brand; // Manufacturer of the vehicle

    this.year = year; // Year of manufacture
  }

  getDetails() {
    return `Year: ${this.year} Brand : ${this.brand}`;
  }
}
class Car extends Vehicle {
  constructor(brand, year, model) {
    super(brand, year);
    this.model = model;
  }

  getDetails() {
    return `Year: ${this.year} Brand : ${this.brand} model : ${this.model}`;
  }
}

let myCar = new Car("Toyota", 2023, "Corolla");
console.log(myCar.getDetails());

// 3.	Make a set that holds student names.
// a.	Try to add repeated names, will the set accept it?
// b.	Print the set values using spread operator and using for…of.

let studentsName = new Set();
studentsName.add("farha");
studentsName.add("mostafa");
studentsName.add("abdeltawab");
studentsName.add("moftah");

console.log(...studentsName);

for (const element of studentsName) {
  console.log(element);
}

// 4.	Make a Map that contains the student name as a key,
//  and object that contains an array of his studied
// courses and his grade in each course. (The object structure as
// following: {Grades:[
//     {Coursename:”JavaScript”, Grade:”Excellent”},
//     {Coursename:”Jquery”, Grade:”Good”},
//     {Coursename:”CSS”, Grade:”V.Good”}]}
//     a.	Loop in the Map and display each student along with his grades in all courses.
//     b.	Make a dropdownlist and fill it with the student names (from the Map), and when the user selects specific student display his grades in all courses.

let studentDate = new Map();
studentDate.set("farha", {
  grades: [
    { Coursename: "”JavaScript”", Grade: "”Excellent”" },
    { Coursename: "”Jquery”", Grade: "”Good”" },
    { Coursename: "”CSS”", Grade: "Good" },
  ],
});

studentDate.set("mostfa", {
  grades: [
    { Coursename: "”JavaScript”", Grade: "”Excellent”" },
    { Coursename: "”Jquery”", Grade: "”Good”" },
    { Coursename: "”CSS”", Grade: "Good" },
  ],
});

for (const [key, value] of studentDate) {
  console.log(key);
  value.grades.forEach(({ Coursename, Grade }) =>
    console.log(`  Course: ${Coursename}, Grade: ${Grade}`)
  );
  console.log("");
}
