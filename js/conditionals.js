const getSumOfTwo = function (num1, num2) {
  // debugger;
  if (!isNaN(num1) && !isNaN(num2)) {
    return num1 + num2;
  } else {
  }

  alert('vse ploxo');
  return NaN;
};

// if ... else
// switch case

// const input = prompt('Choose your fighter: \n1-Sub-Zero\n2-Scorpion\n3-Raiden');
// // debugger;
// switch (input) {
//   case '1':
//   case 1: {
//     alert('You picked Sub-Zero');
//     break; // останавливает выполнение
//   }
//   case '2': // ничего не сделал и пошел дальше
//   case 2: {
//     alert('You picked Scorpion');
//     break;
//   }
//   case '3':
//   case 3: {
//     alert('You picked Raiden');
//     break;
//   }
//   default:
//     alert('This fighter doesnt exist');
// }

// input === 1
// реализовать с помощью switch калькулятор
// он должен уметь умножать делить
// складывать и вычитать 2 числа

// let expression = 1;

// const num1 = -10;
// const num2 = 20;
// const operator = prompt('enter operator:');
// /*
//   +,-,*,/
// */
// switch (operator) {
//   // expression === 1
//   case '+': {
//     console.log(num1 + num2);
//     break;
//   }
//   case '-': {
//     console.log(num1 - num2);
//     break;
//   }
//   case '*': {
//     console.log(num1 * num2);
//     break;
//   }
//   case '/': {
//     console.log(num1 / num2);
//     break;
//   }
//   case '^': {
//     console.log(num1 ** num2);
//     break;
//   }
//   default:
//     console.log('Unsupported operator');
// }

const sum = function (num1, num2) {
  if (
    typeof num1 !== 'number' ||
    typeof num2 !== 'number' ||
    isNaN(num1 - num2)
  ) {
    return null;
  }
  return num1 + num2;
};
// ... для остальных

const calculate = function (num1, num2, operator) {
  switch (operator) {
    // expression === 1
    case '+':
      return sum(num1, num2);

    case '-':
      return num1 - num2;

    case '*':
      return num1 * num2;

    case '/':
      return num1 / num2;

    case '^':
      return num1 ** num2;

    default:
      return null;
  }
};

const expression = true;

if (expression) {
  console.log(1);
} else {
  console.log(2);
}

expression ? console.log(1) : console.log(2);
/*
// BAD PRACTICE
// if (expression > 0) {
//   console.log(1);
// } else if (expression < 0) {
//   console.log(2);
// } else {
//   console.log(3);
// }

// expression > 0
//   ? console.log(1)
//   : expression < 0
//   ? console.log(2)
//   : console.log(3);
*/
let userName = 'Test';
let message;
// const isGreeting = confirm();

// if (isGreeting) {
//   message = 'Hello ' + userName;
// } else {
//   message = 'Bye ' + userName;
// }

// const message2 = isGreeting ? 'Hello ' + userName : 'Bye ' + userName;

/*
  есть переменная verdict
  если verdict = true то вывести алертом сообщение "Hello world"
  если verdict = false то вывести консоль логом NaN
*/

const verdict = false;
verdict ? alert("Hello world") : console.log(NaN)
