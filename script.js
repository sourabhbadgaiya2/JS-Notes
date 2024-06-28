//                      DAY 1
//                  -------------

//  variables and datatypes
// scope

// process of creating variable

//  1. var/ let/ const = keywords
//  2. variable/container name
//  3. =, assignmental operator, right (value) to left(variable) assign
//  4. value/info/data

// E.G. ->

// let a = 12;

// Naming convension of variables
// 1. must be related to the data
// 2. must start with small/apital letters pr "_"
// 3. must not start with numerical value though can be user after first letter
// 4. must be a single word
// 5. must use case patterns if variable is more than a word

// snake_case_pattern 💹
// camleCasePattern 💹
// PascalCasePattern 💹
// kabab-case-pattern ❌

// Datatypes

// number 123/ -123 /-1.2 / -1.3
// string -> '123' / "asc" / "@#%$"
// boolean -> true / false
//  object -. null (When programmer intentionally empty the value)
// undefined -> undefined(when compiler want to show the empty value)
// object -> array[] / object{}

// what is symbol datatype in javaScript ? *

// ****************************************************************************

//                              DAY 2
//                          -------------
// input, output method in js

// input methods

// prompt
// confirm

// output

// console.log()
// alert()

// implicit /  Explicit type conversion

// var num1 = Number(prompt('Enter a number 1'));
// var num2 = +prompt('Enter a number 2');
// var sum = num1 + num2;
// console.log(sum);

// ****************************************************************************

//                              DAY 3
//                          -------------

//  operators
//   assignmental {=} assiging value from right side of the operator to the left save side

// (binary) Arithmetic Operators => + - / * %   **
// ---------------------------------------------

// let n1 = 6
// let n2 = 2;

//                      output
//                     ---------
// let op = n1 ** n2     | 36|
// let op = n1 + n2      | 8 |
// let op = n1 - n2      | 4 |
// let op = n1 / n2      | 3 |
// let op = n1 * n2      | 12|
// let op = n1 % n2      | 0 |
// let op = n2 % n1      | 2 |{big value divided to return small value}
// console.log(op)

// shorthand operator  += -= /= *= %=   **=
// --------------------------------------------

// let n1 = 12;

// n1 = n1 +2;
// we can user shorthand operator if we want to update a variable and assign the value to itslef.

// n1 **= 2;
// n1 += 2;
// n1 -= 2;
// n1 *= 2;
// n1 /= 2;
// n1 %= 2;
// console.log(n1)

// (unary) (+)increment / (-1)decrement [++ --]

// let n1 = 12;

// let n = n++; (post decrement/ increment -> it updates the data and assign to the variable)
// let n = ++n; (pre decrement / increment -> it updates the data and assign to the variable)

// Eventually in both the above condition the value in which operator is impleneted is going to be updated.

//                              DAY 4
//                          -------------

// Comparision operators -> boolean (true/false)
// > >= < <= != == !==

// in string comparision javascript always compares the first not equal character only
//  console.log(12 === "12")

// console.log("john" > "doe")

//  -------------------------------------------
//  Logical operators -> && || !
//  (output depends on the data is being compared logically)
//  -------------------------------------------------------------------
// a = 13;

//  x =a > 10;
// y = a % 2 == 0;
// console.log(x || y);
// console.log(x && y);
// --------------------------------------
//|       |          |    &&  |   ||    |
// --------------------------------------
//| false | false -> | false  | false   |
//| false | true  -> |  false |  true   |
//| true  | false -> |  false |  ture   |
//| true  | true  -> |  true  |  true   |
// --------------------------------------

//  Falsy values
//  0 null undefined "" false

// console.log(0 && 13);
// console.log('hello' || null || 'hi');
// --------------------------------------

// prepinsta.com

// Iterative statments (loops)

// * Important pillers of loop

// 1. Loop Variable. (let i = 1)
// 2. Condtion Expression. (i <= 10)
// 3. Updation Expression. (i++ / --i)
// 4. Body of loop. (console.log("any data"));

// * | Type of Loops  |
//   ------------------
// 1. Entry control Loop. (for while)
// 2. Exit control Loop. ( do while)

// WAP to print n natural numbers (1 - n)

// -------------------------------------------------------------------------------

// while syntax *

// let loop_variable = value
// while(condtion){
// body of loop
//  updation expression
//  }

// let n = 10;
// let i = 0;
// while (i <= n) {
//     i++;
//     console.log(i);
// }

// ******************

// ******************
// do while syntax *

// do {
//  body of loop
// updation expression
// } while(contition expression);
// }

// let n = 10;
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= n);

// ******************

// ******************
// for syntax
//  for(let loop_variable = value; condition_expression; updation_expression){
//  body of loop
// }

// let n = 10;
// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }

// ---------------------------------------------------------------

// for / while do / while
// break and continue

// let i = 0;
// let n = 10;
// while (i <= n) {
//   if (i === 5) {
//     console.log('Break....');
//     break;
//     // stop
//   }
//   i++;
//   if (i === 3) {
//     console.log('Continue...');
//     continue;
//     // skip
//   }
//   console.log(i);
// }

