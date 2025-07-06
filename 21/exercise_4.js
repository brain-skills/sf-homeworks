// Как это работает:
// Через 3 секунды генерируется случайное число.
// Если число чётное — вызывается resolve.
// Если нечётное — вызывается reject.
// В зависимости от результата в консоль выводится соответствующее сообщение.

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const number = Math.floor(Math.random() * 100) + 1; // случайное число от 1 до 100
    if (number % 2 === 0) {
      resolve(number);  // чётное — успешно
    } else {
      reject(number);   // нечётное — ошибка
    }
  }, 3000);
});

myPromise
  .then(number => {
    console.log(`Завершено успешно. Сгенерированное число — ${number}`);
  })
  .catch(number => {
    console.log(`Завершено с ошибкой. Сгенерированное число — ${number}`);
  });
