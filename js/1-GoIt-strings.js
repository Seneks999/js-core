const username = "Poly";
const message = `Username ${username} is ${username.length} characters long`;
console.log(message);
document.getElementById("demo").innerHTML = username;
document.getElementById("demo-length").innerHTML = message;

const courseTopic = "JavaScript essentials";
const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopicLength - 1];
console.log(firstElement);
console.log(lastElement);
console.log(courseTopicLength);

// =================================

const age = 16;
const isAdult = age >= 18;
console.log(isAdult);
document.getElementById("isAdult").innerHTML = isAdult;

// ==================================

console.log("5" * 2); // 10
console.log("10" - 5); // 5
console.log("10" + 5); // 105
console.log(5 + true); // 6
console.log(5 - true); // 4

console.log(Number("10") + 5); // 15
console.log(+"10" + 5); // 15 Унарний плюс + перед рядком автоматично перетворює "10" на число 10.
console.log(parseInt("10") + 5); // 15
console.log(parseFloat("10") + 5); // 15 Якщо в рядку є дробові числа, можна використати parseFloat(), а якщо тільки цілі – parseInt():

// ==================================

const value = "24.5px";
let numerical = parseFloat(value);

console.log(value);

// ====================================

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  info() {
    return `Car: ${this.brand} ${this.model}`;
  }
}

const myCar = new Car("Toyota", "Corolla");
console.log(myCar.info()); // "Car: Toyota Corolla"
document.getElementById("Car1").innerHTML = myCar.info();

// ======================================

console.log((0.1 + 0.2).toFixed(1)); // "0.3"
console.log((5).toFixed(2)); //  ”5.00”
console.log((8.762195).toFixed(4)); //  “8.7622”
document.getElementById("toFixed").innerHTML = (5).toFixed(2);

// =====================================

const x = 2;
const y = 3;
const z = 4;

function multiply(x, y, z) {
  return x * y * z; // повертаємо результат множення
}
console.log(multiply(x, y, z));
// Викликаємо функцію та виводимо результат у HTML
document.getElementById("result").innerHTML = `Result: ${multiply(x, y, z)}`;

// =================================

// Оголошення параметрів x, y, z
function multiply(x, y, z) {
  console.log(`Result: ${x * y * z}`);
}

// Передача аргументів
multiply(2, 3, 5); // "Result: 30"
multiply(4, 8, 12); // "Result: 384"
multiply(17, 6, 25); // "Result: 2550"

// ==================================

function multiply(x, y, z) {
  const product = x * y * z;
  // Повертаємо результат виразу множення
  return product;
}

// Результат роботи функції можна зберегти у змінну
const result = multiply(2, 3, 6);
console.log(result); // 30
document.getElementById("result1").innerHTML = result;

// ===============================

function multiply2(x, y, z) {
  return x * y * z;
}

const result2 = multiply2(2, 3, 7);
console.log(result2); // 30
document.getElementById("result2").innerHTML = result2;

// ================================

function multiply(x, y, z) {
  console.log("The code before return is executed as usual");

  return x * y * z;

  console.log("This code is never executed because it is after return");
}

console.log(multiply(2, 3, 8)); // 30

// ===================================

function makeMessage(username) {
  console.log(`Hello ${username}`);
}

makeMessage("Jacob");

// =============================

function makeMessage(username) {
  return `Hello ${username}`;
}

const message3 = makeMessage("Jacob"); // Функція поверне рядок "Hello Jacob"
console.log(message3); // Виведе в консоль "Hello Jacob"

// ==============================

function add(a, b, c) {
  return a + b + c;
}

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));

// ==================================

function multiply3(x, y, z) {
  console.log(`Result: ${x * y * z}`);
}

console.log("Log before multiply execution");
multiply3(2, 3, 9); // "Result: 30"
console.log("Log after multiply execution");

// ================================

// Глобальна змінна
const value4 = "I'm a global variable";

function foo() {
  // Можна звернутися до глобальної змінної
  console.log(value4); // "I'm a global variable"
}

foo();
// Можна звернутися до глобальної змінної
console.log(value4);
// "I'm a global variable"

// ===================================

function foo5() {
  // Локальна змінна
  const value5 = "I'm a local variable";
  // Можна звернутися до локальної змінної
  console.log(value5); // "I'm a local variable"
}

// foo5();
// console.log(value5); // ReferenceError: value is not defined
// Помилка: локальну змінну не видно за межами
// функції;

// =========================

function makeMessage(name, price) {
  return `You picked ${name}, price per item is ${price} credits`;
}
console.log(makeMessage("Radar", 6150));

// ===========================

function calculateTotalPrice(orderedQuantity, pricePerItem) {
  return orderedQuantity * pricePerItem;
}
console.log(calculateTotalPrice(5, 100));
