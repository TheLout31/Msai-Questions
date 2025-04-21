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
