function User(name, age) {
    this.name = name;
    this.age = age;

    this.getProfile = function() {

       // Outer function context.
        console.log(this.constructor.name);
       
        // Inner function context.
        return function() {
            console.log(this.constructor.name);

            console.log("I'm " + this.name + ", " + this.age + " years old.");
        }
    }
}

var user = new User("Jack", 25);
var profile = user.getProfile();
profile();