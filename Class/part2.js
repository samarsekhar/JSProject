class office {
    emp_id;
    emp_Name;
    constructor(a, b) {
        this.emp_id = (a);
        this.emp_Name = (b);
    }
    open_office() {
        console.log(`${this.emp_Name} - You qualified the interview successfully and emp_id: ${this.emp_id}`);
    }
}
let c1 = new office(1010, 'Sam');
c1.open_office()