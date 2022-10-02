'use strict';
function Phone(model, manufacturer, isOn) {
  this.model = model;
  this.manufacturer = manufacturer;
  this.isOn = isOn;
}

const phoneProto = {
  isOn: false,
  call: function (number) {
    console.log(`${this.manufacturer} ${this.model} is calling ${number}`);
  },
};

const deviceProto = {
  turnOn: function () {
    console.log('device is turned on now');
  },
};

phoneProto.__proto__ = deviceProto;

Phone.prototype = phoneProto;

// const phone1 = {
//   model: 'Pro',
//   manufacturer: 'Apple',
//   __proto__: phoneProto,
// };

// const phone2 = {
//   model: 'Basic',
//   manufacturer: 'Google',
// };

// phone1.__proto__ = phoneProto;
// phone2.__proto__ = phoneProto;

const phone1 = new Phone('Pro', 'Apple', false);
const phone2 = new Phone('Basic', 'Google', true);

const arr1 = [1];
const arr2 = [1];
