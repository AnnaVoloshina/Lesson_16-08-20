"use strict";

// const colorRed = "#f00";

// console.log(colorRed);

// let name = "Anna";

// console.log(name);

// let string = `My name is ${name}`;

// let name = prompt("What is your name?");

// console.log(`Name is ${name}`);

// let name = "Vasya";
// let string = `name is ${name}`;
// console.log(string);

// let check = false; //boolean

// let undefinedVar; //undefined

// console.log(typeof check);

// let nullValue = null;

// console.log(typeof nullValue);

// let num = 1 + 5;

// console.log(num);

// let input;

// input = prompt("What time is it now?");

// console.log(input);

// let minute = Number(input);

// if (minute >= 0 && minute <= 15) {
//   console.log(`First quater`);
// } else if (minute > 15 && minute <= 30) {
//   console.log(`Second quater`);
// } else if (minute > 30 && minute <= 45) {
//   console.log(`Third quater`);
// } else if (minute > 45 && minute <= 60) {
//   console.log(`Fourth quater`);
// } else if (minute < 0 && minute > 60) {
//   console.log(`Wrong value`);
// } else {
//   console.log(`Wrong value`);
// }

// let input = prompt("Input number of #");

// input = Number(input);

// let i = 1;

// while (i <= input && i <= 1000) {
//   console.log(`#`);
//   i = i + 1;
// }

// do {
//   console.log(`#`);
//   i = i + 1;
// } while (i <= input && i <= 1000);

// for (i = 1; i <= input && i <= 1000; i = i + 1) {
//   console.log(`#`);
// }

// function power(base, exp) {
//   let result = base;

//   if (exp === 1) {
//     return result;
//   } else {
//     for (let i = 2; i < exp; i++) {
//       result *= base;
//     }
//     return result;
//   }
// }

// console.log(power(2, 4));

// function maxValue(num1, num2) {
//   if (num1 > num2) {
//     return num1;
//   } else if (num1 < num2) {
//     return num2;
//   } else if (num1 === num2) {
//     return "Значения равны";
//   }
// }

// console.log(maxValue(10, 50));
// console.log(maxValue(10, 10));

// function minValue(num1, num2) {
//   let result;
//   if (num1 > num2) {
//     return num2;
//   } else if (num1 < num2) {
//     return num1;
//   } else if (num1 === num2) {
//     return "Значения равны";
//   }
// }

// console.log(minValue(10, 50));
// console.log(minValue(10, 10));

// let input = prompt("Введите число");
// input = Number(input);
// function isEven(input) {
//   if (input % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// if (isEven(input)) {
//   alert(`Число ${input} четное`);
// } else {
//   alert(`Число ${input} нечетное`);
// }

// const cat = {
//   color: "white",
//   weight: 8,
//   isMale: true,
//   name: "Musya",
//   family: {
//     father: "Barsik",
//     mother: "Marta",
//   },
// };

// const table = {
//   width: 150,
//   height: 80,
//   depht: 50,
//   color: "brown",
//   shape: "round",
//   sayBye() {
//     return "Goodbye!";
//   },
// };

// console.log(cat);
// console.log(table.sayBye());

// function Cat(name, greeting) {
//   this.name = name;
//   this.greeting = greeting;
//   this.sayHi = function () {
//     console.log(`${greeting}, my name is ${name}!`);
//   };
// }

// const cat1 = new Cat("Barsik", "meow");
// console.log(cat1.sayHi());

// function Country(name, population, territory) {
//   this.name = name;
//   this.population = population;
//   this.territory = territory;
//   this.density = function () {
//     return (density = population / territory);
//   };
// }

// const country1 = new Country("Ukraine", 35000000, 2000000);
// const country2 = new Country("Russia", 99000000, 50000000);
// const country3 = new Country("Poland", 50000000, 80000000);

// console.log(country1.density, country2, country3);

// function Auto(name, color, time) {
//   this.name = name;
//   this.color = color;
//   this.time = time;
//   this.velocity = function () {
//     velocity = this.time * 2.4;
//   };
//   this.state = function () {
//     if (this.velocity > 0) {
//       return "Едет";
//     } else {
//       return "Стоит";
// //     }
// //   };
// // }

// // const auto1 = new Auto("Volvo", "red", 12);
// // console.log(auto1.state());
// // console.log(auto1.velocity());

// function Box(size, color, content) {
//   this.content = content;
//   this.size = size;
//   this.color -= color;

//   this.open = function () {
//     return `${this.content} opened`;
//   };
// }

// function Crate(size, material, content) {
//   this.content = content;
//   this.size = size;
//   this.material = material;
// }

// Crate.prototype = new Box(); // Задаем прототип (Box) для Crate

// const crate1 = new Crate("small", "wood", "testContent");

// console.log(crate1);

// function User() {
//   this.sayHi = function sayHi() {
//     return `Hi, my name is ${this.name}!`;
//   };
// }

// function Employee(name, age, isMale, salary) {
//   this.name = name;
//   this.age = age;
//   this.isMale = isMale;
//   this.salary = salary;
// }

// User.prototype = new Employee();
// const user1 = new User();
// Employee.prototype = new User();
// const employee1 = new Employee("Vasya", 24, true, 5000);
// user1.name = "Petya";

// console.log(user1.sayHi());
// console.log(employee1.sayHi());

// const someObj = {
//   color: "yellow",
//   name: "obj",
// };

