// - однострочный коментарий
// alert();
/*

  многострочный коментарий

*/
/*
console.log('Hello JS'); // string - строка
console.log(100.4); // number - числовой тип данных
console.log(100n); // BigInt - большой целочисленный
console.log(true); // boolean
console.log(false); // boolean
console.log(null); // null - пустое значение
console.log(undefined); // undefined - отстутсвие значения
console.log({ value1: 123 }); // object - компазитный тип данных, может содержать в нутри себя другие типы данных
*/
/*
  var - не испаользуем

  let
  const - неизменяемое значение

  let string; // обьявление переменной
  
  string = 'test'; // присвоение значения переменной
  
  let myName = 'Kyrylo'; // инициализация переменной
  
  let veryLongVariableName = 'test';
let _; // lodash
let $; // JQuery
*/

/*
  с помощью let  обьявите переменную
  залогируйте её значение
  измените значение переменной
  заголируйте её снова

  с помощью const проинициализируйте переменную
  залогируйте её значение
  измените значение переменной
  заголируйте её снова

  после этого залогирйте обе переменные.
  сколько консоль логов отобразилось
*/
let number1;
console.log(number1);
number1 = 25;
console.log(number1);

const number2 = 10;
console.log(number2);
/*
number2 = 100; // Ошибка
console.log(number2); // после ошибок JS останавливает выполнение скрипта
*/

// const number3; Ошибка

const number3 = number1;
let data = 25;

const data2 = 'test';
'24' // 24
'sdyhbfguyg bsufbdsuygfbgua' // NaN

const text = "Антон сказал: \n\t\t\t\t\t\t\t\"Все ок\u00E6\"";
const text2 = 'Антон сказал: "Все ок"';
const text3 = `Д'артаньян сказал: 
"Все ок"`;
// alert(text);
console.log(text);
console.log(text3);
// console.log("Антон сказал: \"Все ок\"")
