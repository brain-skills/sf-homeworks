const obj = {
  name: "Anton",
  age: 36,
  skills: ["Javascript", "HTML", "CSS"],
  salary: 80000
};

// Преобразуем объект в JSON-строку с отступами для читаемости
const jsonString = JSON.stringify(obj, null, 2);
console.log(jsonString);
