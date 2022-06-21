//The duplicate item is the item whose index is different form its indexOf() value.

let chars = ['A', 'B', 'A', 'C', 'B'];
chars.forEach((c, index) => {
    console.log(`${c} - ${index} - ${chars.indexOf(c)}`);
})

//Output:-
//A - 0 - 0
//B - 1 - 1
//A - 2 - 0
//C - 3 - 3
//B - 4 - 1