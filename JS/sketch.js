// the Div where the GIFs from GIPHY will be appended to.
const imagesDiv = document.getElementById("imagesDiv");
// The user input -- the name of GIFs searched. Ex. Cats, Dogs, etc.
const search = document.getElementById("search");
// The search button for GIFs.
const submit = document.getElementById("submit");
// When pressed, it begins searching. 
submit.addEventListener("click", function () {
  // Refresh page first to get rid of old search results
  imagesDiv.innerHTML = "";
  getData(search.value);

});

// Code that uses GIPHY Api
function getData(query) {

  // fetch data from GIPHY, using the user's input(ex. dogs) to replace word in the link
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

    });

  function renderData(data) {
    console.log(data.data);
    // For loop runs as many times as needed to get all GIFs
    for (let i = 0; i < data.data.length; i++) {
      // create img element to represent the GIFs
      const img = document.createElement("img");
      // give className for css styling
      img.className = "gifs";
      // give img url to get the GIFs
      img.src = data.data[i].images.original.url;
      // put them into a div
      imagesDiv.appendChild(img);
    }
  }

}



