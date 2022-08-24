// Write a program for following output using arrow function ?
//console.log("output with arrow function", mul(2)(4)(6))


const call  = (a) => {
    return (b) => {
        return (c) => {
            return a * b * c;
        };
    };
};

console.log("output with arrow function", call(2) (4) (6));


// output:- output with arrow function 48
