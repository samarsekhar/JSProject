// 5 times print 5 using setTimeout ?

for (var i=0; i<5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 10000);
}
