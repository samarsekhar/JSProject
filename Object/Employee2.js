let emp = {
    id: 201,
    name: 'Sam',
    email: 'sam@tcs.com',
    loc: 'Bangalore',
    sal: 30000,
}
for(prop in emp) {
    console.log(prop);
    console.log(emp[prop]);
}