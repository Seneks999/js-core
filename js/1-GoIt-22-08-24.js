"use strict";
// console.log("Hello world!");

// =================== Розібратись ===============
// function add(x, y) {
//   const dayTotal = x * 8 * 1.2;
//   const total = dayTotal * y;
//   return total;
// }

// const petya = add(20, 20);
// const katya = add(20, 15);
// const yura = add(17, 21);

// console.log("petya", petya);
// console.log("katya", katya);
// console.log("yura", yura);

// ==============================================
/*
function add(x, y, q) {
  const dayTotal = x * 8 * q;
  const total = dayTotal * y;
  return total;
}

const petya = add(20, 20, 1.2);
const katya = add(20, 15, 1.3);
const yura = add(18, 21, 1.6);

console.log("petya", petya);
console.log("katya", katya);
console.log("yura", yura);
*/
// ??? ==============================

// function calculateSalary(hourlyRate, daysWorked, multiplier) {
// const dailySalary = hourlyRate * 8 * multiplier; // Зарплата за день з урахуванням множника
// return dailySalary * daysWorked; // Загальна зарплата за всі дні
// }

// const petya2 = calculateSalary(20, 20, 1.2);
// const katya2 = calculateSalary(20, 15, 1.3);
// const yura2 = calculateSalary(18, 21, 1.6);

// console.log("Petya's salary:", petya2);
// console.log("Katya's salary:", katya2);
// console.log("Yura's salary:", yura2);

// Области видимости
// const str = "Hello";
// function foo() {
// console.log(str);
// const mesage = "world";
// console.log(mesage);
// function lalala() {
//   const str2 = "lalala!";
//   console.log(str2);
//   console.log(mesage);
// const str3 = `${str} ${mesage} ${str2}`;
// console.log(str3);
//     console.log(`${str} ${mesage} ${str2}`);
//   }
//   lalala();
// }
// foo();

// =================================
// function check(name, age) {
//   if (Number(age) === 18) {
//     return `${name} ще молода`;
//   } else {
//     return "Сходи за таблетками!";
//   }
// }
// let user = prompt("Скільки тобі років?");
// user = check("Alise", user);
// console.log(user);

// !!!! =====================================
// function calcBMI(weight, height) {
//   let numWeight = Number.parseFloat(weight);
//   let numHeight = Number.parseFloat(height);

//   return numWeight / (numHeight * numHeight);
// }
// const bmi = calcBMI("88.3", "1.75");
// console.log("BMI", bmi);

// !!! ===================================

// function calcBMI(weight, height) {
//   let numWeight = weight.replace(",", ".");
//   numWeight = Number.parseFloat(numWeight);
//   let numHeight = Number.parseFloat(height);
//   console.log(typeof numWeight);
//   console.log(typeof numHeight);

//   return numWeight / (numHeight * numHeight);
// }
// const bmi = calcBMI("88,3", "1.75");
// console.log("BMI:", bmi);

// !!! ==================================
// function calcBMI(weight, height) {
//   let numWeight = weight.replace(",", ".");
//   numWeight = Number.parseFloat(numWeight);
//   let numHeight = Number.parseFloat(height);
//   console.log(typeof numWeight);
//   console.log(typeof numHeight);

//   const bmi = numWeight / numHeight ** 2;
//   return Number(bmi.toFixed(2));
// }
// const bmi = calcBMI("88,3", "1.75");
// console.log("BMI:", bmi);

// ======================
// * ====================
// ! ====================
// ? ====================

function foo(username) {
  console.log(`Hello ${username}`);
  // * return "Ярославна";
  return username;
}
const user = foo("Alice");
console.log("user", user);
