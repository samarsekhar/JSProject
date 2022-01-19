class Office {
    Emp_id;
    Emp_Name;
    Emp_Address;
    constructor(a, b, c) {
        this.Emp_id = a;
        this.Emp_Name = b;
        this.Emp_Address = c;
    }
    open_Office() {
        console.log(`
         ${this.Emp_Name}
         ${this.Emp_id}
         ${this.Emp_Address} - You are qualified the interview successfully : `);
    }
}
let c1 = new Office("id = 101", "Name = Samar", "Address = Bangalore");
c1.open_Office()
