// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);

// бесконечный цикл BAD
// while (true) {
//   console.log(1);
// }

// let i = 0;

// while (i < 20) {
//   console.log(i);
//   i++;
// }

// i = 0;
// while (true) {
//   console.log(i);
//   i++;
//   if (i >= 20) {
//     break;
//   }
// }

// let shouldContinue = true;
// i = 0;

// while (shouldContinue) {
//   console.log(i);
//   i++;
//   shouldContinue = confirm('Should continue ?');
// }
/*
залогируйте в цикле четные числа от 0 до 20
*/

let counter = 0;

// while (counter < 21) {
//   if (counter % 2 === 0) {
//     console.log(counter);
//   }
//   counter++;
// }

counter = 0;

// while (counter < 21 && counter % 2 === 0) {
//   console.log(counter);

//   counter += 2;
// }

// while (true) {
//   if (counter % 2 === 0) {
//     console.log(counter);
//   }

//   counter += 2;
//   if (counter > 20) {
//     break;
//   }
// }

// while (counter < 21) {
//   // debugger;
//   counter++;
//   if (counter % 2 !== 0) {
//     continue; // при попадании на него прерывает текущую итерацию и начинают новую
//   }

//   console.log(counter);
// }

// =============================================

// do {
//   console.log('do while');
// } while (false);

// let expression = true;
// let j = 0;
// while (expression) {
//   console.log('while');
//   j++;
//   if (j === 2 || j === 5) {
//     continue;
//   }
//   // if() {
//   //   break;
//   // }
//   const input = +prompt('Enter ' + j);

//   if (input === j) {
//     expression = false;
//   }
// }

/*
for (variables creation; expression ; post iteration action ) {
  
}
*/

for (let i = 0; i < 10; i++) {
  console.log('for loop');
  console.log(i);

  i++;
}

// написать функцию, принимающую 2 числа и
// возводящую первое число в степень второго
// не пользоваться оператором ** или Math.pow()
// предположите что степень положительная

const toPower = function (number, exp) {
  let result = 1;
  
  for (let i = 0; i < exp; i++) {
    result = result * number;
  }
  // let result = result;
  // for (let i = 1; i < exp; i++) {
  //   result = result * number;
  // }

  return result;
};

// for (let i = 0; i < 3; i++) {
//   debugger;
//   for (let j = 0; j < 3; j++) {
//     console.log(i , j)
//   }
// }
