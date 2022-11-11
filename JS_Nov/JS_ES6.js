// Arrow function
const sum = (a, b) => a * b
console.log(sum(2, 6));      // 12

// Object property assignment
const a = 2               // Before es6
const b = 5               // obj = { a: a, b: b}
const obj = {a, b} 
console.log(obj);         // {a: 2, b: 5}

// Object function assignment
const obj1 = {
    c: 5,
    d() {
        console.log('b')
    }
}
obj1.d()                   // b
console.log(obj1);         // { c: 5, d: [Function: d] }

// Default parameters
function print( a = 5) {
    console.log(a)
}
print()                   // 5
print(43)                 // 43

// Let Scope
let e = 12
if (true) {
    let e = 10
    console.log(e)        // 10
}
console.log(e);           // 12

// Object.assign()
const obj2 = { f: 1}
const obj3 = { g: 2}
const obj4 = Object.assign({}, obj2, obj3) 
console.log(obj4);        // { f: 1, g: 2}

// Object.entries()
const obj5 = {
    fname: "Pooja",
    lname: 'Hegde',
    age: 25,
    county: 'India',
};
const entries = Object.entries(obj5);
console.log(entries);
/**
 * returns an array of [key, value] pairs of thr object passed.
 * ['fname', 'Pooja']
 * ['lname', 'Hegde']
 * ['age', '25']
 * ['country', 'India']
 */

// Const
// can be assigned oly once
const h = 14
//h = 34       // throws an error
console.log(h);

// // Promises with finally
// Promise
// .then((result) => { ... })
// .catch((error) => { ... })
// .finally(() => ) {
//     /* logic independent of success /error.*/
// }
// /* The handler is called when the promise is fulfilled or rejected */

// Muitiline string
console.log(` This is multuline string `)

// Template strings
const gfname = 'Pooja'
const message = `Hello ${gfname}`
console.log(message);         // Hello Pooja

// Exponent operator
const byte = 2 ** 8
// Smame as: Math.pow(2, 8)
console.log(byte);           // 256

// Spread Operator
const i = [ 1, 2]
const j = [ 3, 4]
const k = [ ...i, ...j ]
console.log(k);          // [ 1, 2, 3, 4]

// String includes()
console.log('apple'.includes('pl'));     // true
console.log('apple'.includes('tt'));     // false

// String startsWith()
console.log('apple'.startsWith('ap'));   // true
console.log('apple'.startsWith('bb'));   // false

// String repeat()
console.log('Pooja..'.repeat(3));        // Pooja..Pooja..Pooja..

// Destructuring array
let [l, n] = [3, 6];
console.log(l);   // 3
console.log(n);   // 6

// Destructuring object
let obj6 = {
   m : 43,
   s : 56,
};
let { m, s} = obj6;
console.log(m);       // 43
console.log(s);       // 56

// Destructuring Nested Object
const Person = {
    fname : "Pooja Hegde",
    age: 25,
    sex: 'female',
    materialStatus: 'Single',
    address: {
        county: "India",
        state: "Karnataka",
        city: "Bangalore",
        pincode: "560076"
    },
};
const { address : {state, pincode}, fname} = Person;
console.log(fname, state, pincode)          // Pooja Hegde Karnataka 560076
//console.log(city);   // ReferenceError


// Spread Operator
const p = {
    fname : 'Anissa',
    lname : 'Kate'
}
const q = {
    ...p,
    lname: 'Katee',
    canSing: true,
}
console.log(p);        // { fname: 'Anissa', lname: 'Kate' }
console.log(q);        // { fanem: 'Anissa', lname: 'Katee', casSing: true}