// const otherObj = someObj;

///////////////////

// const array3 = [20, 50, "test", "qwerty", 258, 145, true, 21478, "run", "hide"];

// const vivod = function () {
//   for (let i = 0; i < array3.length; i++) {
//     console.log(array3[i]);
//   }
//   return array3;
// };

// console.log(vivod());

// function MyArray() {
//   // Добавляем аргументы в массив:
//   this.length = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     this[this.length] = arguments[i];
//     this.length++;
//   }

//   // Метод POP:
//   this.pop = function () {
//     let lastItem = this[this.length - 1];
//     delete MyArray[this.length - 1];
//     this.length = this.length - 1;
//     return lastItem;
//   };

//   // Метод PUSH:
//   this.push = function () {
//     let lastItem;
//     while (lastItem) {
//       lastItem = prompt("Введите новый элемент массива");
//       this.length = this.length + 1;
//       this[this.length - 1] = lastItem;
//       return this.length;
//     }
//   };

//   // Метод ForEACH:
//   this.forEach = function () {
//     for (let i = 0; i < this.length; i++) {
//       someFunc(this[i]);
//     }
//   };
// }

// const myArr = new MyArray(654, 2478, 2, 74189, 741);

// function someFunc(m) {
//   m = m * 2;
// }

// console.log(myArr.forEach(someFunc));
// console.log(myArr);

// // Проверяем метод POP:
// console.log(myArr);
// console.log(myArr.pop());

// // Проверяем метод PUSH:
// console.log(myArr);
// console.log(myArr.push());
// console.log(myArr);

///////////////////////////

// let input = prompt("Choose your dinner: 1 - Cake. 2 - Fries, 3 - Pizza");

// switch (input) {
//   case "1":
//     {
//       console.log("Your choise is Cake");
//     }
//     break;
//   case "2":
//     {
//       console.log("Your choise is Fries");
//     }
//     break;
//   case "3":
//     {
//       console.log("Your choise is Pizza");
//     }
//     break;
//   default: {
//     console.log("Unknown food");
//   }
// }

// const sqr1 = (a) => a ** 2;

// function power(a, n) {
//   if (n === 1) {
//     return a;
//   }
//   return a * power(a, n - 1);
// }
// console.log(power(2, 4));

// function logPar(n) {
//   if (n === 1) {
//     let par = "()";
//     return par;
//   }
//   return `(${logPar(n - 1)})`;
// }

// console.log(logPar(3));

// function minusPower(a, n) {
//   if (n === -1) {
//     return 1 / a;
//   }
//   return minusPower(a, n + 1) / a;
// }
// console.log(minusPower(2, -2));

// function logRange(first, last) {
//   if (last === 2) {
//     console.log(`${first}`);
//     console.log(`${first + 1}`);
//   }
//   console.log(logRange(first, last - 1));
//   console.log(`${last}`);
// }

// console.log(logRange(1, 3));

// const symbolExample =

// const object = {
//   test: 'test',
//   symbolExample: symbolExample,
// }

// // object[symbolExample] = "test";

// function log(...rest) {
//   const array = ["test", "string", true, {}];
//   console.log(rest);
//   console.log(array);
//   console.log(...array, ...rest);
// }

// log(1, "ddd", 4, "str", 55);

// let a = ["uuu", 2, 3];
// let b = [8, "tree", true, 156];

// function collect(a, b) {
//   let newArr = [];
//   newArr = [...a, ...b];
//   console.log(newArr);
//   return newArr;
// }
// collect(a, b);

// let c = [234, 245, true, "hjk"];
// let d = { a: "name" };

// function collect2(c, d) {
//   let newArr2 = [];
//   newArr2 = [...c, d];
//   console.log(newArr2);
//   return newArr2;
// }

// collect2(c, d);

// const e = ["pizza", "borshch", "pizza", "tea", "borshch"];

// function uniqueItem(e) {
//   let set = new Set();
//   set.add(e);
//   e.forEach((element) => {});
//   return e;
// }

// let string = "totodododod";
// // let string = "torococorot";

// function isPalindrome(string) {
//   let arrString = string.split("").reverse().join("");
//   console.log(arrString);

//   if (arrString == string) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let result = isPalindrome(string);
// console.log(result);

//////////////////////////////////////
// Task 1
//////////////////////////////////////

let string3 =
  "The includes() method determines whether one string may be found within another string, returning true or false as appropriate.";

function getVowelNumber(string3) {
  let stringNew = string3.toLowerCase().split("");
  let counter = 0;

  for (let item of stringNew) {
    if (
      item === "a" ||
      item === "e" ||
      item === "i" ||
      item === "o" ||
      item === "u"
    ) {
      counter++;
    }
  }

  return counter;
}

let result = getVowelNumber(string3);

console.log(result);

//////////////////////////////////////
// Task 2
//////////////////////////////////////

function logNumbers(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log("fizz");
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log("buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else {
      console.log(i);
    }
  }
}

console.log(logNumbers(16));

//////////////////////////////////////
// Task 3
//////////////////////////////////////

function avg(...theArgs) {
  let sum = 0;

  for (let item of theArgs) {
    sum += item;
  }

  return sum / theArgs.length;
}

let result2 = avg(1, 3, 5, 10, 30);
console.log(result2);

//////////////////////////////////////
// Task 4
//////////////////////////////////////
