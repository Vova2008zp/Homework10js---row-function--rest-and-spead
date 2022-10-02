function multiply(num1, num2) {
  if (
    typeof num1 === 'number' &&
    typeof num2 === 'number' &&
    !isNaN(num1 - num2)
  ) {
    // все хорошо
    return num1 * num2;
  }
  // все плохо
  throw new RangeError('Incorrect parameters, expected two numbers');
}

const user = {
  name: 'Test',
  salary: 3000,
  monthsOfPayment: 4,
};

try {
  // пробуем выполнить опасный код
  alert('try');
  const newPayment = multiply(user.salary, user.monthsOfPayment); // опасный код
  alert(`You have been payed ${newPayment} $`);
} catch (err) {
  // что делать в случае ошибки
  alert('catch');
  if (err instanceof TypeError) {
    alert('Bad type');
  } else if (err instanceof RangeError) {
    alert('range');
  }
} finally {
  // код который выполнится в любом случае
  alert('finally');
}

// throw 1235445;

/*
Error - базовая ошибка
RangeError - ошибка, при выходе за некоторый диапазон
TypeError - значение некорректного типа

EvalError - связано с eval()
InternalError - ошибка мозилы 
ReferenceError - обращение к несуществующей переменной
SyntaxError - ошибка, возникающая при попытке интерпретировать синтаксически неправильный код
URIError - ошибки связанные с адресом (URL/ URI)
*/
