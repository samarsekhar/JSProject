//Remove duplicates from an array using forEach and include()..

//The include() returns true if an element is in an array or false if it is not.

//iterates over elements of an array and adds to a new array only elements that are not already there.

let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = [];
chars.forEach((c) => {
    if(!uniqueChars. includes(c)){
        uniqueChars.push(c);
    }
});

console.log(uniqueChars);

//Output:-
// ['A', 'B', 'C']