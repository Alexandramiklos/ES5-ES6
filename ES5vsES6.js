//Default params
//ES5
function es5DefaultParams(name, age) {
  var name = name || "";
  var age = age || 0;
  console.log(name);
}
es5DefaultParams();

//ES6

function es6DefaultParams(name = "", age = 0) {
  //putem scrie in antet parametrii
  console.log(name);
}
es6DefaultParams();

//Template Literals
//ES5
var id = 1;
var url = "" + id;

var fname = "Ana";
var lname = "Pop";
var fullName = "Name" + fname + " " + lname;

//ES6
var id = 1;
var url = `https://translate.google.ro/#view=home&op=translate&sl=en&tl=ro&text=blueprint ${id}`;
//trebuie sa pui `` ca sa nu il ia ca string pe {id}

var fname = "Ana";
var lname = "Pop";
var fullName = `Name ${fname} ${lname}`;
console.log(fullName);

// Multi-line Strings
//ES5
// var string = "ana are
// mere"->error
var string = "ana \n are cai."; //apare pe 2 randuri
console.log(string);

var html =
  ` <div id="template"><h2>` + name + `</h2><strong></strong><p></p></div>`;
var html = ` <div id="template">`;
"<h2>" + name + "</h2>" + "<strong></strong>" + "<p></p>" + "</div>";

//ES6
var string = `Ana are
mere`;
console.log(string);

var html = ` <div id="template">
<h2>+${name}+</h2>
<strong></strong>
<p></p>
</div>`;

// Block-Scoped Constructs Let and Const
// hoisting
//ES5 - variables hoisting

function es5VarHoisting() {
  console.log("x inside function before var = ", x); //undefined

  var x = 1;
  console.log("x inside function after var = ", x); //1
  if (true) {
    var x = 2; //same variable!!
    console.log("x inside function if =", x);
  }
  console.log("x inside function after if =", x);
}
es5VarHoisting();
//console.log("x outside function= ", x); //error

//ES5 - hoisting function
es5FunctionHoisting();
function es5FunctionHoisting() {
  console.log("es5 hoisting");
}

//ES6 - variables hoisting
function es6VarHoisting() {
  // console.log("X inside function before let = ", x); // ReferenceError
  let x = 1;
  console.log("X inside function after let = ", x); // 1
  if (true) {
    let x = 2;
    console.log("X inside function if = ", x); // 2
  }
  console.log("X inside  after if = ", x); // 1
}
es6VarHoisting();
// console.log("X outside function = ", x); // ReferenceError

//ES6 - hoisting function
//es6FunctionHoisting(); error
const es6FunctionHoisting = function() {
  console.log("es6 function hoisting");
};
es6FunctionHoisting();

// CONST
const PI = 3.1416;
//PI = 3.141593; // err
//const PI = 3.141594; // err

// CONST OBJ
const OBJ = { foo: "bar" };
//OBJ = { "foo": "bar2" }; //err
OBJ.foo = "bar2"; // works, doar valoare unei chei se poate chimba, nu s epot adauga chei

// Display 0, 1, 2, 3 using timeout...
for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 200);
}

//ES5
function dispalyIndexEs5(i) {
  //function params -> local scope ca i pus parametrul i care il face sa fie local
  setTimeout(function() {
    console.log(i);
  }, 200);
}
for (var i = 0; i < 10; i++) {
  dispalyIndexEs5(i);
}

//Es6
for (let i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 200);
}
// Display button index on click without using data from html, event...
for (var i = 0; i < 10; i++) {
  var button = document.createElement("button");
  button.innerText = "button";
  button.addEventListener("click", function() {
    console.log("Button index", i);
  });
  document.body.appendChild(button);
}
//ES5
//tot extras intr.o functie care primeste i ca si prametru

//ES6
for (let i = 0; i < 10; i++) {
  var button = document.createElement("button");
  button.innerText = "button";
  button.addEventListener("click", function() {
    console.log("Button index", i);
  });
  document.body.appendChild(button);
}
// Arrow functions
// ES6 function no params
const es61 = () => {
  console.log("ES6 function");
};
es61();
// es6 without params with return
const es62 = () => "ES6 function";
console.log(es62());
const es63 = () => {
  return "ES6 function";
};
console.log(es63());

//es6 arrow function with one param  - 4 eg
const es64 = name => `Name = ${name}`;
console.log(es64());
//const es65 = (name) => `Name = ${name}`; // CORRECT
//console.log(es65());
const es66 = name => {
  console.log(`Name = ${name}`);
  return `Name = ${name}`;
};
console.log(es66());

