// A class can be defined by using class declaration.
// A class keyword is used to declare a class with any particular name.


//Declaring class
class Employee {
    //Initializing an object
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    //Declaring method
    detail() {
        console.log(this.id+ " " +this.name+"<br>")
    }
}
//passing object to a variable
var e1 = new Employee(101,"Ankashya");
var e2 = new Employee(102,"Sekhar");
e1.detail();     // calling method
e2.detail();
