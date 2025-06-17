
function Problem4_SimpleInterestCalculator(principal, rate, time){
    let cal = 0
    
    if (principal <0 || (rate < 0 || time < 0)){
        return "Invalid input, all values must be non-negative."
    }
    else{
        cal = (principal * rate * time)/100
        return `The simple interest is: ${cal}`
    }
    
}

console.log(Problem4_SimpleInterestCalculator(7,0,1))