/* JAVASCRIPT */

// Q-1
function test() {
    const person = {
        name: "Vikarm",
        displayName1: function () {
            console.log("name1", this.name);
        },
        displayName2: () => {
            console.log("name2", this.name);
        },
    };
    person.displayName1();
    person.displayName2();
}
test();

/* name1 Vikarm 
   name2 undefined   
*/
/* In other compilers answer is:- name1 Vikarm , name2 undefined because arrow function inherits "this" from its outer function where "this" refers to global object. */


// Q-2
function test2() {
    let name = "Pooja";
    function printName() {
        if (name === "Pooja") {
            let name = "PH";
            console.log(name);
        }
        console.log(name)
    }
    printName();
}
test2();

/* PH
   Pooja 
*/
/* because let variables are block scope, name inside if condition will shadow outer name */


// Q-3
function test3() {
    var player = "Virat";
    function displayPlayer() {
        if (player === "Virat") {
            var player = "VK";
            console.log(player);
        }
        console.log(player);
    }
    displayPlayer();
}
test3();

/* undefined */
/* undefined because var variables are functional scope, When displayPlayer fn starts executing, Execution context of
   displayPlayer will be created in callstack and at the memory creation phase var variable player is initialized as undefined. 
   hence if condition will become false and It will print only undefined. */


// Q-4
function test4() {
    const person = {
        name: "Payal",
        age: 22,
    };
    const getAge = person.age;
    delete person.age;

    console.log(person);
    console.log(getAge);
};
test4();

/* { name: "Payal" }
   22
 */
/* because delete keyword deletes property of an object and we are setting getAge as pass by value. */


// Q-5
function test5() {
    // No Strict mode
    friend = "Anissa";             // window.name ( property of window object )
    console.log(delete friend);

    const displayName = (function (friend) {
        console.log(delete friend);   // Local variable of function
        return friend;
    })("AK");

    console.log(displayName);
}
test5();

/*  true
    false
    AK
 */
/*  because delete keyword deletes only property of an object. 
  delete keyword can not delete local variables ( declared with var, let, and const ) and functions. 
  delete keyword can delete global variables as they are property of window object. */


// Q-6
function test6() {
    const arr = [];

    for (var i=0; i<5; i++) {
        arr[i] = function () {
            return i;
        };
    }
    console.log(arr[0]());
    console.log(arr[4]());
}
test6();

/* 5
   5
*/
/* because variables declared with var keyword are function-scoped or globally-scoped but not blocked scoped. 
  Inner function will form the closure and ponits to the updated value of i that is 5. 
  In the case of Let variable, as they are blocked scoped so inner function will hold different values of i from 0 to 4. */


/* In the case of Let variable */
const arrBlock = [];

for (let i=0; i<5; i++) {
    arrBlock[i] = function() {
        return i;
    };
}
console.log(arrBlock[0]());       // 0
console.log(arrBlock[4]());       // 4  