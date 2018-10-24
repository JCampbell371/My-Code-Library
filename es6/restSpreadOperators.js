// Rest Operator
// Say you have a series of numbers you want to iterate through
// You can pass '...' in front of the function arguement call 
//Takes a list of values and converts into an array

function sumUp(...toAdd) {
    console.log(toAdd);
    let result = 0;
    for(i=0; i < toAdd.length; i++) {
      result += toAdd[i];
    }
    return result;
  }
  console.log(sumUp(100, 20, 3, 4, 50, 30, 20, 300));
  
  
  // Spread Operator
  // Takes an array and spits the array up into individual values
  
  let numbers = [1,2,3,4,5,19];
  console.log(...numbers);
  console.log(Math.max(...numbers));