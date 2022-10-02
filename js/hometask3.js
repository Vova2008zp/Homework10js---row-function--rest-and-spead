/*
Создайте функцию, которая принимает неограниченное количество входящих данных, и возвращает количество строк, переданных ей в этом массиве. Решить с использованием стрелочных функций.
*/
const amountOfString = (...data) =>
  data.filter((element) => typeof element === 'string').length;
console.log(amountOfString(2, 4, "10", 12, "98", "54", 1));

/*
Создайте функцию продвинутого калькулятора. Он принимает знак, а  затем неограниченное количество чисел, над которыми проведет указанную операцию. 
*/
function calc(sign,...numbers) {
  switch (sign.trim()) {
    case '+' : {
      return numbers.reduce((num1, num2) => num1 + num2);
    }
    case '-' : {
      return numbers.reduce((num1, num2) => num1 - num2);
    }
    case '*' : {
      return numbers.reduce((num1,num2) => num1 * num2);
    }
    case '/' : {
      return numbers.reduce((num1, num2) => num1 / num2);
    }
    default: throw new Error('Sign is not correct')
  }
}
console.log(calc('+', 5,2))
/*
Имея массив чисел, найдите в нем самое большое. Не используйте циклы или методы перебора массива.
*/
const arr = [50, 23, 31, 34, 54, 123]
const getMaxNumber = (...numbers) => Math.max(...arr);
console.log(getMaxNumber());