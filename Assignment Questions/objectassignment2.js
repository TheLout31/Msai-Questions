
function permissionstatus(user){
    if(user.active == false ){
        return `${user.role} Access Denied`
    }
    else if (user.active == true ){
        return `${user.role} Access Granted`
    }
    else if(user.role !== "admin" ||user.role !== "user"){
        return 'Access Denied'
    }
}

console.log(permissionstatus({ name: "Alice", role: "user", active: true }))