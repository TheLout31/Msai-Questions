function singleArray(arr){
    let newArr = []
    for(let i=0 ; i<arr.length ; i++){
        let element = arr[i]
        if(typeOf(element) === "object"){
            for(let char of element){
                newArr.push(char)
            }
        }
        else{
            newArr.push(element)
        }
    }
    
    return newArr
}

console.log(singleArray([1,2,[3],4,5,9,7,[1,2,9]]))