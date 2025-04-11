// console.log("Begin"); 
const intervals = setInterval(()=>{console.log("Printing....")}, 1000)
setTimeout(() => { clearInterval(intervals); }, 5000); 
// Promise.resolve().then(() => { console.log("Promise Task"); });
// console.log("End");