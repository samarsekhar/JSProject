let employees = [{ id:101, name: "Rahul", salary: 45000 },
{id:102, name:"Sonia" , salary:56000}]

let createEmployee = (emp) => {
    setTimeout(() => {
        employees.push(emp)
    }, 3000);
}
let getEmployee = () => {
    setTimeout(() => {
        let rows = ""
        employees.map((emp) => {
            rows = rows + `<tr>
            <td> ${emp.id}</td>
            <td> ${emp.name}</td>
            <td> ${emp.salary}</td>
            </tr>`
        })
        document.getElementById('tbody-data').innerHTML = rows
    }, 1000)
}

createEmployee({id:103, name:"Priyanka", salary:65000})
getEmployee();