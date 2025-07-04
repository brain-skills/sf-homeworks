ЗАДАНИЕ 1

function printOwnProperties(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

Пример использования 

const example = { a: 1, b: 2 };
Object.prototype.c = 3;

printOwnProperties(example)

ЗАДАНИЕ 2

function hasOwnPropertyByName(propName, obj) {
  return obj.hasOwnProperty(propName);
}

Пример использования:

const obj = { name: "Alice" };
console.log(hasOwnPropertyByName("name", obj)); // true
console.log(hasOwnPropertyByName("toString", obj)); // false

ЗАДАНИЕ 3

function createPureObject() {
  return Object.create(null);
}
Пример использования:

const pureObj = createPureObject();
console.log(Object.getPrototypeOf(pureObj)); // null







