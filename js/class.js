'use strict';

/*
OOП принципы

1* абстракция - описываете обьект максимально достаточно для решения задачи
2. инкапсуляция - сокрытия реализации обьекта / логики
3. наследование - обьекты потомки могут наследовать свойства / методы а не пересоздавать их
4. полиморфизм - повзоляет методам схожих классов реализовыватся по разному
*/

/* наследование */

/*
class User
email
password

createMessage() -> '(user) created message'

class Moder -> User
*/
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.isBanned = false;
  }

  createMessage() {
    return `${this.email} created message`;
  }
}

const u1 = new User('u@u', 123454543);

class Moder extends User {
  constructor(email, password, age) {
    super(email, password);
    this.age = age;
  }

  deleteMessage() {
    return 'message deleted';
  }
}

const moder1 = new Moder('t1@t.t', 12345, 40);

/*
  создать класс Admin наследующийся от Moder
  firstname, lastname - уникальные свойства админов

  методы админов:
  ban (user) -> баните юзера (меняете свойство на true)

  *
  unban (user)
  сделайте так чтобы админы не могли банить других админов
*/
class Admin extends Moder {
  constructor(email, password, age, first, last) {
    super(email, password, age);

    this.first = first;
    this.last = last;
  }

  ban(user) {
    user.isBanned = true;
  }

  //   unban () {
  // if(typeof) {

  // }
  //   }
}

const adm = new Admin('a@a.a', 12345, 100, 'Tiran', 'Tiranovich');

//Incapsulation
class Figure {
  constructor(name) {
    this.name = name;
  }

  getArea() {}
  getArea(x) {}
  getArea(x, y) {}
}

class Triangle extends Figure {
  #a;
  #h;
  constructor(a, h, b, c) {
    super('triangle');
    this.#a = a;
    this.#h = h;
    this.b = b;
    this.c = c;
  }
  get side() {
    return this.#a;
  }

  get height() {
    return this.#h;
  }

  set side(a) {
    if (typeof a !== 'number' || isNaN(a)) {
      throw new TypeError('Triangle side must be number');
    }
    this.#a = a;
  }

  getArea(mode = 'height') {
    switch (mode) {
      case 'height': {
        return 0.5 * this.#a * this.#h;
      }
      case 'geron': {
        const p = (this.#a + this.b + this.c) / 2;
        return Math.sqrt(p * (p - this.#a) * (p - this.b) * this.c);
      }
    }
  }
}

class Rectangle extends Figure {
  #sideA;
  #sideB;
  constructor(a, b) {
    super('rectangle');
    this.sideA = a;
    this.sideB = b;
  }

  get sideA() {
    return this.#sideA;
  }

  get sideB() {
    return this.#sideB;
  }

  set sideA(num) {
    if (typeof num !== 'number' || isNaN(num)) {
      throw new TypeError();
    }
    if (num <= 0) {
      throw new RangeError();
    }
    this.#sideA = num;
  }

  set sideB(num) {
    if (typeof num !== 'number' || isNaN(num)) {
      throw new TypeError();
    }
    if (num <= 0) {
      throw new RangeError();
    }
    this.#sideB = num;
  }

  getArea() {
    return this.#sideA * this.#sideB;
  }
}

class Rhombus extends Figure {
  constructor(a, h) {
    this.a = a;
    this.h = h;
  }

  getArea() {
    return this.a * this.h;
  }
}

const fig1 = new Figure('some figure');
const triangle1 = new Triangle(10, 5, 3, 8);
const rectuangle1 = new Rectangle(2, 3);

function getFigureArea(figure, mode) {
  if (figure instanceof Figure) {
    return figure.getArea(mode);
  }
  throw new TypeError('not figure');
}

class Animal {
  constructor(kind, moniker) {
    this.kind = kind;
    this.moniker = moniker;
  }

  getFeed() {}
  getTask() {}
}

class Cat extends Animal {
  constructor(moniker) {
    super('Cat', moniker);
  }
  getFeed() {
    return `${this.kind} ${this.moniker} is eat fish`;
  }
  getTask() {
    return `${this.kind} ${this.moniker} is task 'meow'`;
  }
}

class Dog extends Animal {
  constructor(moniker) {
    super('Dog', moniker);
  }
  getFeed() {
    return `${this.kind} ${this.moniker} is eat meat`;
  }
  getTask() {
    return `${this.kind} ${this.moniker} is task 'gav`;
  }
}
const cat1 = new Cat('Marsik');
const dog1 = new Dog('Barsik');

const trainerAnimal = {
  getFeed: function (animal) {
    if (animal instanceof Animal) {
      return animal.getFeed();
    }
    throw new TypeError('not animal');
  },
  getTask: function (animal) {
    if (animal instanceof Animal) {
      return animal.getTask();
    }
    throw new TypeError('not animal');
  },
};
