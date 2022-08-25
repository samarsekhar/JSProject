// To print 1 to 10 setTimeout using for loop ? 

for (let i=0; i<11; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}

