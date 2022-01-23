let user = {
    name: "Rahul",
    age: 50,
    email: 'Rahul@gamil.com',
}
let emp = {
    ...user,
    sal: 45000,
    email: 'Rahul@TCS.com',
}
console.log(emp);