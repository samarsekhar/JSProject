class Bank {
    acc_id;
    acc_Name;
    constructor(a, b) {
        this.acc_id = (a);
        this.acc_Name = (b);
    }
    open_Bank() {
        console.log(this.acc_Name, "Account opened successfully", this.acc_id);

    }
}
let c1 = new Bank(102, 'Rohan');
c1.open_Bank()

let c2 = new Bank(103, 'Priya');
c2.open_Bank()

let c3 = new Bank(104, 'Sonali');
c3.open_Bank()