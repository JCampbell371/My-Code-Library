// Object Literals
// ES6 - You can define variables outside of your objects and pass those variables to
// the object property

let name1 = "Anna";
let age1 = 32;

let obj = {
  name1,
  age1,
  greet() {
    console.log(this.name1 + ', ' + this.age1);
  }
};
obj.greet();

// Object Literal - Setting Properties or methods to Strings

let name2 = "Anna";
let age2 = 40;

let obj1 = {
  "name": "Jason C",
  age2,
  "greet me"() {
    console.log(this.name + ', ' + this.age2);
  }
};
obj1["greet me"]();

// Object Literals with Dynamic Fields
// Using dot notatiion

let name5 = "Anna";
let age5 = 40;
let ageField = "age";

let obj4 = {
  "name": "Jason C",
  [ageField]: 100,
  "greet me"() {
    console.log(this.name5 + ', ' + this.age5);
  }
};
obj4["greet me"]();
console.log(obj4["age"]);