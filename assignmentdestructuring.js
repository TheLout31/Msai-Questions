function assignmentdestructuring(obj) {
    let newarr=[]
    for(let {name, address:{city , street}} of obj){
        let str = `${name} lives in ${city} on ${street.name}`
        newarr.push(str)
    }
    return newarr
}


const people = [
  {
    name: "Alice",
    address: { city: "New York", street: { name: "Broadway", number: 123 } },
  },
  {
    name: "Bob",
    address: {
      city: "Los Angeles",
      street: { name: "Sunset Boulevard", number: 456 },
    },
  },
];
console.log(assignmentdestructuring(people));
