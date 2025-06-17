const handleFetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data.names);
};

const handleFetchDataTryCatch = async () => {
  try {
    const response = await fetch("https://https://fakestoreapi.com/products");
    const data = await response.json();
    return data
  } catch (error) {
    console.log(error);
  }
};

console.log(handleFetchDataTryCatch)

let fetched = fetch("https://fakestoreapi.com/products");

fetched
  .then((res) => res.json())
  .then((data) => {
    let newData = data.reduce((acc, item) => acc + item.price,0);
    console.log(newData.toFixed(2))
  })
  .catch((error) => console.log(error));
