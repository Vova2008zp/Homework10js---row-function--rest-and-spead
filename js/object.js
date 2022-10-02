// const obj = {
//   display: 'flex',
//   lineHeiht: 1.5,
//   opacity: 0,
//   'background color': 'red',
//   1: 4551,
// };

// const phone = {
//   color: "blue",
//   model: "Moto G Plus",
//   switchOn: function () {
//     // method
//     alert("Switched On");
//   },
//   cpu: {
//     model: "Qualcom Snapdragon 730",
//     frequency: 4,
//     frequencyUnit: "GHz",
//   },
//   test: "test",
// };
// // CRUD
// // CREATE
// const obj1 = {}; // literal, BEST
// const obj2 = Object(); // BAD
// const obj3 = new Object(); // BAD
// // READ
// console.log(phone);
// // alert(phone);
// // READ object values
// console.log(phone.color);
// console.log(phone.cpu);
// console.log(phone.cpu.frequency);
// console.log(phone.ljnhgifdhtgreiufhdifhdguyfdgd); // undefined
// // UPDATE property
// phone.color = "black";
// // Add property after creation
// // let battery = 4000;
// phone.battery = 4000;
// phone.battery = {
//   amount: 4000,
//   unit: 'mAh',
// };
// DELETE
// delete phone.test;
// ctrl + /

const obj = {
  // key - string || Symbol
  // value - any
  // key : value,
  // key2: value2,
  // method: function () {}
};

const message = {
  author: "Ivan Vlasov",
  text: "методы?",
  date: "17:54", // data курильщика
  // date: new Date(2022,09,06,17,54)
  test: {
    value: {
      data: 12345,
    },
  },
  kfbkdsdksj: "sdsafda",
};

const message2 = {
  author: "Ирина Мазур",
  text: "фунуция",
  date: "17:52", // data курильщика
  // date: new Date(2022,09,06,17,52)
};

// console.log(message.author);
// console.log(message);
// console.log(message.test.value.data);

/*
  создать 2 -3 обьекта пользователей
  у пользователей должны быть
  имя
   фамилия
   возраст
   функция чистки зубов
*/
// const user1 = {
//   firstName: 'Test',
//   lastName: 'Testenko',
//   age: 42,
//   brushTeeth: function () {
//     console.log('Burshing teeth ...');
//   },
// };

// const user2 = {
//   firstName: 'Null',
//   lastName: 'Nullovich',
//   age: 50,
//   brushTeeth: function () {
//     console.log('Burshing teeth ...');
//   },
// };

// const user3 = {
//   firstname: 'Undefined',
//   lastnAme: 'Undefined',
//   age: 15,
//   brushTeeth: function () {
//     console.log('Burshing teeth ...');
//   },
// };

// функция - конструктор
// PascalCase
// const User = function (firstName, lastName, age, email) {
//   // debugger;
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.email = email;

//   this.brushTeeth = function () {
//     return "Burshing teeth ...";
//   };

//   return false; // в режиме конструктора игнорируется
// };

// function createUser() {
//   const firstName = prompt();
//   // const firstName = prompt();
//   // const firstName = prompt();
//   // const firstName = prompt();

//   const newUser = new User(firstName);

//   return newUser;
// }

// const CompanyName = function () {}
// const user1 = new User("Test", "Testenko", 42, "test@test.test");
// const user2 = createUser();
// const user4 = new User("Anton", "Antonovich", 12, "test1@test.test"); // правильно
// const user5 = User('Anton', 'Antonovich', 12); // неправильный вызов

/*
  нужно получить 2 числа от пользователя
  сложим их
  и покажем пользователю результат в формате следущей строки
  number1 + number2 = sum
*/

// const number1 = +prompt("first number");
// const number2 = +prompt("second number");
// if (isNaN(number1 - number2)) {
//   alert("bad input");
// } else {
//   const sum = +prompt(`${number1} + ${number2} = ?`);
//   if (isNaN(sum)) {
//     alert("bad input");
//   } else {
//     // if(number1 + number2 === sum) {
//     //   alert(`${number1} + ${number2} === ${sum}`);
//     // } else {
//     //   alert(`${number1} + ${number2} !== ${sum}`);
//     // }
//     // const equalitySignResult = number1 + number2 === sum ? "===" : "!==";
//     // alert(`${number1} + ${number2} ${equalitySignResult} ${sum}`);
//     alert(`${number1} + ${number2} ${number1 + number2 === sum ? "===" : "!=="} ${sum}`);
//   }
// }

// const sum = number1 + number2;

// if (isNaN(number1 - number2)) {
//   alert("bad input");
// } else {
//   // alert(number1 + ' + ' + number2 + ' = ' + sum);
//   alert(`${number1} + ${number2} = ${number1 + number2}`);
// }

// alert("Рец'епт:\nмука-10ст. ло\"жек\nсахар - много");

const str = ``; // шаблонная строка

// alert(`Рец'епт:
//                            мука-10ст. ло"жек
//           сахар - мн
// ого`);

const test1 = "Anton";
const test2 = "Anton";

console.log(test1 === test2); // сравнение по значению (для примитивов)

const obj1 = {
  name: "Anton",
  age: 20,
};

const obj2 = {
  name: "Anton",
  age: 20,
};

console.log(obj1 === obj2); // сравнение по сслыке (месту в памяти)

const obj3 = obj1;

console.log(obj1 === obj3);

obj3.age = 100;

const changeStuff = function (object, value) {
  const newObj = object;

  newObj.test = value;

  return newObj;
};

const testObj = { name: "test" };
const changedObj = changeStuff(testObj, 12345);

// const obj12 = new Object({test:1234});
// const obj23 = {test:1234}; // syntax sugar

const user100 = {
  testTest: 123,
  10: 345,
  "first name": "Anton",
};

// console.log(user100["testTest"]);

// console.log(user100.testTest);
// console.log(user100["first name"]);

// console.log(user100['10']);
console.log(user100[20 / 2]);

// const key = "first name";

// key;

// console.log(user100[key]);

// const user101 = {
//   testTest: 123,
//   10: 345,
//   [key]: 'Anton',
//   // key : "first name"
//   // key : key
//   key
// };
// user101[key] = 50;

// создайте обьект юзера  с 2-3 свойствами по выбору
// промптом спросите ключ свойства, которое надо показать
// затем заалерте следующее сообщение
// Запрашиваемое свойство = значениеСвойства

// const admin = {
//   id: 1233545423,
//   name: "Admin",
//   age: 12354,
//   password: "asdsafdffsagrhr235423",
// };

// const key = prompt("Введите искомый ключ");

// alert(`Значение введенного ключа ${admin[key]}`);
