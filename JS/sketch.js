const images = document.getElementById("images");

const search = document.getElementById("search");

const submit = document.getElementById("submit");
submit.addEventListener("click", function () {
  getData(search.value);
});
function getData(query) {
  fetch(
    "https://api.giphy.com/v1/gifs/search?q=" +
    query +
    "&api_key=8UHgk4rc0ictTp8kMXNGHbeJAWwg19yn&limit=5"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      renderData(myJson);
      //   console.log(JSON.stringify(myJson));
    });
}
function renderData(data) {
  console.log(data.data);
  for (let i = 0; i < data.data.length; i++) {
    const img = document.createElement("img");
    img.src = data.data[i].images.original.url;
    images.appendChild(img);
  }
}
