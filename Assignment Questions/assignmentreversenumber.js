function assignmentreversenumber(N){
    let sum =0
    let rem = 0
    while(N>=1){
        rem = N %10
        sum = (sum *10) + rem
        N = Math.floor(N/10)
    }
    return sum
}

console.log(assignmentreversenumber(197))