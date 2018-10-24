// Fat Arrow Function
// () parenthesis stands for the "arguments" that we want to pass to this function

var fn = () => {
    console.log("Fat Arrow Function");
  };
  fn();
  
  // If you only have one line of code within our Function Body
  
  var fn1 = () => console.log("Fat Arrow Function - One Line");
  fn1();
  
  // Return a value back from a Function without a "Return" key word
  
  var fn2 = () => "Return a Value without the 'Return Key Word'";
  console.log(fn2());
  
  // Traditional "Return Key Word" method
  
  var fn3 = () => {
    let a = 6;
    let b = 4;
    return a + b;
  }
  console.log("Traditional 'Return Key word' call within Function :: " + fn3());
  
  // Traditional "Return Key Word" method by passing arguments - one line
  
  var fn4 = (a,b) => a + b;
  console.log("Pass Arguments in a Function - Return value with one line :: "  + fn4(7,2));
  
  // If I only have one arguement - I can leave out the parenthesis
  
  var fn5 = a => a + 5;
  console.log("Passing one arguement without Parenthesis :: " + fn5(10));
  
  // One line Fat Arrow Function - Set Timeout Example
  
  setTimeout(() => console.log("Set Timeout Function after 1/2 seconds"), 500);
  
  // Functions and Default Parameters
  // You can pass Default Parameters into your arguments
  
  var isEqualTo = (number, compare = 10) => {
    return number == compare;
  }
  console.log("Setting Default Parameters into an Argument :: " + isEqualTo(10) );
  
  var isEqualTo2 = (number, compare = number) => {
    return number == compare;
  }
  console.log("Setting Default Parameters into an Argument :: " + isEqualTo2(10, 10) );
  