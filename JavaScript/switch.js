function mySample() {
    var text;
    var favNumber = prompt("What's your favorite number?", "3");
    switch(favNumber) {
     case "1":
       text = "Well yeah number one !";
       break;
     case "3":
       text = "It's my favorite too!";
       break;
     case "100":
       text = "Wow what a high number!";
       break;
     default:
       text = "I have never heard of that one..";
     }
     document.getElementById("example").innerHTML = text;
   }