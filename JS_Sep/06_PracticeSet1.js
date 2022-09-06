// Q1 - Create a variable of type string and try to add a number to it?
let a = "Pooja";
let b = 43;
console.log(a + b);               // Pooja43

// Q2 - Use typeof operator to find the datatype of string in Q1 ?
let c = "Meenu";
let d = 56;
console.log(typeof c);            //string
console.log(typeof d);            //number
console.log(typeof (c+d));        //string

// Q3 - Create a const object in JS can you change it to hold a number later ?
const e = {
    name: "Sony",
    section: 1,
    marks: 87,
    overall: false
};
console.log(e);                   // { name: 'Sony', section: 1, marks: 87, overall: false }

// Q4 - Try to all a new key to the const object in Q3 were you to do it ?
const f = {
    name: "Seeni",
    section: 2,
    marks: 89,
    overall: false
};                                 //{
f["friend"] = "Sekhar";            // name: 'Sini',
f['name'] = "Sini";                // section: 3,
f["section"] = 3;                  // marks: 88,
f["marks"] = 88,                   // overall: false,
console.log(f);                    // friend: 'Sekhar'
                                   //}

// Q5 - Write a JS program to create a word meaning dictionary of 5 words ?
const dictionary = {
    appreciate: "recognize the full worth of.",
    ataraxia: "a state of freedom from emotional disturbance and anxiety.",
    yakka: "work, especially hard work.",
    damn: "to declare (something) to be bad, unfit, invalid, or illegal.",
    daisy: "someone or something of first-rate."

};

console.log(dictionary);
console.log(dictionary.appreciate);           //both are same// recognize the full worth of.
console.log(dictionary["yakka"]);             // work, especially hard work.