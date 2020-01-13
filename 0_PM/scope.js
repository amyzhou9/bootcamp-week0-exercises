/**
 * Part 1:
 *    What will print and why?
 *    1 because var a = 1, and set to 1 because console.log(a) is 
 *    called first, and then y() which prints console.log(a) after a is declared to be 2,
 *    and then x() is called. Last is undefined because var a is declared but not defined in x().
 *    What will change if we delete line 15? Why?
 *    The last thing printed is 1 because var a is defined as 1 outside of all functions so this value
 *    was hoisted to the top and was being accessed.
 * 
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 * 
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 */

 const x = (a) => console.log(a);

 const y = () => {
  let a = 2;
  console.log(a);
  x(a);
};

let a = 1;
console.log(a);
y();
