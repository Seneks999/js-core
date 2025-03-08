Ось вміст файлу 1-timer.html:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Timer</title>
    <link rel="stylesheet" href="./css/styles.css" />

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/izitoast/dist/css/iziToast.min.css"
    />
  </head>
  <body>
    <main>
      <div class="container">
        <load src="./partials/back-link.html" />
        <h1 class="main-title">Timer</h1>

        <input type="text" id="datetime-picker" />
        <button type="button" data-start disabled>Start</button>
        <!-- Вимкнена кнопка -->

        <div class="timer">
          <div class="field">
            <span class="value" data-days>00</span>
            <span class="label">Days</span>
          </div>
          <div class="field">
            <span class="value" data-hours>00</span>
            <span class="label">Hours</span>
          </div>
          <div class="field">
            <span class="value" data-minutes>00</span>
            <span class="label">Minutes</span>
          </div>
          <div class="field">
            <span class="value" data-seconds>00</span>
            <span class="label">Seconds</span>
          </div>
        </div>
      </div>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
    <script src="https://cdn.jsdelivr.net/npm/izitoast/dist/js/iziToast.min.js"></script>

    <script type="module" src="./js/1-timer.js"></script>
  </body>
</html>

Ось вміст файлу 1-timer.js:
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startButton = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');
let timerId = null;
let userSelectedDate = null;

// Налаштування для flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate <= new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};

// Ініціалізація flatpickr
flatpickr('#datetime-picker', options);

// Додавання нуля до однозначних чисел
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

// Конвертація мілісекунд у дні, години, хвилини і секунди
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// Оновлення інтерфейсу таймера
function updateTimerInterface({ days, hours, minutes, seconds }) {
  daysEl.textContent = addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minutesEl.textContent = addLeadingZero(minutes);
  secondsEl.textContent = addLeadingZero(seconds);
}

// Старт таймера
function startTimer() {
  timerId = setInterval(() => {
    const timeDifference = userSelectedDate - new Date();

    if (timeDifference <= 0) {
      clearInterval(timerId);
      updateTimerInterface({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      iziToast.success({
        title: 'Complete',
        message: 'Countdown finished!',
      });
      return;
    }

    const timeLeft = convertMs(timeDifference);
    updateTimerInterface(timeLeft);
  }, 1000);

  startButton.disabled = true;
  document.querySelector('#datetime-picker').disabled = true;
}

startButton.addEventListener('click', startTimer);

Необхідно щоб було:
При першому завантаженні сторінки кнопка Start не активна.
При кліку на інпут відкривається календар, де можна вибрати дату.
При обранні дати з минулого, кнопка Start стає неактивною і з’являється повідомлення з текстом "Please choose a date in the future".
При обранні дати з майбутнього кнопка Start стає активною.
При натисканні на кнопку Start вона стає неактивною, на сторінку виводиться час, що лишився до обраної дати у форматі xx:xx:xx:xx, і запускається зворотний відлік часу до обраної дати.
Кожну секунду оновлюється інтерфейс і показує оновлені дані часу, який залишився.
Таймер зупиняється, коли доходить до кінцевої дати, тобто залишок часу дорівнює нулю і інтерфейс виглядає так 00:00:00:00.
Час в інтерфейсі відформатований і, якщо воно містить менше двох символів, на початку числа доданий 0.