// -----------------------------------------------------------------

// Strings = Raw, escape sequence, formatted, and string

// indexing always start from 0

// let s = "Hello world!";
// s = " Hell world";
//  console.log(s);
//  console.log(s[0]);
//  console.log(s.at(-1));
// s = null

//  string templets

//  console.log("This given string is " + s)'
//  console.log(`This given string is ${s}`)'

// Escape sequence character in strings -
//  \n \t \b
//  console.log("Hello\nworld") (\n next line)
//  console.log("Hello\bworld") (\b backspace 2 words)
//  console.log("Hello\tworld") (\t create 4spaces)

// escape sequence character
// console.log('http:\\localhost:3000\new\tab');
// console.log(`http:\\localhost:3000\new\tab`);
// console.log(String.raw`http:\\localhost:3000\new\tab`);

// -----------------------------------------------------------------

// strings methods

// let s = 'Hello world';
// console.log(s.length); // .property // .Method()
// console.log(s.toUpperCase);
// console.log(s.toLowerCase);
// console.log(s.concat(' Good Morning', ' Have a nice day!'));
// console.log(s.replace('world', 'universe'));
// console.log(s.indexOf('world'));

// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------

// Functions :-
//  # Function programming paradigm

//  function declaration and initialization

// function calling:-

// function funcName(){
// console.log("function called!");
// }

// function calling:-

// funcName();
// funcName();
// funcName();

// --------------------------------------------------------------------------

//   static function // non- parameterized function

// function greet() {
//   console.log('Jai shree ram');
// }
// greet();

//  parameterized function
//  Dynamic //

//  parameter(init. & dec.) = varibale of function
// arguments(call) = value of function variable

// function greet(message) {
//   console.log(`good ${message}`);
// }

// greet('morning');
// greet('evening');
// greet('night');

// function greet(message, name) {
//   console.log(`good ${message} ${name}`);
// }

// greet('morning', "john" );
// greet('evening', "dog");
// greet('night', "cat");

//  function must not use anything outside it's scope it leads to impure function which are  not efficient and not a good programers practice.

// impure function
// const message = 'MOrining';
// function greet() {
//   console.log(`good ${message}`);
// }
// greet();

// // pure function
// function greet() {
//   const message = 'Morining';
//   console.log(`good ${message}`);
// }
// greet();
//  to input values from outside to the function legally we use parameterized

// ---------------------------------------------------------
//  Print vs Return

// return is used to send the result outside the function
// function sum(a, b) {
//   s = a + b;
//   return s;
//   //   result must be the last statement in the function
//   // returns always takes single value
// }

// // the function call is replaced by the return value

// let result = sum(12, 18);
// let x = 5;
// console.log(result);
// console.log(result * x);

//  variable length parameters/arguments
//  ... rest operator -> stores the value in the form of array
//  rest operator should be the last parameter in the function
// there must not be more than one rest operator in a function

// function hobbies(name, age, ...h) {
//   //   console.log(name, age);
//   return h;
// }
// let result = hobbies('John', 24, 1, 'play');
// console.log(result);

// ---------------------------------------------------------------

//      Default parameters:-

// 1. Default paramteter must be at the end of the parameter list 💹

// function dets(name, age, batchode = 'Mern11') {x
//   console.log(name, age, batchode);
// }
// dets('john', 24);

// 2. There shoud be single default parameter in a function ❌

// function dets(name, age = 20, batchcode = 'mern11') {
//   console.log(name, age, batchcode);
// }

//  Keyword Function Arguments :-

// function dets({ name, age, city }) {
//   console.log(name, age, city);
// }
// dets({ city: 'bpl', name: 'john', age: 23 });

//  arrow function
// let sum = (a, b) => a + b;
// let s = sum(1, 2);
// console.log(s);

// ------------------------------------------------------------------------------------

// * Hoisting :- kisi bhi chij ko banne se pahle use kar le.

// TDZ - temporal dead zone

// console.log(a);
// var a = 5; // output :- undefined

// console.log(a);
// let a = 5; // output :- cannot acces (a) before initilization.
//  tdz
// console.log(a);
// let a = 5; // output :- cannot acces (a) before initilization.
// tdz

// functions are fully hoisting *

// sum(1, 2);

// function sum(a, b) {
//   console.log(a + b);
// }

// consle.log(x)
// const x = (a, b) => {
//   console.log(a + b);
// }

// --------------------------------------------

// primitive & refrence

// • primitive :-  • non - refrence • immutable
// let a = 5;
// let b = 8;
// console.log(b);

// • refrence  :-  • non - primitve • mutable
// [], {}

// let a = 5;
// let b[0] = a;
// console.log(b);

// -------------------------------------------------

//  Array and function

//  array :- [1,2,3] :- always start indexing zero(0).

// let arr = [1, 2, 3];
// console.log(arr);

