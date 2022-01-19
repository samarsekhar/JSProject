class Bank {
    constructor() {
        console.log("Bank class - const");
    }
}
class Saving_Account extends Bank {
    constructor() {
        super()
        console.log("Saving Account - const");
    }
}
new Saving_Account()