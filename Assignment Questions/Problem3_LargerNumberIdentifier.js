function Problem3_LargerNumberIdentifier(number1, number2){
    
   
    if (number1 > number2){
        return `${number1} is larger than ${number2}`
    }
     else if(number1 === number2){
        return "Both numbers are equal"
    }
    else{
        return `${number2} is larger than ${number1}`
    }
    
}

console.log(Problem3_LargerNumberIdentifier(0,0))