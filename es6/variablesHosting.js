// Let and Block Scope
// Containing the variable within the body of where it's defined

let name = "Jason";
console.log(name);

let age = 30;
if(true) {
  let age = 27;
  console.log("Inside Statement :: " + age);
}
console.log("Outside Statement :: " + age);

// ************************************************************

// Constinant Variable may not be changed.
// Uppercase all Constant Variables

const AGE2 = 17;
console.log("Constant Variable :: " + AGE2);

// Arrays and Objects are reference Types
// We are only changing the value of the Array and not the Reference Type pointer

const AGES = [27,29,31];
console.log("Constant Array :: " + AGES)
AGES.push (25);
console.log("Constant Array with Push :: " + AGES);

const OBJ = {
  age: 44
}
console.log("Constant Object :: " + OBJ.age);
OBJ.age = 50;
console.log("Constant Object :: " + OBJ.age);

// ************************************************************

// Hoisting 
// We have to declare our variable before initializing

let age3;
age3 = 66;
console.log("Hoisting :: " + age3);

function doSmth() {
  age4 = 2;
}
let age4;
doSmth();
console.log("Hoisting with a Function :: " + age4);