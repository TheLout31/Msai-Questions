function createFunctionRegistry(){
    const registry = {}
    return {
       registerFunction (name , fn){
        registry[name] = fn;
    },
    
    executeFunction(name , args , context=null){
        const fn = registry[name]
        return fn.apply(context , args)
    },
    
    mapFunction(name , dataArray){
       const fn = registry[name]
       return dataArray.map(fn)
    },
    
    filterFunction(name, dataArray){
        dataArray.filter(fn)
    },
    
    reduceFunction(name , dataArray , initialValue){
        const fn = registry[name] 
        return dataArray.reduce(fn , initialValue)
    },

   executeFunctionAsync(name, args, delay){
    const fn = registry[name]
    let context = null
    setTimeout(()=>{
       return  fn.apply(context , args)
    },delay)
   }

    }
}
    const register = createFunctionRegistry();
    register.registerFunction("double", x => x * 2);
    console.log(register.executeFunction("double", [5]));
    console.log(register.executeFunctionAsync("double", [5], 2000));
    
    