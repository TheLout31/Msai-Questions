let itemsPerPage = 40;
let skip = 0;
let currentPage = 1;

const userList = document.getElementById("userList");
const searchInput = document.getElementById("searchInput");

let currentData = [];
let originalData = [];

// Fetch and display users
const fetchUsers = (items, skip) => {
  console.log("Fetch func called!!!!");
  fetch(`https://dummyjson.com/users?limit=${items}&skip=${skip}`)
    .then((response) => response.json())
    .then((data) => {
      currentData = [...currentData, ...data.users];
      originalData = [...originalData, ...data.users];
      displayUsers();
    })
    .catch((error) => console.error("Error fetching data:", error));
};

// Display users
const displayUsers = () => {
  userList.innerHTML = "";

  currentData.forEach((user) => {
    const div = document.createElement("div");
    const btn = document.createElement("button");
    div.className = "user";
    btn.className = "deleteBtn";
    div.innerHTML = `<strong>${user.firstName}</strong> <strong>${user.lastName}</strong> (${user.email}) `;
    btn.innerText = "delete";
    btn.addEventListener("click", () => deleteUser(user.id));
    div.appendChild(btn);
    userList.appendChild(div);
  });
};

// Search users
const searchUsers = (searchTerm) => {
  // const searchTerm = searchInput.value.toLowerCase();
  let now = Date.now();
  console.log("function called!!!", now);
  if (!searchTerm) {
    currentData = originalData;
    displayUsers();
    return;
  }

  const filteredData = originalData.filter((user) =>
    user.firstName.toLowerCase().includes(searchTerm)
  );

  if (filteredData.length > 0) {
    currentData = filteredData;
    displayUsers();
  } else {
    userList.innerHTML = "No users found.";
  }
};

// Pagination controls

const nextPage = () => {
  skip += itemsPerPage;
  fetchUsers(itemsPerPage, skip);
};
window.addEventListener("scroll", function () {
 
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    console.log(
    "window.scrollY" + window.scrollY,
    "window.innerHeight" + window.innerHeight,
    " document.documentElement.scrollHeight" +
      document.documentElement.scrollHeight
  );
    nextPage();
  }
});
// const previousPage = () => {
//   if (skip >= itemsPerPage) {
//     skip -= itemsPerPage;
//     fetchUsers(itemsPerPage, skip);
//   }
// };

function deleteUser(id) {
  const filteredData = originalData.filter((user) => user.id !== id);

  if (filteredData.length > 0) {
    currentData = filteredData;
    displayUsers();
  } else {
    userList.innerHTML = "No users id found!!";
  }
}

let timer;
// Bind search input event
searchInput.addEventListener("input", function (event) {
  clearTimeout(timer);
  timer = setTimeout(() => {
    searchUsers(event.target.value);
  }, 800);
});

// Initial fetch
fetchUsers(itemsPerPage, skip);
