
function problem2_discountpricecalculator(price){
    let discount = 0
    let final = 0
   
    if (price < 0){
        return "Invalid price, the price must be a non-negative number."
    }
     else if(price <= 20){
        return price
    }
    discount =(price * 10)/100
    final = price - discount
    console.log("The final price of the item is:", final)
}

console.log(problem2_discountpricecalculator(20))