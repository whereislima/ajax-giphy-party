console.log("Let's get this party started!");
let $input = $("#gif-word");
let $gifGallery = $("#gif-gallery");

function getRandom() {
  random = Math.floor(Math.random() * 50);
  // console.log(random);
  return random;
}

getRandom();

$("form").on("submit", async function(evt) {
  evt.preventDefault();
  let input = $input.val();
  console.log(input);

  let response = await axios.get("http://api.giphy.com/v1/gifs/search", {
  params: {
  q: input, 
  api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}});
  console.log(response);

  let gif = response.data.data[random].images.original.url;
  console.log(gif);

  let gifWrapper = $("<div></div>");
  gifWrapper.append(`<img src=${gif}>`)
  $gifGallery.append(gifWrapper)
  
});





