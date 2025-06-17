function assignmentsquarenumber (a,b,K){
    let cal = (a*a)+(b*b)
    if(cal == K){
        return true
    }
    else{
        return false
    }
}

console.log(assignmentsquarenumber(3,4,25))