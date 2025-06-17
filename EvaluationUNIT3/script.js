const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchResults = document.getElementById("search-results");
const list = document.getElementById("list");

const sortCategory = document.getElementById("sort-Category");
const sortStatus = document.getElementById("sort-status");

let allcharacters = [];
let currentPage = 1;
let hasNextPage = true;

const renderProducts = (products) => {
  list.innerHTML = "";

  if (products.length === 0) {
    list.innerHTML = "<p>No characters found.</p>";
    return;
  }

  products.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    const statusColor =
      item.status === "Alive"
        ? "green"
        : item.status === "Dead"
        ? "red"
        : "gray";

    const Veteran = item.episode.length > 30 ? "flex" : "none";

    card.innerHTML = `
            <h3>Name: ${item.name}</h3>
            <p>Status: <span style="color:${statusColor};">${item.status}</span></p>
            <p>Species: ${item.species}</p>
            <p>Gender: ${item.gender}</p>
            <p>Episodes: ${item.score} <span style="display:${Veteran}; color:"gold";  font-weight: 400">Veteran</span></p>
            <p>Origin: ${item.origin.name}</p>
            <img src="${item.image}" alt="${item.name}" style="width:100%;border-radius:10px;margin-top:10px;" />
          `;
    card.addEventListener("click", () => {
      showModal(item);
    });
    list.appendChild(card);
  });
};

const showModal = (character) => {
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");

  modalBody.innerHTML = `
    <h2>${character.name}</h2>
    <img src="${character.image}" alt="${character.name}" style="width:100%;border-radius:10px;margin:10px 0;" />
    <p><strong>Status:</strong> ${character.status}</p>
    <p><strong>Species:</strong> ${character.species}</p>
    <p><strong>Gender:</strong> ${character.gender}</p>
    <p><strong>Origin:</strong> ${character.origin.name}</p>
    <p><strong>Number of Episodes:</strong> ${character.episode.length}</p>
  `;

  modal.style.display = "flex";
};

const applyFiltersAndSort = (searchTerm = "") => {
  searchTerm = searchTerm.toLowerCase().trim();
  const selectedCategory = sortCategory.value;
  const sortedStatus = sortStatus.value;
  // const sortValue = sortSelect.value;

  let filtered = allcharacters.filter((student) =>
    student.name.toLowerCase().includes(searchTerm)
  );

  if (selectedCategory) {
    filtered = filtered.filter(
      (student) => student.species === selectedCategory
    );
  }

  if (sortedStatus) {
    filtered = filtered.filter((student) => student.status === sortedStatus);
  }

  renderProducts(filtered);

  searchResults.innerHTML = searchTerm
    ? `Showing results for: <strong>${searchTerm}</strong>`
    : "";
};

const fetchedData = async (page = 1) => {
  if (currentPage == 1) {
    document.getElementById("prev-page-button").style.display = "none";
  } else {
    document.getElementById("prev-page-button").style.display = "block";
  }
  try {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const result = await res.json();
    const characters = result.results;

    allcharacters = characters.map((char) => ({
      ...char,
      score: char.episode.length,
    }));

    applyFiltersAndSort();
  } catch (error) {
    console.error("Error:", error);
    list.innerHTML = "<p>Failed to load characters. Try again later.</p>";
  }
};

fetchedData();

let timer;
// Bind search input event
searchInput.addEventListener("input", function (event) {
  clearTimeout(timer);
  timer = setTimeout(() => {
    applyFiltersAndSort(event.target.value);
  }, 800);
});
searchButton.addEventListener("click", () => {
  applyFiltersAndSort(searchInput.value);
});
sortCategory.addEventListener("change", () => {
  applyFiltersAndSort(searchInput.value);
});
sortStatus.addEventListener("change", () => {
  applyFiltersAndSort(searchInput.value);
});

document.getElementById("next-page-button").addEventListener("click", () => {
  if (hasNextPage) {
    currentPage++;
    fetchedData(currentPage);
  } else {
    alert("No more pages available.");
  }
});

document.getElementById("prev-page-button").addEventListener("click", () => {
  if (hasNextPage) {
    currentPage--;
    fetchedData(currentPage);
  } else {
    alert("No more pages available.");
  }
});

document.getElementById("modal-close").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});

document.getElementById("modal-close").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target.id === "modal") {
    document.getElementById("modal").style.display = "none";
  }
});
