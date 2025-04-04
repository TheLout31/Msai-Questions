function bankAccount(amount){
    let totalamount = amount
   
    return {
        deposit: function (amt){
            totalamount +=amt
            console.log(totalamount)
        },
        withdraw: function (amt){
            totalamount -=amt
            console.log(totalamount)
        },
        getBalance: function (){
            console.log(totalamount)
        }

    }
    
}

const counter = bankAccount(100);

console.log(counter.deposit(50)); // Output: 1;

console.log(counter.withdraw(30)); // Output: 2;

console.log(counter.getBalance()); // Output: 2;