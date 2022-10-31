console.log("log");
console.info("info");
console.warn("warn");
console.error("err");
console.assert("err" != false);
console.assert("err" == false);

console.time("forLoop");

for (let i=0; i<10; i++) {
    console.log(56)
}

console.timeEnd("forLoop");

console.time("whileLoop");

let i=0;
while (i<10) {
    console.log(43)
    i++;
}
console.timeEnd("whileLoop");

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportation = data.reduce((counters, item) => {
  if (!counters[item]) counters[item] = 0;
  counters[item]++;
  return counters;
}, {});

console.log('transportation table');
console.table(transportation);

console.log('transportation log');
console.log(transportation);


console.table(['apples','oranges','bananas']);