window.console.log(window)
console.log(document.body);
document.body.style.background = "green"

window.onload = () => {
    const heading = document.createElement("h1");
    const headingText = document.createTextNode("Big Head!");
    heading.appendChild(headingText);
    document.body.appendChild(heading);
};
