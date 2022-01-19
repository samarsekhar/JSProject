class Central {
    constructor() {
        console.log("Parent class constructor method");
    }
}
class KA_Govt extends Central {
    constructor() {
        super()
        console.log("Chlid class constructor method");
    }
}
new KA_Govt();