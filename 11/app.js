// class AgedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }

// class Person extends AgedPerson {
//   name = "Max";

//   constructor() {
//     super();
//     this.age = 30;
//   }
//   greet() {
//     console.log(
//       "Hi I am " + this.name + " and I am " + this.age + " years old"
//     );
//   }
// }

function Person() {
  this.age = 30;
  this.name = "Max";
}

Person.prototype.greet = function () {
  console.log("Hi I am " + this.name + " and I am " + this.age + " years old");
};

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };

// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// const p = new Person();

// p.greet();
// p.printAge();
// console.log(p.__proto__);

const p = new Person();
console.log(p);
