'use strict';
// const data = console.log(123453523); // всегда undefined

// const name = prompt('Enter your name:'); // string

// const greetingMessage = 'Hello ' + name;

// alert(greetingMessage);

// const num1 = +prompt('Enter first number');
// const num2 = Number(prompt('Enter second number'));

// const num1 = prompt('Enter first number');
// const num2 = prompt('Enter second number');

// const result = +num1 + Number(num2);

// const sumMessage = num1 + ' + ' + num2 + ' = ' + result;
// const message = num1 + ' + ' + num2 + ' = ' + (+num1 + Number(num2));
// alert(sumMessage);

// alert(num1 + ' + ' + num2 + ' = ' + (+num1 + Number(num2)));

// arrow function
const arrowSum = (num1, num2) => num1 + num2;

function square(n) {
  return n * n;
}

const squareArr = (n) => n * n;

const testStr = () => 'test';
const testObj = () => ({});

// const betterSum = (numbers) => {
//   const sum = numbers.reduce((sum, number, index, arr) => {
//     return sum + number;
//   });

//   return sum;
// };
const betterSum = (numbers) => numbers.reduce((sum, number) => sum + number);

const res1 = betterSum([1, 2, 4, 6, 7, 8]);
const testFunc = () => this;

const newspaper = {
  name: 'Теленеделя',
  articles: [
    { name: 'article 1', text: 'asdkjdfdsjfndskjfdsnfdskj', author: 'Anton' },
    { name: 'article 2', text: 'asd', author: 'Ivan' },
    { name: 'article 3', text: 'safd', author: 'Nastya' },
    { name: 'article 4', text: 'dsffdgfd', author: 'Anton' },
  ],
  showArticles: function () {
    this.articles.forEach(function (artricle) {
      debugger;
      console.log(
        `Newspaper ${this.name} Article: ${artricle.name} Author: ${artricle.author} text: ${artricle.text}`
      );
    });
  },
  showArticles1: function () {
    const that = this;
    this.articles.forEach(function (artricle) {
      // debugger;
      console.log(
        `Newspaper ${that.name} Article: ${artricle.name} Author: ${artricle.author} text: ${artricle.text}`
      );
    });
  },
  showArticles2: function () {
    const callback = function (artricle) {
      // debugger;
      console.log(
        `Newspaper ${this.name} Article: ${artricle.name} Author: ${artricle.author} text: ${artricle.text}`
      );
    };

    // const newCallback = callback.bind(this);

    this.articles.forEach(callback.bind(this));
  },
  betterShowArticles: function () {
    this.articles.forEach((artricle) => {
      console.log(
        `Newspaper ${this.name} Article: ${artricle.name} Author: ${artricle.author} text: ${artricle.text}`
      );
    });
  },
};

// functional experssion
const getSumOfTwo = function (num1, num2) {
  // тело функции
  const result = +num1 + +num2;

  // return result;
};

// functional declaration
function getSumOfTwo2(num1, num2) {
  // тело функции
  const result = +num1 + +num2;
}

// const test12345 = new getSumOfTwo2();

const myFunc = function (num1, str2) {
  const test1 = 1;
  return test1;
};

// детерминированные функции - при одинаковых входных данных
// одинаковые реузльтаты
function sum(num1 = 2, num2 = 3) {
  return num1 + num2;
}

// побочные эффекты - читать и модифицировать значения глобальных
// переменных, осуществлять операции ввода-вывода,
// реагировать на исключительные ситуации, вызывать их обработчики.
let test = 1;

function sum2(num1 = 2, num2 = 3) {
  test++;
  return num1 + num2 + Math.random();
}
let test2;
test2 = sum(2, 2);

function recursive() {
  recursive();
}

function countdown(number) {
  debugger;
  console.log(number);

  if (number > 1) {
    // рекурсивный случай
    countdown(number - 1);
  }

  return 'start'; // базовый случай
}

/*
 Этапы рекурсии
  1. вызываем рекурсивно функию пока выполняется условие
  2. дохоим до базы рекурсии
  3. все функции по порядку завершают работу
*/

/*
  Создайте рекурсивную функцию, логирующую числа в диапазоне
  диапазон указывается вами
  logRange (5, 10)
  logRange (10, 5)
*/

// function logRange(minNumber, maxNumber) {
//   // debugger;
//   if (maxNumber < minNumber) {
//     logRange(maxNumber, minNumber);
//   }

//   if (minNumber < maxNumber) {
//     console.log(minNumber);
//     logRange(minNumber + 1, maxNumber);
//   }

//   if(minNumber === maxNumber) {
//     console.log(minNumber);
//   }
// }

function logRange(num1, num2) {
  debugger;
  const minNumber = Math.min(num1, num2);
  const maxNumber = Math.max(num1, num2);

  console.log(minNumber);

  if (minNumber < maxNumber) {
    logRange(minNumber + 1, maxNumber);
  }
}

const tree = {
  value: 8,
  left: {
    value: 3,
    left: {
      value: 1,
    },
    right: {
      value: 6,
      left: {
        value: 4,
      },
      right: {
        value: 7,
      },
    },
  },
  right: {
    value: 10,
    right: {
      value: 14,
      left: {
        value: 13,
      },
    },
  },
};

const easyTree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3,
    },
  },
  right: {
    value: 4,
  },
};

function reduceTree(tree) {
  // 1 нашли значение узла
  let result = tree.value;

  // 2 нашли сумму левых узлов
  if (tree.left) {
    result += reduceTree(tree.left);
  }
  // 3 нашли сумму правых узлов
  if (tree.right) {
    result += reduceTree(tree.right);
  }
  // 4 вернуть результат
  return result;
}

function toPower(number, exp) {
  // 1, 0
  if (exp === 1) {
    return number;
  } else if (exp === 0) {
    return 1;
  }

  // 2
  // if (exp > 0) {
  //   return number * toPower(number, exp - 1);
  // } else {
  //   return 1 / (number * toPower(number, Math.abs(exp) - 1));
  // }

  return exp > 0
    ? number * toPower(number, exp - 1)
    : 1 / (number * toPower(number, Math.abs(exp) - 1));
}
