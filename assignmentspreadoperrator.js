function assignmentspreadoperator(profile,updates) {
    const newobj = {...profile ,...updates}
    return newobj
}


const profile = { name: "Charlie", age: 29, address: { city: "San Francisco", zipcode: "94101" } };

const updates = { age: 30, address: { zipcode: "94109", country: "USA" } };

console.log(assignmentspreadoperator(profile,updates));