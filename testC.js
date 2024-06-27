// 1. WAP to accept single number input from the user and print it.

// let n = Number(prompt('Enter a number'));
// console.log(n);

// 2. WAP to accept Name of the user and print "User name is ......"

// let n = prompt('Enter your name');
// console.log(`user name is ${n}`);
// Template string

// 3. WAP to accept two integers and print their sum "the sum of 2 & 4 is 6"  using template string.

// let n1 = 2;
// let n2 = 4;
// let sum = n1 + n2;

// console.log(sum);

// let n1 = prompt('enter number 1');
// let n2 = prompt('enter number 2');
// console.log(`the sum of ${n1} and ${n2} is ${n1 + n2}`);

// 4. WAP to accept name and 3 differnet subject marks from the user and calculate the total and percentage of it
// output - Hello, John your total score is 345 with 67.89% in the Exam.

// const m1 = +prompt('enter your marks1');
// const m2 = +prompt('enter your marks2');
// const m3 = +prompt('enter your marks3');

// const score = m1 + m2 + m3;
// const s = (score / 300) * 100;

// console.log(`Hello, John yout total score is ${score} with ${s.toFixed(2)} `);

// 5. Wap to accept temperature in F and cover it in to C
// output - The temperature is 34 in C.

// const temp = +prompt('Enter temperature');
// const mul = ((temp - 32) * 5) / 9;
// const Cal = mul;

// console.log(`The temperatur is ${Cal.toFixed(2)} in C`);

// 6. Wap to accept required input to calculate SI
// output - The simple interest of 234 in 4 years with rate of 2 is 743.
// let p = +prompt('enter principle ');
// let r = +prompt('enter rate');
// let t = +prompt('enter time');
// let si = (p * r * t) / 100;

// console.log(`The simple interest ${si}`);

// 7. wap to accept Name, Gender and Age of the person and check Wearher he/she is able to vote
// output - Congratulations Mrs ABC you can vote
// output - oh sorry Ms. ABc you can not vote for 4 more years.
// let name = 'criminal';
// let gender = 'F';
// let age = 14;
// let check = gender === 'M' ? 'Mr.' : 'Ms.';

// if (age >= 18) {
//   console.log(`Congratulations ${check}  ${name} you can vote`);
// } else {
//   console.log(
//     `oh sorry ${check} ${name} you can not vote for ${18 - age} more years.`
//   );
// }

// 8.  WAP to accept 3 integers and check amount them weather.
// i. all three are equal.
// ii. any two are equal.
// iii. all are different.
//  and print suitable message according to it.

// let a = +prompt('Enter first int');
// let b = +prompt('Enter Second int');
// let c = +prompt('Enter thrid int');

// if (a === b && b === c) {
//   console.log('All three are equal');
// } else if (a === b || b === c || c === a) {
//   console.log('Any two are equal');
// } else {
//   console.log('All are different');
// }

// 9. i. WAP to accept 2 integer and check the greater number.
// let a = +prompt('Enter a first number');
// let b = +prompt('Enter a Second number');
// if (a > b) {
//   console.log('a is grater than');
// } else if (b > a) {
//   console.log('b is grater than');
// } else {
//   console.log(' all number is equal');
// }

// ii. WAP to accept 3 integer and check the greater number.

// let a = +prompt('Enter fisrt integer');
// let b = +prompt('Enter second integer');
// let c = +prompt('Enter third integer');
// if (a > b) {
//   console.log('a is greater number');
// } else if (b > c) {
//   console.log('b is grater number');
// } else if (c > a) {
//   console.log('c is grater number');
// } else {
//   console.log(' ALl three numbers are equal');
// }

// 10. WAP to accept an integer and check weather the given number is even or odd.

// let a = +prompt('Enter a number');
// if (a % 2 === 0) {
//   console.log('even');
// } else {
//   console.log('odd');
// }

// 11. WAP to print table of given number.
// let n = 10;
// for (let i = 1; i <= 10; i++) {
//   let mul = n * i;
//   console.log(mul);
// }
// 12. WAP to print sum of N natural numbers.

// let n = 5;
// let sum = 0;
// let i = 0;
// while (i <= n) {
//   i++;
//   console.log(sum);
//   sum += i;
// }

// let n = 5;
// let sum = 0;
// for (let i = 0; i <= n; i++) {
//   sum += i;
//   console.log(sum);
// }

// 13. Wap  to find the factorial of the given integer.

// let f = 5;
// let multiply = 1;
// for (let i = 1; i <= f; i++) {
//   multiply *= i;
//   console.log(multiply);
// }

// 14. wap to find all the factors of the given integer
// let num = 22;
// for (let i = 1; i < num; i++) {
//   if (num % i == 0) {
//     console.log(i);
//   }
// }

// 15. WAP to find weather the given integer is Prime or Not-prime.

// let n = 8;
// isPrime = true;

// if (n <= 1) {
//   isPrime = false;
// } else {
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }
// let result = isPrime ? 'prime number' : 'not a prime number';
// console.log(result);

// let flag = 'prime';
// let n = 2;
// for (let i = 2; i <= (n / 2).toFixed(0); i++) {
//   if (n % i === 0) {
//     flag = 'not prime';
//     break;
//   }
// }
// console.log(flag);

// 16. WAP to print the fabonacci series of the given length.?

// let a = 0;
// let b = 1;

// console.log(a);
// console.log(b);

// for (i = 2; i < 10; i++) {
//   var nextNumber = a + b;
//   console.log(nextNumber);
//   a = b;
//   b = nextNumber;
// }

// let firstNumber = 0;
// let secondNumber = 1;
// let nextNumber = 0;
// let n = 10;
// let i = 1;
// let output = firstNumber + ' ' + secondNumber;

// console.log(firstNumber, secondNumber);
// while (i <= n - 2) {
//   nextNumber = firstNumber + secondNumber;
//   firstNumber = secondNumber;
//   secondNumber = nextNumber;
//   //   console.log(next);
//   output += ' ' + nextNumber;
//   i++;
// }
// console.log(output);

// 17.  Find the Index of the First Occurrence in a String

// Given two strings needle and haystack, return the index of the first occurrence of
// needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// function str(haystack, needle) {
//   return haystack.indexOf(needle);
// }

// const haystack = 'sadbutsad';
// const needle = 'sad';

// const haystack1 = 'leetcode';
// const needle1 = 'leeto';

// console.log(str(haystack, needle));
// console.log(str(haystack1, needle1));
