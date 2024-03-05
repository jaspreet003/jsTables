/*
* Now that we have learned array and loops we want to implement a code to sort an array.
* Let's write a method which enquires an array as an argument and prints the sorted array.
* This time, we want to use the builtin sort function
* */

function sortArray(inputArray){
    inputArray.sort(function (a, b){
        return a - b;
    })
    /*
    * Regarding the above lines of code:
    * line 9 in above code is a compare function that is passed as an argument to the
    * sort method. The purpose of this function is to define the sort order.
    * in fact, a and b are two elements being compared during the sorting process.
    * when we say return a-b, this line determines the sort order. If the result of a - b is
    * negative, it means that a should come before b in the sorted array. If the result is
    * positive, it means that b should come before a. If the result is zero, it means that a
    * and b are considered equal in terms of sorting. */
    return inputArray;
}
// we define the array as below
var inputArray = [12, 79, -22, 55, 2, 83];
console.log("Input array: ", inputArray)

var sortedArray = sortArray(inputArray);
console.log("Sorted Array: ", sortedArray)
