function User(name, age) {
    this.name = name;
    this.age = age;

    this.getProfile = function() {
        
        //Outer function context
        console.log(this.constructor.name);    //User

        return () => {
            
            // Inner function context
            console.log(this.constructor.name);   // User(Get it from the outer context)

            console.log("I'm " + this.name + ", " + this.age + " years old.");

        };
    }
}

let user = new User("Kate", 25);
let profile = user.getProfile();
profile();                       //I'm Kate, 25 years old.