// The class declaration is not a part of javascript hoisting.
// So, it is required to declare the class before invoking it.


//Here, invoking the class before declaring it.
var e1 = new Employee(101, "Sekhar");
var e2 = new Employee(102, "Ankashya");
e1.detail();             // calling method
e2.detail();

//Declaring class
class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name; 
    }
    detail() {
        console.log(this.id+" "+this.name);
    }
}


//output:- ReferenceError: cannot access "Employee" before initialization

