class TSC {
    constructor() {
        console.log("TSC Office");
    }
}
class Emp_Name extends TSC {
    constructor() {
        super()
        console.log("Emp_Name - Samarsekhar");
    }
}
new Emp_Name()