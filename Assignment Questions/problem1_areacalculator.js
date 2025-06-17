function problem1_areacalculator(base, height){
    let area = 0
    if(base < 0 || height 
    <0){
        return "Invalid number, base and height must be positive numbers."
    }
    else if ((base == 0 && height == 0) || (base == 0 || height == 0)){
        return "0.0"
    }
    area =(base * height)/2
    console.log("The area of the triangle is:", area)
}

console.log(problem1_areacalculator(0,0))