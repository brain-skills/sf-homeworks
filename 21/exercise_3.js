// Как работает:
// Проверяет, есть ли имя и дата в localStorage.
// Если нет — это первый визит: просит ввести имя и сохраняет дату.
// Если есть — показывает приветствие с прошлым визитом и обновляет дату.

// Ключи для хранения в localStorage
const nameKey = "userName";
const dateKey = "lastVisit";

// Получаем сохранённые данные
const savedName = localStorage.getItem(nameKey);
const savedDate = localStorage.getItem(dateKey);

// Текущая дата и время
const now = new Date();
const formattedDate = now.toLocaleString(); // формат: день.месяц.год, часы:минуты

if (!savedName || !savedDate) {
  // Первый визит
  const userName = prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя.");
  if (userName) {
    localStorage.setItem(nameKey, userName);
    localStorage.setItem(dateKey, formattedDate);
  }
} else {
  // Повторный визит
  alert(`Добрый день, ${savedName}! Давно не виделись. В последний раз вы были у нас ${savedDate}.`);
  // Обновляем дату последнего визита
  localStorage.setItem(dateKey, formattedDate);
}
