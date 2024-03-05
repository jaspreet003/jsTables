function OurOwnSort(inputArray){
    var len = inputArray.length;
    for(var i = 0; i < len - 1; i++){
        for(var j = 0; j < len - 1 - i; j++){
            if(inputArray[j] > inputArray[j+1]){
                // the swap operation follows
                var temp = inputArray[j];
                inputArray[j] = inputArray[j+1];
                inputArray[j+1] = temp
            }
        }
    }
    return inputArray;
}

var inputArray = [12, 79, -22, 55, 2, 83];
console.log("Input array: ", inputArray)

var sortedArray = OurOwnSort(inputArray);
console.log("Sorted Array: ", sortedArray)
