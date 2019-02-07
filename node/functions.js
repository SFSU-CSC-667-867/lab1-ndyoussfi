// Declaring with the function keyword
function hi() {
  console.log('Say Hello');
}
// avoid using above way of function declaration, avoid function hoisting, use arrow function below instead.

hi();

// arrow functions
const arrow = (test) => {
  console.log(test);
}

arrow('hi')

// for practice

// make an arrow function with no block body
const myArrow = (y) => y + 1; // no parantheses mean just return the result of the statement { return y + 1 }
console.log(myArrow(8));

// make a function that returns a function
const functionFactory = () => () => console.log('this is weird');
functionFactory()();

const a = functionFactory();
a();