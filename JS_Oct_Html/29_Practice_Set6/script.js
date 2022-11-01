// Q-1 / WAP using promt function to take input of age as a value from the user  and use alert to tell him if he can drive!.
// let age = prompt("Enter your age: ")
// age = Number.parseInt(age)

// const canDrive = () => {
//     return age>=18?true:false
// }

// if (canDrive(age)) {
//     alert("Yes you can drive.")
// } else {
//     alert("No you cannot drive.")
// }

// Q-2 / In Q1 use confirm to ask user if he wants to see the promt again.
// let runAgain = true;
// const canDrive = (age) => {
//     return age>=18?true:false
// }
// while (runAgain) {
//     let age = prompt("Enter your age: ")
//     age = Number.parseInt(age)

//     if (canDrive(age)) {
//         alert("Yes you can drive.")
//     } else {
//         alert("No you cannot drive.")
//     }
//     runAgain = confirm("Do you want to write again?")
// }

// Q-3 / In the previous question, use console error to log the error if the age entered is negative ?
let runAgain = true;
const canDrive = (age) => {
    return age>=18?true:false
}

while (runAgain) {
    let age = prompt("Enter Your Age: ")
    age = Number.parseInt(age)

    if (age < 0 ) {
        console.error("Please enter your vaild age.")
        break;
    }

    if (canDrive(age)) {
        alert("Yes you can drive.")
    } else {
        alert("No you cannot drive.")
    }
    runAgain = confirm("Do you want to write again?")
}
