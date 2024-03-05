/*
* In this example we will learn how to define a method in javascript and see
* how 'let' and 'var' are different in action.\
*
* For defining a method in javascript, you just need to mention the keyword of 'function'
* followed by the name of the method plus some potential arguments.
*
* see below example
* */

// method with var
function exampleVar(){
    if(true){
        var x = 10;
        console.log(x); // this will print 10 to the console
    }
    console.log(x); // this line will also print 10 in the console
}
// lets check the above method
//exampleVar()

// method with let
function exampleLet(){
    if (true){
        let y = 20;
        console.log(y) // this line will print 20 in console
    }
    console.log(y) // this line will give us error. Because y is defined inside of if block
    // and it is not accessible outside of it.
}
// calling the second method
exampleLet()

