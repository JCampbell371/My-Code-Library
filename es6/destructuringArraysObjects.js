// Destructuring Arrays
// Allows you to destructure a complex object or an array into
// simplar arrays.
// For arrays you pull out values by position

let numbers = [1,2,3];

[a, b] = numbers;
console.log(a);
console.log(b);

// Using Rest Parameter
// This will give me last two values in the array
[c, ...d] = numbers;
console.log(d);

// You can asign default values
[c, d, e, f = 2] = numbers;
console.log(f);

// Example of Quickly swapping varialbles
let g = 5;
let h = 10;

[g, h] = [h, g];
console.log(h);
console.log(g);

// I can ignore certain values by leaving an empty space
let [i, , j] = numbers;
console.log(i, j);

// You don't even need to declare an array ... simply restructure you array on the fly

let [k, l] = [5, 100, 9];
console.log(k, l,);


// Destructuring Objects
// For objects.. you pull out values by property name

let obj = {
  name: 'Jason',
  age: 44,
  greet: function(){
    return "Hello There..."
  }
}

let {name, age, greet: hello} = obj;

console.log(greet() + " My name is " + name + " and my age is " + age);

// I can assign an aliase to the function ... 
// Which would be the name outside of the object ... 
// For example :: let {name, age, greet: hello} = obj;
// console.log(hello() + " My name is " + name + " and my age is " + age);

