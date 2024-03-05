/*
* Today we are going to learn about javascript which is a super powerful programming language
* which can handel both backend and frontend development.
*
* Normally, we start learning a new programming language using variable definition. In JS, we can
* define variables using three keywords: 'var', 'let', and 'const'. The choice of keyword depends
* on the desired variable behaviour.
*
* var:
*   this was traditionally used to declare variables in the early versions. In some textbooks
*   it has been mentioned that, var is outdated but it is still a valid command in all compilers
*   of JS. See below example.
* */
var x = 10; // note that ; in javascript is not mandatory.

/*
* The second approach for defining variable in JS is through the keyword 'let'. This is a modern
* command and allows us to declare block-scoped variables. Note that, when a command is called
* block-scoped it means that the access area of that variable can be set to {}.  For example
* you can define a class and inside of the class you can have multiple methods so you expect
* that by defining a variable using let inside of one of the methods you can call it anywhere
* inside of the class but since you have used let your access level is limited to that method only.
* Otherwise, you can use var which has lower level of security relative to 'let'.
* See below example
* */
let y = 20;

/*
* The third and the last approach for defining a local variable is by using the 'const' keyword.
* Obviously, 'const' stands for constant and when you define a variable using const then no
* longer you can change its value in your code.
* see below example
* */
const z = 25;

// now we print content of three above variables
console.log(x, y, z)
