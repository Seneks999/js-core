// console.log("Hello world!");
// null && "false" && "Mango";
// console.log(null && "false" && "Mango");
// null || "false" || "Mango";
// console.log(null || "false" || "Mango");
// ("false" && "Mango") || null;
// console.log(("false" && "Mango") || null);
// ("Mango" && null) || false;
// console.log(("Mango" && null) || false);

// ? В якому прикладі виконаеться тіло блоку if?
// if ("") {
//   console.log("if виконався");
// } else {
//   console.log("else виконався");
// }

// if (false) {
//   console.log("if виконався");
// } else {
//   console.log("else виконався");
// }

// if ("Poly") {
//   console.log("if виконався");
// } else {
//   console.log("else виконався");
// }

// if (null) {
//   console.log("if виконався");
// } else {
//   console.log("else виконався");
// }

// condition : expression_1 ? expression_2
// condition & expression_1 ? expression_2
// condition ? expression_1 : expression_2 // ! Вірно
// condition ? expression_1 & expression_2

// * Запис за допомогою тернального оператора
// const age = 20;
// const message = age >= 18 ? "Доступ дозволено" : "Доступ заборонено";
// console.log(message); // "Доступ дозволено"

// * Запис за допомогою if...else
// let age = 20;
// let message;
// age = 17;

// if (age >= 18) {
//   message = "Доступ дозволено";
// } else {
//   message = "Доступ заборонено";
// }

// console.log(message);

// *
/*
* bbb
! bbb
? bbb
TODO 
*/

// ? Що буде якщо у switch в кінці блоку cese не буде оператора break?
// const value = 1;
// switch (value) {
//   case 1:
//     console.log("case 1");
//     break;

//   case 2:
//     console.log("case 2");
//   case 3:
//     console.log("case 3");
// }

/*
function getFileName(file) {
  const dotIndex = file.indexOf(".");

  if (dotIndex !== -1) {
    return file.slice(0, dotIndex);
  } else {
    return file;
  }
}
  */

// console.log(getFileName("document.txt")); // "document"
// console.log(getFileName("photo.jpeg")); // "photo"
// console.log(getFileName("my.file.name.js")); // "my"
// console.log(getFileName("no_extension")); // "no_extension"
// console.log(getFileName(".hiddenfile")); // "" (порожній рядок)

// console.log("before");
// if (5 > 30) {
//   console.log("x > y");
// } else {
//   console.log("x <= y");
// }
// console.log("after");

/* 
TODO Розгалуження
const sum = 1000;

if (sum >= 100) {
  console.log("big chocolate");
} else {
  console.log("small chocolate");
}
*/

// TODO =====================
// const points = 500;
// {
//   if (points < 500) {
//     console.log("level 1");
//   } else if (points > 500) {
//     console.log("level 2");
//   } else {
//     console.log("level 3");
//   }
// }

// =============================
// const points = 1510;
// {
//   if (points < 500) {
//     console.log("level 1");
//   } else if (points > 500) {
//     console.log("level 2");
//   } else if (points > 1500) {
//     console.log("level 3");
//   } else {
//     console.log("level 4");
//   }
// }

// TODO =====================
// const points = 50;
// if (points > 1500) {
//   console.log("level 1");
// } else if (points > 500) {
//   console.log("level 2");
// } else if (points === 500) {
//   console.log("level 3");
// } else {
//   console.log("level 4");
// }

// ! Тернальний оператор
// const balance = -1000;
// let message;

// if (balance >= 0) {
//   message = "Positive";
// } else {
//   message = "Negative";
// }
// console.log(message);

// TODO =============
// const balance = 0;
// const message =
//   balance > 0 ? "Positive" : balance === 0 ? "Normal" : "Negative";
// console.log(message);

// TODO =============
// const balance = 1000;
// const message =
//   balance >= 1000 ? ">= 1000" : balance >= 500 ? ">= 500" : "< 500";
// console.log(message);

// TODO ============ if (true) іноді зустрічається для тестування коду
// const c = 15;
// if (true) {
//   const a = 5;
//   console.log(a);
// }
// console.log(a);

// TODO === if (false) — це еквівалент видалення блоку коду
// if (false) {
//   const a = 5;
//   console.log(a);
// }
// console.log(a);

// todo =========
// const hours = 14;
// const minutes = 26;
// let msg;

// if (minutes > 0) {
//   msg = `${hours} г. ${minutes} хв.`;
// } else {
//   msg = `${hours} г.`;
// }
// console.log(msg);

// todo ==== тернальний
// const hours = 14;
// const minutes = 50;
// const msg = minutes > 0 ? `${hours} г. ${minutes} хв.` : `${hours} г.`;
// console.log(msg);

//  todo ===
// const deadLine = 3;
// if (deadLine === 0) {
//   console.log("Today");
// } else if (deadLine === 1) {
//   console.log("Tomorrow");
// } else if (deadLine === 2) {
//   console.log("Owermorrow");
// } else if (deadLine >= 3) {
//   console.log("Date in the future");
// }

// ? Оператор switch case
// const user = "kate";
// switch (user) {
//   case "Petya":
//     console.log("case 1");
//     break;
//   case "Alice":
//     console.log("case 2");
//     break;
//   case "Kate":
//     console.log("case 3");
//     break;
//   default:
//     console.log("default");
// }

//  todo === Рефакторінг коду суворе порівняння switch... case замість if... ekse
// const deadLine = 2;
// switch (deadLine) {
//   case 0:
//     console.log("Today");
//     break;
//   case 1:
//     console.log("Tomorrow");
//     break;
//   case 2:
//     console.log("Overmorrow");
//     break;
//   case 3:
//     console.log("Date in tye future");
//     break;
//   default:
//     console.log("default");
// }

// ! return ми використовуємо в функції
