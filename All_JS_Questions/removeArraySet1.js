// Remove duplicates from an array using Set..

let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);

//Output:-
//[ 'A', 'B', 'C']

// first, convert an array of duplicates to a Set.
// The new Set will implicity duplicates element.
// Then, convert the Set back back to an array..