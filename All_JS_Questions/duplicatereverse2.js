//To find the duplicate values, you need to reverse the condition.

let chars = ['A', 'B', 'C', 'B', 'A'];
let dupChars = chars.filter((c, index)=> {
    return chars.indexOf(c) !== index;
});

console.log(dupChars);

//Output:- 
//['B', 'A']