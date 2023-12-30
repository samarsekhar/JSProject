var elem = document.querySelectorAll(".elem");

elem.forEach(function (val) {
  val.addEventListener("mouseenter", function () {
    console.log("Entered");
    //val.style.backgroundColor = "red";
    val.childNodes[3].style.opacity = 1;
  });
  val.addEventListener("mouseleave", function () {
    console.log("Leaved");
    //val.style.backgroundColor = "transparent";
    val.childNodes[3].style.opacity = 0;
  });
  val.addEventListener("mousemove", function (dets) {
    val.childNodes[3].style.left = dets.x + "px";
  });
});

///////
// var elem1 = document.querySelector("#elem1");
// var elemImage = document.querySelector("#elem1 img");

// elem1.addEventListener("mousemove", function (dets) {
//   elemImage.style.left = dets.x + "px";
//   elemImage.style.top = dets.y + "px";
// });

// elem1.addEventListener("mouseenter", function (dets) {
//   elemImage.style.opacity = 1;
// });

// elem1.addEventListener("mouseleave", function (dets) {
//   elemImage.style.opacity = 0;
// });
