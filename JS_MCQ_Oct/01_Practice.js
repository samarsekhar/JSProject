/* JAVASCRIPT */

const { faUndo } = require("@fortawesome/free-solid-svg-icons");

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


// Q-7
function test7() {
    let person = { name: "sekhar" };
    const personArray = [person];
    person = null;
    console.log(personArray);

    //personArray = [];
    console.log(personArray);
}
test7();
/* [ { name: "sekhar" } ] , TyperError because person = null will only disconnect the person variable from value { name: "sekhar"} which is stored in memory, personArray[0] will still point to same value { name: "sekhar"}.
  and personArray = [] at this line TyperError as const variable can't be redeclared and throws Uncaught TypeError: Assignment to constant variable.
 */


// Q-8 
function test8() {
    const value = { number : 10};

    const addition = (x = { ...value }) => {
        console.log((x.number += 5));
    };

    addition();
    addition();
    addition(value);
    addition(value);
}
test8();
/* 15 15 15 20 */
/* 15, 15, 15, 20 because when we call addition function 3rd time with passing value object as an argument, then x will take value as pass by reference and will update number property of original object ( value in this case ) to 15.  
  Hence, while calling addition function 4th time will console 15 + 5 => 20. */


// Q-9
function test9() {
    function makePerson() {
        return {
            userName: "Sekhar",
            ref: this,
        };
    }
    const person = makePerson();
    console.log(person.ref.userName);      // undefined


    // We can get "Jayesh" as an output by doing small change in above question :-
    function makePerson2() {
        return {
            userName: "Sahoo",
            // we have assigned a function to ref property of an object, and function's "this" will point to the returned object.
            ref: function () {
                return this;
            },
        };
    }

    const person2 = makePerson2();
    console.log(person2.ref().userName);      // Sahoo
}

test9();

/* undefined because "this" keyword in makePerson function will refer to the window object,
  person.ref.userName is same as Window.userName and no property named with userName is present in window object, Hence It will console undefined. */


// Q-10
function test10() {
    const user = {
        userName: "Anissa",
        displayName: function() {
            console.log(this.userName);     // undefined
        },
    };
    setTimeout(user.displayName, 1000);
    /*undefined because setTimeout is using user.displayName as a callback function rather than object method.
      callback function's "this" will refer to the window object and It will console undefined as there is no property such as userName in the window object
    */

    // we can get "Anissa" as an output by wrapping the user.displayName() inside a function:-
    setTimeout(function () {
        user.displayName();                 // Anissa   here, displayName is called by user object ( object method ). Hence, "this" will refer to user object.
    }, 1000);
}
test10();



// Q-11
function test11() {
    const series = { name: "JavaScript Ultimate" };

    function getStatus(postNumber) {
        return `${this.name} ${postNumber}`;
    }

    console.log(getStatus.call(series, 50));       // JavaScript Ultimate 50
    console.log(getStatus.bind(series, 50));       // [Function: bound getStatus]

    console.log(getStatus.call(series, 50));       // JavaScript Ultimate 50
    console.log(getStatus.bind(series, 50)());     // JavaScript Ultimate 50
}
test11();

/* JavaScript Ultimate 50, [Function: bound getSatus] because call, apply and bind methods are used for function borrowing in JavaScript.   
  The call method immediately invokes the borrowed function where as bind method does not invoke the borrowed function immediately, bind method returns a copy of borrowed function
  that can be called later on with or without passing new arguments to it.
 */



// Q-12
function test12() {
    var name = "Pooja";

    function displayName() {
        console.log(this.name);
    }

    const person = {
        name : "Hegde",
        method(fn) {
            fn();
        },
    };

    person.method(displayName);

    /* Pooja because displayName function is passed to person object method as a callback function.
       "this" keyword in displayName function will refer to window object and window object has a property "name" with value "Pooja".
       Hence, It will console Pooja as an output. 
    */
    
    // get Hegde as an output by attaching call method with fn() inside person method :-
    const person2 = {
        name: "Hegde",
        method(fn) {
            fn.call(this); // borrowing function and passing "this" of person2 object.
        },
    };

    person2.method(displayName);   // Hegde
};
test12();



// Q-13
function test13() {
    var length = 4;

    function callback() {
        console.log(this.length);
    }

    const object = {
        length: 5,
        method: function () {
            arguments[0]();
        },
    };

    object.method(callback, 2, 3);
}
test13();    //3


// Q-14
function test14() {
    var name = "Pooja";

    function displayName() {
        console.log(this.name);
    }

    const person = {
        name: "Sahoo",
        method: displayName.bind(this),
    };

    person.method();

    // Get Sahoo as an output by wrapping displayName.bind(this) inside a function because "this" inside the normal function of an object refers to the object :-

    const person2 = {
        name: "Panigrahi",
        method: function () {
            return displayName.bind(this);        //"this" refers to the person2 object
        },
    };
    person2.method()();        //Panigrahi
}
test14();


/*
          👍 💡 💖 😀 🌟 👇 👉
*/