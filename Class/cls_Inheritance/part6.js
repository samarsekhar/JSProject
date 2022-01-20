class Parent {
    constructor() {
        console.log("Parent - class : const");
    }
    get_Address() {
        console.log("Parent class - GetAddress Method");
    }
}
class Chlid extends Parent {
    constructor() {
        super()
        console.log("Chlid - class : const");
    }
    get_Address() {
        console.log("Chlid class - GetAddress Method");
    }
}
let c1 = new Chlid()
c1.get_Address()