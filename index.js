const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "31a6cd23",
      s: searchTerm,
    },
  });

  console.log(response.data);
};

const input = document.querySelector("input");
input.addEventListener("input", (event) => {
  fetchData(event.target.value);
});
