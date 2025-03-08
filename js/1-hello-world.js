/*
console.log("External file - Зовнішній файл");

const styles = "background-color: lightseagreen; color: black; padding: 20px";
console.log("%cStart coding, now!", styles);
*/
/*
// Grouping console
console.group("Группа логгов");
console.log("1");
console.log("2");
console.log("3");
console.groupEnd();
// Console error and warning
console.error("Ошибка - Срочно сделайте что-нить!");
console.warn("Предупреждение - Будьте осторожнее!");
// Console table
console.table({ name: "Dmitry Ko", age: 55 });
// Add styles
const styles = "background-color: lightseagreen; color: black; padding: 20px;";
console.log(
  "%cStart coding, now!",
  "background-color: lightseagreen; color: black; padding: 20px;"
);
console.log("%cStart coding, now!", styles);
*/

/* 
Горячие клавиши (VSCode)
MacOS:
Command + / (Однострочный комментарий)
Shift + Option + A   (Многострочный комментарий)
Windows:
Ctrl + / (Однострочный комментарий)
Shift + Alt + A (Многострочный комментарий)
*/
/*  */
/*
function foo() {
  console.log("This is a function!");
}
console.log(JSON.stringify(foo));
*/

/*
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback(); // Викликаємо колбек після основної дії
}

function farewell() {
  console.log("Goodbye!");
}

greet("John", farewell);
*/

/*
const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

console.log(promise); // Об'єкт промісу
*/

/*
const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Операція успішна");
  } else {
    reject("Операція не вдалася");
  }
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
*/

/*
// Define isSuccess
// const isSuccess = false; // Змінити на false для тестування помилки
const isSuccess = true;
// Create promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

// Registering promise callbacks
promise.then(
  (value) => {
    console.log(value); // "Success! Value passed to resolve function"
  },
  (error) => {
    console.log(error); // "Error! Error passed to reject function"
  }
);
*/

/*
// const isSuccess = true;
const isSuccess = false;

// Create promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

// Registering promise callbacks
promise
  .then((value) => {
    console.log(value); // "Success! Value passed to resolve function"
  })
  .catch((error) => {
    console.log(error); // "Error! Error passed to reject function"
  });
*/

/*
const isSuccess = true;

// Create promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

// Registering promise callbacks
promise
  .then((value) => console.log(value)) // "Success! Value passed to resolve function"
  .catch((error) => console.log(error)) // "Error! Error passed to reject function"
  .finally(() => console.log("Promise settled")); // "Promise settled"
*/

/*
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
});

promise
  .then((value) => {
    console.log(value); // 5
    return value * 2;
  })
  .then((value) => {
    console.log(value); // 10
    return value * 3;
  })
  .then((value) => {
    console.log(value); // 30
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });
*/

/*
const fetchUserFromServer = (username, onSuccess, onError) => {
  console.log(`Fetching data for ${username}`);
};

fetchUserFromServer(
  "Mango",
  (user) => console.log(user),
  (error) => console.error(error)
);
*/

/*
const fetchUserFromServer = (username, onSuccess, onError) => {
  console.log(`Fetching data for ${username}`);

  setTimeout(() => {
    // Change value of isSuccess variable to simulate request status
    const isSuccess = true;

    if (isSuccess) {
      onSuccess("success value");
    } else {
      onError("error");
    }
  }, 2000);
};

fetchUserFromServer(
  "Mango",
  (user) => console.log(user),
  (error) => console.error(error)
);
*/

/* Перевіримо роботу функції, створивши кілька промісів з різним часом затримки та значеннями. */
/*
const makePromise = ({ value, delay, shouldResolve = true }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });
};

makePromise({ value: "A", delay: 1000 })
  .then((value) => console.log(value)) // "A"
  .catch((error) => console.log(error));

makePromise({ value: "B", delay: 3000 })
  .then((value) => console.log(value)) // "B"
  .catch((error) => console.log(error));

makePromise({ value: "C", delay: 2000, shouldResolve: false })
  .then((value) => console.log(value))
  .catch((error) => console.log(error)); // "C"
*/

/* Без функції цей же код виглядав би ось так: */

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Fulfilled A");
  }, 1000);
})
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Fulfilled B");
  }, 3000);
})
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Rejected C");
  }, 2000);
})
  .then((value) => console.log(value))
  .catch((error) => console.log(error)); // "Rejected C"
