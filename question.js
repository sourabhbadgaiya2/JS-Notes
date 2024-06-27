// 1. positve or negative number

// let n = +prompt('enter a number');
// if (n >= 0) {
//   console.log('positive number');
// } else {
//   console.log('negative number');
// }

// 2. Sum of first N natural number:

// let n = 5;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
//   console.log(sum);
// }

// 3. Leap year or not

// let year = +prompt('Enter a number');
// if (year % 400 === 0) {
//   console.log('leap year');
// } else if (year % 4 === 0 && year % 100 !== 0) {
//   console.log('  a leap year');
// } else {
//   console.log(' not a leap year');
// }

// 4. prime number

// let num = +prompt('enter a number');
// let isPrime = true;

// if (num <= 1) {
//   isPrime = false;
// } else {
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }
// if (isPrime) {
//   console.log('is a prime number');
// } else {
//   console.log('not a prime number');
// }

// 5. reverse of a number.

// let num = 123;
// let reverse = 0;
// var rem;

// while (num != 0) {
//   rem = num % 10;
//   reverse = reverse * 10 + rem;
//   num = Math.floor(num / 10);
// }
// console.log(reverse);

// 6. leap year divisible by 4, 100, 400

// function isleap(year) {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         return 'leap year';
//       }
//     } else {
//       return 'leap year';
//     }
//   } else {
//     return 'not a leap year';
//   }
// }

// var a = isleap(2026);
// console.log(a);

//------------------------------

// var a = document.querySelector('h1');
// var b = document.querySelector('button');

// // b.addEventListener('mousemove', () => {
// //   b.style.backgroundColor = 'red';
// // });
// // b.addEventListener('mouseout', () => {
// //   b.style.backgroundColor = '';
// // });
// function add() {
//   b.addEventListener('click', () => {
//     a.innerHTML = 'Hello world';
//     console.log('clickec....');
//   });
// }
