// What will this code print to the console ?

const myFunc = () => {
    const a = 2;
    return () => console.log("a is" + a);
}

const a = 1; 

const test = myFunc();
test();
