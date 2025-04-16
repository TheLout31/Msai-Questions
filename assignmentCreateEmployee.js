//Question 11
class createEmployee {
    constructor(name, role, salary) {
        this.name = name;
        this.role = role;
        this.salary = salary;
    }

    introduce(){
        console.log(`Hello ${this.name} welcome to the company!!`)
    }
}
//Question 12
class createCar {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    describeCar(){
        console.log(`This is a ${this.year} made!!`)
    }
}
//Ques 13
class createInventoryItem {
    constructor(name, category, price) {
        this.name = name;
        this.category = category;
        this.price = price;
    }

    describeItem(){
        console.log(`This is a ${this.name} made!!`)
    }
    addItemDiscount( discount){
        
        this.discount = discount 
    }
    applyDiscount(){
        const originalPrice =  this.price
        const discount = this.discount
        const afterDiscount = originalPrice - (originalPrice * discount / 100);  
        console.log("Final Price is: " + afterDiscount);
    }
}
const emp1 = new createEmployee("Imran" , "SDE" , "12LPA")
const car = new createCar("Toyota", "Camry", 2022);
const item = new createInventoryItem("Laptop", "Electic", 503);
console.log(item)
// emp1.introduce()
// car.describeCar();
item.addItemDiscount( 10)
item.applyDiscount()
