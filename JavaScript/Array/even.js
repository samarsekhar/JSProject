let a = prompt("enter array values");
a = parseInt(a);

for (let i = 0; i <= a.length - 1; i++) {
    if (a[i] % 2 == 0) {
        console.log("even number", a[i])
    }
};