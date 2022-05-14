let calc = (a,b, operation) => {
    if(operation == "sum"){
        return a + b
    }
    if (operation == "multi"){
        return a * b
    }
}

let result = calc(10, 20, "sum");
console.log(result)
let result1 = calc(10, 20, "multi");
console.log(result1)