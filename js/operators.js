// const result = (2 + 2) * 2;
// console.log(123);
// /*
// 1+1
// 1-1
// 1*1
// 1/1
// 1%1
// 1** 1

// */
// // let num = 5;
// // num = num + 1;
// console.log('=inc decrement=');
// // console.log(num);
// // // num++;
// // // console.log(num);
// // // ++num;
// // // console.log(num);
// // console.log(++num);
// // console.log(num++);
// // console.log(num);
// // ++num++;

// let num2 = 10;
// // num2++;
// // num2++;
// // num2++;
// // num2++;
// // num2++;
// // num2 = num2 + 5;
// num2 += 5;

// const x1 = 5;
// const x2 = 10;
// const res = x1 * x2;
// console.log(num2);

// let value = -5;
// let strange = true;

// console.log(+true);

// let verdict = true;

// /*
//   ! - приводит значение к логическому и инвертирует его
//   !! - приводит значение к логическому
//   console.log(!!value);
// */

// //создать две переменные и вывести в консоль резутьатт их умножения
// const a1 = 10;
// const a2 = 50;
// console.log(a1 * a2);
// // создать две переменные и вывести в консоль результат их деления
// const a3 = 10;
// const a4 = 50;
// console.log(a3 / a4);
// // создать две переменные и вывести в консоль резутьатт остатка от деления
// const a5 = 10;
// const a6 = 50;
// console.log(a5 % a6);
// //создайте переменную со строкой "0x500" и выведите в консоль результат
// //её приведения к числу
// const str = '0x500';
// console.log(+str);
// // создайте переменную со значением 300 / 5 + 27 * -3 + 21  и выведите
// // в консоль результат её приведения к булевому значению
// const expression = 300 / 5 + 27 * -3 + 21;
// console.log(!!expression);
// // Сократите следующие записи с помощью использования операторов присвоения

// let num = 10;
// num += 5;
// num /= 3;
// num *= 50;
// num -= 15;

// console.log(num);
// // выведите в консоль значение num

// 10 > 5 // true
// 10 >= 10 // true
// 10 < 10 // false

// 'test' > 'text' // false s < x
// 'test' > 't' // true

// 10 === 10 // true
// 10 !== 5 // true
// 1 === '1' // false

// let val = NaN;

// console.log(val === val); // false для NaN

// isNaN(val) // false для NaN

// 1 == '1' // true ОЧЕНЬ ПЛОХО

// const number = 100;

// number > 20

// number < 50

// console.log(20 < number < 50 ); // true хотя должно быть false
// console.log(number > 20 && number < 50)

// /*

//  AND (&&) возвращает первую ложь или последнюю правду
//   x   |  y   | res
//  true   true    true
//  true  false    false
//  false true     false
//  false false    false

//  OR (||) возвращает первую правду или последнюю ложь

//    x   |  y   | res
//  true   true    true
//  true  false    true
//  false true     true
//  false false    false
// */

// rest operator
function subtract(...numbers) {
  // let result = numbers[0];

  // numbers.forEach((number, i, arr) => {
  //   if(i !== 0) {
  //     result -= number;
  //   }
  // });

  return numbers.reduce(
    (res, currentNumber, index, arr) => res - currentNumber
  );
}

subtract(5, 2, 3);

const arr = [
  1, 2, 4, 6, 7, 8, 45, 51, 498, 984, 61, 648, 9849, 8498, 4, 65, 413, 1, 8,
  498, 4798, 4, 451,
];
// subtract(arr[0],arr[1],arr[2],arr[3])
new subtract(...arr, 6); // spread operator -> subtract(arr[0],arr[1],arr[2],arr[3])
const maleName = ['Anton', 'Ivan', 'Artem'];
const femaleNames = ['Inna', 'Nastya', 'Ivanna'];

const names = [...maleName, ...'Null', ...femaleNames];

const user = {
  firstName: 'Test',
  age: 12,
};

const fullUser = {
  lastName: 'Testenko',
  ...user,
};

function someFunc(options) {
  const defautOptions = {
    amount: 10,
    data1: 'test',
  };

  const finalOptions = {
    ...defautOptions,
    ...options
  };

  return finalOptions;
}

// someFunc({data1: true})