// console.log(Array.isArray(arr)); // type checking of an array
// console.log(arr.length);

// create
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// read
// console.log(arr[0]);
// console.log(arr[arr.length - 1]);
// console.log(arr.at(-1));

// update

// arr[2] = 6;
// console.log(arr);

//  Traverse

// for (let i = 0; i < arr.length; i++) {
//   console.log(i, arr[i]);
// }

// add Elements

// let b = arr.push(123, 234);
// let x = arr.unshift(111);

// delete
// let x = arr.pop();
// let x = arr.shift();
// console.log(arr);
//
// let x = arr.splice(2, 1); // delets one element at index 2
// console.log(x);
// console.log(arr); // returns the removed array of element of an array

// Slice
// jo method copy bnati hai wo immutable hot hai
// let x = arr.slice(2, -2);
// Array.slice (Starting, ending + 1)

// console.log(arr);
// console.log(x);

// Different Traversing Techniques
//  forEach
// arr.forEach((element, index) => {
//   //   console.log(index, element);
// });

// Map
// let x = arr.map((element, index) => {
//   return element * 2;
// });

// console.log(arr);
// console.log(x);

// filter
// let x = arr.filter((element, index) => {
//   return element % 2 !== 0;
// });
// console.log(arr);
// console.log(x);

// -----------------------------------

// Object

// let detail = {};
// let detail = {
//   name: 'john',
//   age: 25,
//   gender: 'Male',
//   address: 'Bhopal',
// };

// detail.gender = 'mail';
// detail.email = 'john@gmail.com';

// console.log(detail);
// console.log(detail.address);
// console.log(detail['name']);

// console.log(typeof detail);

// delete detail.name;
// console.log(detail);

// forof -array     *
// forin - object   *

// let arr = [1, 10, 52, 55, 46, 55];
// for (let i of arr) {
//   console.log(i);
// }

// let profile = {
//   name: 'john',
//   age: 25,
//   gender: 'Male',
//   address: 'Bhopal',
// };
// for (let i in profile) {
//   console.log(i, profile[i]);
// }

// **------------------------------

// * Spread Operator
//   Array

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [...arr, 123];

// arr2[1] = 2133;
// console.log(arr, arr2);

// let obj = {
//   name: 'john',
//   age: 25,
//   gender: 'Male',
//   address: 'Bhopal',
// };

// let obj1 = { ...obj, email: 'example@gmail.com' };
// obj1.name = 'jane';

// console.log(obj, obj1);

// * Destructuring :-

// let arr = ['john', 12, 'Bhopal'];

// let name = arr[0]
// let age = arr[1];
// let city = arr[2];

// let [name, age, city] = arr;
// let [name, , city] = arr;

// console.log(name, city);

// let obj = {
//   name: 'john',
//   age: 12,
// };

// let { age, name, city } = obj;
// console.log(name, age, city);

// * Exception /Error Handling :-

// let b = 12;
// let sum = a + b;
// console.log(sum);
// console.log('hello world');

// try {
//   let b = 12;
//   let sum = a + b;
//   console.log(sum);
// } catch (error) {
//   // console.log(error);
//   console.log(error.name);
//   console.log(error.message);
// } finally {
//   console.log('this code will run anyhow');
// }
// console.log('Hello world');

// Self Error Generate :-

// try {
//   let a = 11;
//   let b = 12;
//   let sum = a + b;
//   if (sum % 2 != 0) {
//     throw Error('odd values not allowed');
//   }
//   console.log(sum);
// } catch (error) {
//   console.log(error);
//   console.log(error.name);
//   console.log(error.message);
// } finally {
//   console.log('this code will run anyhow');
// }
// console.log('Hello world');

// * Sync and Async behavior of JS *
// ------------------------------------------

// setTimeout(() => {
//   console.log('Hello world');
// }, 1000);

// let a = 1;
// let x = setInterval(() => {
//   if (a === 5) {
//     clearInterval(x);
//   }
//   console.log(a);
//   a++;
// });

// AJAX / AJSON
// api is given by backend and to implement api in frontend we use te concept of AJAX which is theoretical concept and to implement it we use "fetch api" / " axios " in frontend.

// let userapi = `https://pixabay.com/en/blossom-bloom-flower-195893/`;

// fetch(userapi)
//   .then((e) => e.json())
//   .then((r) => console.log(r))
//   .catch((err) => console.log(err));

// promises

// Try Catch is used to handle sync error
// promises are used to hamdle async errror

// function myPromise(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (data > 100) {
//         resolve('Data is greater than 100');
//       } else {
//         reject('Data  is less than 100');
//       }
//     }, 1000);
//   });
// }

// // Using promise
// myPromise(2)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Example of Fetch Api (predeifned Promise in JS to call data from API(AJAX))

// let userApi = 'Api link';
// fetch(userApi)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Async and await => use to convert async code to sync code

async function getusers() {
  try {
    let userapi = `Api link`;
    const response = await fetch(userapi);
    const data = response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getusers();
