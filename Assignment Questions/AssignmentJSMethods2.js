
function filterEvenNumbers(arr) {

    const filtered = arr.filter((item)=> item %2 ==0)
    return filtered
 }


 function sumOfArray(arr) {

    const sum = arr.reduce((acc , c)=> acc + c,0)
    return sum
 }
 function sortAndConcat(arr1, arr2) {

    const array3 = arr1.concat(arr2);

    return array3
 }
 
 const arr = [15, 30, 45, 60, 75, 90]
 const functionList = extractAndReverse(arr);
 
 