"use strict";

const Person = function (name, job, age) {
  this.name = name;
  this.job = job;
  this.age = age;
};

Person.prototype.run = function () {
  console.log(`${this.name}: Running is fun said no one ever!`);
};

Person.prototype.fetchJob = function () {
  console.log(`${this.name} is a ${this.job}.`);
};

Person.prototype.programmer = "Javascript";

var andrew = new Person("Andrew", "Doctor", 54);
var charlie = new Person("Charlie", "Tik-toker", 16);
var dixie = new Person("Dixie", "singer", 23);

andrew.fetchJob();
charlie.fetchJob();
dixie.fetchJob();

andrew.run();
charlie.run();
dixie.run();

console.log(andrew.programmer);
console.log(charlie.programmer);
console.log(dixie.programmer);

function Programmer(name, job, age, languages) {
  Person.call(this, name, job, age);
  this.languages = languages;
  this.busy = true;
}

Programmer.prototype.completeTask = function () {
  this.busy = false;
};

Programmer.prototype.acceptNewTask = function () {
  this.busy = true;
};

Programmer.prototype.offerNewTask = function () {
  if (this.busy == true) {
    console.log(`${this.name} is busy at the moment.`);
  } else {
    console.log(`${this.name} is available at the moment.`);
  }
};

Programmer.prototype.listLanguage = function () {
  console.log(this.languages);
};

Programmer.prototype.learnLanguage = function (learn) {
  this.languages.push(learn);
};

var noah = new Programmer("Noah", "programmer", 45, ["HTML", "CSS"], true);
var blake = new Person("Blake", "programmer", 21);

console.log(noah.offerNewTask());
noah.learnLanguage("JS");

// console.log(noah);
// console.log(noah);
// console.log(blake.fetchJob());
// console.log(blake.run());
