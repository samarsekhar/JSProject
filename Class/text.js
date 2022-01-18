class office {
    emp_id;
    emp_Name;
    constructor(a, b) {
        this.emp_id = (a);
        this.emp_Name = (b);
    }
    open_office() {
        console.log(this.emp_Name, "You are qualified the interview successfully", this.emp_id);
    }
}
let c1 = new office(12, 'Sekhar');
console.log(c1);
c1.open_office()