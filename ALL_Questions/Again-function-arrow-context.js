function User(name, age) {
    this.name = name;
    this.age = age;

    this.getProfile = function() {
        // Outer function context
        console.log(this.constructor.name);

        return () => {
            // Inner function context
            console.log(this.constructor.name);  // User(Get it from the outer context)
            console.log("I'm "+ this.name + ", " + " years old");
        }
    }
}

let user = new User("Jack", 25);
let profile = user.getProfile();
profile();           // I'm Jack, 25 years old