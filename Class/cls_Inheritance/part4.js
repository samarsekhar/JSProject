class Bank {
    constructor(a) {
        this.acc_Address = a;
    }
}
class Saving_Account extends Bank {
    constructor(id, Name, Address) {
        super(Address)
        this.acc_id = id;
        this.acc_Name = Name;
    }
}
let c1 = new Saving_Account(101, "Sekhar", "Bangalore");
console.log(c1);