class Central {
    constructor() {
        console.log("Parent Class contructor method");
    }
}
class KA_Govt extends Central {
    constructor() {
        super();
        console.log("Child Class contructor method");
    }
}
new KA_Govt();