// Q-4 / Wap to change the url to google.com(redirection) if user enters a number greater than 4.
let number = prompt("Enter your number: ")
number = Number.parseInt(number)

if ( number > 4) {
    location.href = "http://google.com"
}


// Q-5 /  change the background og the page to any other color based on user input through prompt.
let color =  prompt("Enter the page background color: ")
document.body.style.background = color
