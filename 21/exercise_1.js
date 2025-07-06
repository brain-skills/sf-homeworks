const xmlString = `
<list>
    <student>
        <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
</list>`;

// Парсим XML
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "application/xml");

// Получаем все теги <student>
const studentsNodes = xmlDoc.querySelectorAll("student");

const students = Array.from(studentsNodes).map(student => {
  const nameNode = student.querySelector("name");
  const firstName = nameNode.querySelector("first").textContent;
  const secondName = nameNode.querySelector("second").textContent;
  const lang = nameNode.getAttribute("lang");
  const age = Number(student.querySelector("age").textContent);
  const prof = student.querySelector("prof").textContent;

  return {
    name: `${firstName} ${secondName}`,
    age,
    prof,
    lang
  };
});

const result = { list: students };
console.log(result);