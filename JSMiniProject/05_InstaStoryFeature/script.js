var profile = [
  {
    dp: "https://img.indiaforums.com/person/640x480/1/3398-mallika-singh.jpg?c=5hO6E8",
    story:
      "https://img.indiaforums.com/person/640x480/1/3398-mallika-singh.jpg?c=5hO6E8",
  },
  {
    dp: "https://img.indiaforums.com/person/640x480/1/3398-mallika-singh.jpg?c=5hO6E8",
    story:
      "https://img.indiaforums.com/person/640x480/1/3398-mallika-singh.jpg?c=5hO6E8",
  },
  {
    dp: "https://img.indiaforums.com/person/640x480/1/3398-mallika-singh.jpg?c=5hO6E8",
    story:
      "https://img.indiaforums.com/person/640x480/1/3398-mallika-singh.jpg?c=5hO6E8",
  },
  {
    dp: "https://img.indiaforums.com/person/640x480/1/3398-mallika-singh.jpg?c=5hO6E8",
    story:
      "https://img.indiaforums.com/person/640x480/1/3398-mallika-singh.jpg?c=5hO6E8",
  },
  {
    dp: "https://img.indiaforums.com/person/640x480/1/3398-mallika-singh.jpg?c=5hO6E8",
    story:
      "https://img.indiaforums.com/person/640x480/1/3398-mallika-singh.jpg?c=5hO6E8",
  },
  {
    dp: "https://img.indiaforums.com/person/640x480/1/3398-mallika-singh.jpg?c=5hO6E8",
    story:
      "https://img.indiaforums.com/person/640x480/1/3398-mallika-singh.jpg?c=5hO6E8",
  },
];

var storiyan = document.querySelector("#storiyan");
var clutter = "";
profile.forEach(function (elem, index) {
  //console.log(elem.dp);
  //console.log(index);
  console.log(elem, index);
  clutter += `<div class="story">
  <img id="${index}" src="${elem.dp}" alt="" >

</div>`;
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function (dets) {
  //console.log(profile[dets.target.id].story);
  document.querySelector("#full-screen").style.display = "block";
  document.querySelector("#full-screen").style.backgroundImage = `url(${
    profile[dets.target.id].story
  })`;

  setTimeout(function () {
    document.querySelector("#full-screen").style.display = "none";
  }, 3000);
});

// var clutter = "";
// profile.forEach(function () {
//   clutter += "Seen";
// });
// console.log(clutter);
