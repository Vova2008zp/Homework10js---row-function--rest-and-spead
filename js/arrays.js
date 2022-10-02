/*
test1@tes.test
test2@tes.test
test3@tes.test
test4@tes.test
test5@tes.test
*/

// const userEmails = {
//   0: "test1@tes.test",
//   1: "test2@tes.test",
//   2: "test3@tes.test",
//   3: "test4@tes.test",
//   4: "test5@tes.test",
// };

// const userEmailsArr = new Array(
//   "test1@tes.test",
//   "test2@tes.test",
//   "test3@tes.test"
// );

// const arr = [true, 10, 'test'];
// const emptyArr = [];
// // const arr = [10, userEmails];

// const value = arr[2]; // получение значения из массива
// arr[0] = 20; // измение значения в массиве
// arr[2] = 500; // добавляет значение если его нет
// // arr[30] = 1000; // плохо, можно ошибится
// // arr.test = 'test'; // плохо
// arr[arr.length] = 1000;

const userNames = ['Test', 'Null', 'Anton', 'Pavlo', 'Olena'];

// ложит вищи в конец массива
userNames.push('Anton');
userNames.push('Kyrylo');
let newArrLength = userNames.push('Mefodiy', 'Ivan', 'Nastya');

// удаляет последний єлемент из массива и сохраняет его
const deletedFromEnd = userNames.pop();
// userNames.pop();

// ложит вищи в начало массива
userNames.unshift('Felix');
newArrLength = userNames.unshift('John', 'Jane');

// удаляет первый єлемент из массива и сохраняет его
const deletedFromStart = userNames.shift();
/*
  создайте массив машин
  положите в конец 3 машины
  удалите и сохраните последнюю машину
  положите в начало массива 1 машину 
  положите в начало массива еще 1 машину 
  удалите самую первуюб машину и сохраните её в переменную
*/
const cars = ['car1', 'car2'];
const newArrlength = cars.push('car3', 'car4', 'car5');
const lastCar = cars.pop();
cars.unshift('1car');
cars.unshift('2car');
const firstCar = cars.shift();

const myCar = 'Best car ever';
cars.push(myCar);

// удаляет все єлементы начиная с указанного элемента и сохраняет их в новый массив
// userNames.splice(3);
// удаляет 1 єлемент начиная с 3 элемента и сохраняет их в новый массив
// const result = userNames.splice(3,1);

// удаляет 2 єлементa начиная с 3 элемента и сохраняет их в новый массив
// затем вставляет на их место 4 новых строки
// const result = userNames.splice(
//   3,
//   2,
//   "INSERTED1",
//   "INSERTED2",
//   "INSERTED3",
//   "INSERTED4",
//   [1, 2, 3]
// );

// const result = userNames.splice(
//   -3,
//   2,
//   "INSERTED1",
//   "INSERTED2",
//   "INSERTED3",
//   "INSERTED4",
//   [1, 2, 3]
// );

const arr = [
  [1, [2, [3]]],
  [[4, [5]], 6],
  [7, [[8], 9]],
  'test',
  {
    name: 'test',
  },
];
// console.log(arr[1][2]);

userNames.push([1, 2, 3]);

// создаем полную поверхностную копию массива
const copy = userNames.slice();

// скопировать все єлементі начная с третьего
// и до пятого Не включая его
const copy1 = userNames.slice(3, 5);

// говорит, есть ли в массиве значение, плохо работает с обьектами
const result = userNames.includes('Anton');
// ищет и возвращает первый попавшийся индекс искомого значения
// если не нашел то возвращает -1
const antonIndex = userNames.indexOf('Anton', 5);

// создает массив на осонвании другого массива,
// и приклеивает ему в конец значения
// если приклеиваем массиві, то они разбираются
// и приклеиваются их составляющие
const bonusArray = [[1], [2], [3], [4]];
const concatedArr = userNames.concat(undefined, 1, bonusArray);

// переворачивает массив, мутируя его
const newUserNames = userNames.reverse();

// создает новый массив, в котором вложенные подмассивы
// убираются до определенной глубины
// немутирующий
const flattendArr = arr.flat(); // на 1 уровень
// const flattendArr = arr.flat(10) // на 10 уровней
// const flattendArr = arr.flat(Infinity) // все убрать

// создает сторку на основании массива, которые разделяются разделителем
// который может указываеться польователем (по умолчанию запятая)
// немутирующий
const strFromArr = userNames.join(); // ','
const strFromArr2 = userNames.join('-'); //-

const numbers = [5, 89, 4, 42, 13, 48, 7];

const sortFunc = function (currentValue, nextValue) {
  if (currentValue < nextValue) {
    return -1; // currentValue занимает меньшие индексы (сортировка по возрастанию )
  }

  // return 0 - currentValue и nextValue не меняют позицию

  // return 1 - currentVnextValuealue занимает меньшие индексы (сортировка по убыванию )

  // return currentValue - nextValue; для чисел
};
// сортирует массив, мутируя его
// может принимать сортирующую функцию, для настройки  сортировки
// const sorted = numbers.sort();
const sorted = numbers.sort(sortFunc);

// HOF - функция высшего порядка
// функция принимающая на вход другую функкцию
// или возвращает после работы другую функцию

// v1
// const highOrderFunction1 = function (func) {
//   const secret = 'SECRET DATA';
//   func(secret);

//   // return function() {

//   // }
// };

// highOrderFunction1(alert);

// v2
// const highOrderFunction2 = function () {
//   console.log(5);
//   return function () {
//     console.log('inner');
//   };
// };
// const innerFunc = highOrderFunction2();
// innerFunc();

const callback = function (currentElem, index, arr) {
  // console.log('value: ', currentElem);
  // console.log(`index:  ${index}`);
  // console.log(`array:`);
  // console.log(arr);
};

userNames.forEach(callback);

const newNumbers = numbers.map(function (currentElem, index, arr) {
  const obj = {
    value: currentElem,
    id: index,
  };

  if (obj.value < 10) {
    obj.value = 200;
  }
  return obj;
});

const onlyUserNames = userNames.filter(function (elem, index, arr) {
  // console.log(elem);
  // console.log(typeof elem === 'string');

  // if (typeof elem === 'string') {
  //   return true;
  // }
  // return false;

  return typeof elem === 'string';
});

const foundValue = newNumbers.find(function (elem, index, arr) {
  return elem.value < 50 && elem.value > 20;
});

const foundIndex = newNumbers.findIndex(function (elem, index, arr) {
  return elem.value < 50 && elem.value > 20;
});

const isThereAntons = newUserNames.some(function (elem) {
  return elem === 'Anton';
});

const isEverybodyAntons = newUserNames.every(function (elem) {
  return elem === 'Anton';
});

const otherArr = [{ data: 1 }, { data: 2 }, { data: 3 }];

const newArr2 = otherArr.map(function (elem, i) {
  // elem.telephoneNumber = 158498484586 + i;

  // const newObject = {
  //   data: elem.data,
  //   telephoneNumber: 158498484586 + i,
  // };

  const newObject = structuredClone(elem);

  newObject.telephoneNumber = 158498484586 + i;

  return newObject;
});
