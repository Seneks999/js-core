// "use strict";

// const str = [];
/* Змінні та типи данних */
// const age = 20;
// console.log(age);

// let totalPrice = 150.5;
// totalPrice = 50.2;
// console.log(totalPrice);

// const number = 1; // Літерал числа
// const string = "Hello!"; // Літерал рядка
// const array = []; // Літерал масиву
// const object = {}; // Літерал об'єкту

// Оголошення змінної
// const age = 20;
// console.log(20);

// let totalPrice = 150.5;
// console.log(totalPrice);
// console.log(number);
// console.log(string);
// console.log(array);
// console.log(object);

// Типи данх: number, string, null, undefined, boolean, object, Symbol, BigInt
// Symbol - створення ідентифікаторів для ключив об'єкта;
// const userName = "Alie";
// const isOpen = true;
// let user = null;
// let product;

// console.log(user);
// console.log(typeof isOpen);
// console.log(typeof user);
// console.log(typeof product);
// console.log(typeof userName);

// Арефметичні оператори
// const x = 12;
// const y = 5;
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

// const apples = 45;
// const grapes = 130;
// const total = apples + grapes;

// console.log(total);
// console.log(apples - grapes);

// let students = 100;
// students = students + 38;
// students += 38;
// students -= 38;
// students *= 2;

// console.log(students);

// const result = 100 + 50 - 2 * 5;
// console.log(result);

// const firstName = "Alice";
// const lastName = "Franko";
// const fullName = firstName + " " + lastName;

// console.log(fullName);

// const message = `My name is ${firstName} `;
// console.log(message);

// const str = "Hello World";

// console.log(str);
// console.log(str.length);
// console.log(str[1]);
// console.log(str[str.length - 1]);

// let str = "Hello";
// str[e] = "u";
// console.log(str);
// console.log(str[str.length - 4]);

// const companyName = "Boston Dynamics";
// const repairBots = 150;
// const defenceBots = 50;

// const total = repairBots + defenceBots;
// const message = `${companyName} has ${total}`;
// const message = `${companyName} has ${repairBots + defenceBots}`;

// console.log(message);

// Перетворення типів (явне та не явне)

// console.log(typeof String(5));

// console.log(typeof String(true));
// console.log(typeof false);

// console.log(typeof String(null));
// console.log(typeof null);
// console.log(typeof String(undefined));
// console.log(typeof undefined);

// Неявне перетворефння
// console.log("5" + 3);
// console.log(100 + 2 + "3");

// console.log("5" + false);
// console.log("5" + true);
// console.log("5" + null);
// console.log("5" + undefined);
// console.log("5" + NaN);
// console.log(5 - "4" + false);
// console.log("5" - 4 - false);

// const a = "5";
// const b = 4;
// const total = a + b;
// console.log(total);

/* Друге заняття */

// console.log(Number("5"));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(null));
// console.log(Number(undefined));
// console.log(Number("Alice"));
// console.log(Number("25px"));

// + рядка с числом робить конкатенацію, усі інщі оператори перетворюють рядок на число
// console.log("5" - 2);
// console.log("5" * 2);
// console.log("5" / 2);
// console.log("5" + 2);
// console.log(Number("5") + 2);
// console.log(5 + true);
// console.log(5 + false);
// console.log(5 + "unefined");
// console.log(5 + null);

// console.log(5 > 4);
// console.log(5 < 4);
// console.log(5 >= 4);
// console.log(5 <= 4);

// console.log("2" > "12");
// console.log("2" < "12");

// console.log("4" == 4);
// console.log("4" === 4);

// console.log("false" === false);
// console.log("false" == false);
// console.log(1 == true);
// console.log(0 == false);
// console.log(0 == true);

// console.log("Alice" < "alice"); // true

// console.log(undefined == null);
// console.log(undefined === null);

// let width = "12.5px";
// width = Number.parseInt(width);
// width = Number.parseFloat(width);

// console.log(width);
// const value = 27.5;

// console.log(Math.floor(value));
// console.log(Math.round(value));
// console.log(Math.ceil(value));
// console.log(Math.random() * value); // отримати випадкове число в діапазоні від 0 до 27.5

/* ============================ */
/* === Functions (Функції) === */
/* =========================== */

// function add() {
//   console.log("lalala");
// }
// add();

// function add(x, y) {
//   console.log(x + y);
// }
// add(5, 4);
// Параметри у функції мають довільну назву

// function add(num1, num2) {
//   console.log(num1 + num2);
// }
// const num1 = 10;
// const num2 = 12;
// add(num1, num2);

// function add(tototo, lalala) {
//   const res = tototo + lalala;
//   console.log("add", res);
//   return res;
// }

// const num1 = 2;
// const num2 = 6;

// console.log(add(num1, num2));

// return припиняє виконання функції

// const firstName = prompt("Введіть Ваше шь'я");
// console.log(typeof firstName);
// console.log(firstName);

// const firstName = prompt("Введіть якесь число");
// console.log(firstName);

// const isAdult = confirm("Чи є вам 18 років?");
// console.log(isAdult);

// ================ typeof =====================
// const firstName = prompt("Enter your first name");
// console.log(typeof firstName);

// const firstName = prompt("Enter your first name");
// console.log(typeof firstName);

// const someString = "10";
// const someNumber = 10;
// console.log(someString);
// console.log(someNumber);

// let userAge = 30;
// console.log(userAge);
// userAge = 55;
// console.log(userAge);

// const petya = 20 * 8 * 20;
// const katya = 20 * 8 * 15;
// const yura = 17 * 8 * 21;

// console.log("petya", petya);
// console.log("katya", katya);
// console.log("yura", yura);

console.log("Hello Worls!");
