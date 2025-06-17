function createOrderManager(){
    let dataList=[]
    let newData=[]
    return {
         addOrders(order) {
    dataList.push(order)
    
    },
     showOrders() {
    return dataList
    },
    
     updateOrders(id , newStatus){
    const dataList = dataList.find((item)=> item.id === id)
    if(dataList){
        dataList.status = newStatus
    }
    },
    
    filterOrders(Status){
    newData=dataList.filter((item)=> item.status == Status)
    return newData
    },
    
     getTotalRevenue(){
    let reveneue = dataList.reduce((acc, item) => acc + item.items.price,0)
    return reveneue
    },
    
     exportOrders(){
    return JSON.stringify(dataList)
    },
    
    sortOrders(by){
    
    },
    
    }
    
    } 
    
    
    const manager = createOrderManager();
    manager.addOrder({ id: 1, customerName: "Alice", items: [{ name: "Laptop", price: 1000, quantity: 1 }], status: "pending", createdAt: new Date("2024-03-01") });
    manager.addOrder({ id: 2, customerName: "Bob", items: [{ name: "Phone", price: 500, quantity: 2 }], status: "shipped", createdAt: new Date("2024-03-02") });
    console.log(manager.filterOrders("pending"));
    
    