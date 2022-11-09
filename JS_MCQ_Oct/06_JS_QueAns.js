console.log(typeof(null));                // object

console.log(true+false);                  // 1
 
console.log(true+1);                      // 2

console.log(true-1);                      // 0
 
console.log(false+1);                     // 1
 
console.log(false-1);                     // -1

console.log(2+true);                      // 3
 
console.log("2"+true);                    // 2true
 
console.log(-34+10);                      // -24

console.log('-34'+10);                    // -3410

console.log(+'dude');                     // NaN

var y = 1, x = y = typeof x
console.log(x);                           // undefined

var a = (2, 3, 5)       
console.log(a);                           // 5

var b = (1, 5 - 1) * 2
console.log(b);                           // 8

console.log(!"Bang")                      // false

const c = parseFloat('12.3.4')            
console.log(c);                           // 12.3

console.log(Math.max([2, 3, 4, 5]));      // NaN

const d = ([2, 3, 4, 5,]);
console.log(Math.max(...d));              // 5

console.log(typeof (NaN));                // number

console.log(null == undefined);           // true

console.log(null == NaN);                 // false

console.log(NaN == undefined);            // false

console.log(undefined == null);           // true

var e = 2
var f = 3
console.log(e && f);                      // 3
console.log(-5%2)                         // -1