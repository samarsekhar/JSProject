//To remove the duplicates, you use the filter() method to include only elements whose indexes match their indexOf values.

let chars  = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = chars.filter ((c, index) => {
    return chars.indexOf(c) === index;
});

console.log(uniqueChars);


//Output:-
// ['A', 'B', 'C']