// ES6 more params 2 eg
const es67 = (fname, lname) => {
  let fullName = `${fname} ${lname}`;
  console.log(fullName);
};
es67();

const es68 = (fname, lname) => `${fname} ${lname}`;
es68();

//ES6 return object use () 2 eg () & return
const es69 = () => ({ name: "Ana" });
es69();

const es610 = () => {
  return {
    name: "Ana"
  };
};
es610();

// THIS SCOPE buttons
//ES5 this scope
var btn = document.createElement("button");
btn.innerText = "this es5";
document.body.appendChild(btn);
btn.addEventListener("click", function() {
  console.log("ES5 ", this); // Btn
});

//ES6 this scope
var btnES6 = document.createElement("button");
btnES6.innerText = "this es6";
document.body.appendChild(btnES6);
btnES6.addEventListener("click", () => {
  console.log("ES6", this); // Window
});

// Classes
//ES5
function Life(options) {
  this.name = options.name;
  this.age = options.age;
}
Life.prototype.walk = function() {
  console.log(this.name + " walks");
};

var life = new Life({ name: "Ana", age: 20 });

console.log(life.name);
life.walk();

//ES6
class LifeES6 {
  constructor(options = {}) {
    this.name = options.name;
    this.age = options.age;
  }
  walk() {
    console.log(`${this.name} walkss`);
  }
  sayHi() {}
}

// LifeES6.prototype.sayHi = function() {  //ES5
//   console.log("HI");
// };

const lifeES6 = new LifeES6({ name: "Ana", age: 20 });
console.log("lifeES6", lifeES6);

console.log(lifeES6.name);
lifeES6.walk();
// Extend
//ES5
//ES6
class Animal extends Life {
  //extends is used to create a class as a child of another class
  constructor(options) {
    super(options); //if the subclass has a constructor,
    // it needs to call super() before using "this"
    this.animalProp = options.animalProp;
  }

  animalMethod() {
    console.log("Animal method");
  }
}

const animal = new Animal({ name: "Azorel", age: 5, animalProp: "ceva" });

animal.name;
animal.animalProp;
animal.walk();
animal.animalMethod();

//New Array Functions
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// forEach
let names = ["Ana", "Ion", "Geo"];
names.forEach((item, index) => {
  console.log("Current value", item);
  console.log("Index of current value", index);
});
console.log("Ion name", names[1]);

let customers = [
  {
    fname: "John",
    lname: "Doe",
    gender: "M",
    weight: 80,
    height: 1.8
  },
  {
    fname: "Mary",
    lname: "Anne",
    gender: "F",
    weight: 50,
    height: 1.6
  }
];
customers.forEach(item => {
  console.log(`${item.fname} ${item.lname} ${item.gender}`);
});

//map
let newNames = names.map(item => `Name=${item}`);
console.log("newNames", newNames);

let newCustomers = customers.map(item => ({
  fullname: `${item.fname} ${item.lname}`,
  gender: item.gender,
  weight: item.weight,
  height: item.height
}));
console.log(newCustomers);

let bmiCustomers = customers.map(item => ({
  fname: item.fname,
  lname: item.lname,
  gender: item.gender,
  weight: item.weight,
  height: item.height,
  bmi: item.weight / (item.height * item.height)
}));
console.log(bmiCustomers);

//filter - return customers with bmi > 30
// find - return first customer with bmi < 18

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// Spread
// Arrays concat
//ES5
var arr1 = [1, 2, 3];
var arr2 = [4, 5];
// [1,2,3,4,5]
var arr3 = arr1.concat(arr2);
var arr4 = arr2.concat(arr1);
console.log(arr3); // [1,2,3,4,5]
//ES6
let arr11 = [1, 2, 3];
let arr22 = [4, 5];
let arr33 = [...arr11, ...arr22];
let arr44 = [...arr22, ...arr11];
console.log(arr33);
console.log(arr44);

//1,2,3,4,5

function sum(a, b, c) {
  console.log(a + b + c);
}
let numbers = [1, 2, 4];
sum(numbers[0], numbers[1], numbers[2]);
sum(...numbers);
// Merge
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 5 };
const obj3 = { ...obj1, ...obj2 };
// { a: 1, b: 2, c: 5 }
console.log(obj3);

//destructuring
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
let numbersLet = [1, 2, 4];
let [x, y, z] = numbersLet;

// Improved Object Literals
var name = "Ion";
var age = 20;
function user({ name: name, age: age }) {}

function user2({ name, age }) {}
