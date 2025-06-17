// Question 2:
const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  const main = async () => {
    let mainData = await fetchData();
    // console.log("Main Data:", mainData);
  
    let filteredData = mainData.filter((item) => item.name.length > 15);
    // console.log("Filtered Data:", filteredData);

    let Emails = filteredData.map((item)=> item.email)
    // console.log("Emails:", emails);

    let singleString = Emails.join("|")
    console.log(singleString)
  };
  
  setTimeout(()=>{
    main()
    console.log("User Proccessing Complete!!!")
  },2000)
//Question 1:
const students = [
  { name: "Alice", marks: 80 },
  { name: "Bob", marks: 60 },
  { name: "Charlie", marks: 90 }
]
;

// Step 1: Find the highest marks
const maxMarks = Math.max(...students.map(s => s.marks));

// Step 2 & 3: Normalize and filter
const normalizedStudents = students
  .map(s => ({
    name: s.name,
    normalizedMarks: (s.marks / maxMarks) * 100
  }))
  .filter(s => s.normalizedMarks >= 50);

console.log(normalizedStudents);
