function Problem5_BMICalculator(weight,height){
    let BMI = 0
    if(weight < 0 || height < 0){
        return "Invalid input, height and weight must be positive numbers."
    }
    else if (weight==0 || height == 0){
        return "Invalid input, height cannot be zero."
    }
    
    else{
        BMI = weight/(height * height)
        return `Your BMI is:${BMI}`
    }

}

console.log(Problem5_BMICalculator(57,1.66))