let let1 = 'test';

const func1 = function() {
  let let1 = 12345;

  console.log(let1);
}
func1()
console.log(let1);


let otherLet = 'var';

if(true) {
  let otherLet = 12345;

  console.log(otherLet);
}

console.log(otherLet);




var var1 = 'test';

const func = function() {
  var var1 = 12345;

  console.log(var1);
}
func()
console.log(var1);


var otherVar = 'var';

if(true) {
  var otherVar = 12345;

  console.log(otherVar);
}

console.log(otherVar);

