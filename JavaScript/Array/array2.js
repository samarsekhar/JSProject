let employees = [
    { "id": 1, "first_name": "Collie", "last_name": "Haythorn", "email": "chaythorn0@oaic.gov.au", "gender": "Female" },
    { "id": 2, "first_name": "Katherina", "last_name": "Urry", "email": "kurry1@prnewswire.com", "gender": "Male" },
    { "id": 3, "first_name": "Pren", "last_name": "Halse", "email": "phalse2@msu.edu", "gender": "Female" },
    { "id": 4, "first_name": "Mady", "last_name": "Romei", "email": "mromei3@deliciousdays.com", "gender": "Agender" },
    { "id": 5, "first_name": "Ranee", "last_name": "Franzelini", "email": "rfranzelini4@admin.ch", "gender": "Polygender" },
    { "id": 6, "first_name": "Koral", "last_name": "Longo", "email": "klongo5@twitpic.com", "gender": "Bigender" },
    { "id": 7, "first_name": "Derrek", "last_name": "Sweating", "email": "dsweating6@shinystat.com", "gender": "Genderfluid" },
    { "id": 8, "first_name": "Marillin", "last_name": "Gianulli", "email": "mgianulli7@huffingtonpost.com", "gender": "Non-binary" },
    { "id": 9, "first_name": "Yuma", "last_name": "Dedney", "email": "ydedney8@xrea.com", "gender": "Female" },
    { "id": 10, "first_name": "Gretel", "last_name": "Boniface", "email": "gboniface9@yelp.com", "gender": "Male" }
]

for (emp in employees) {
    console.log(employees[emp].first_name);
    if (employees[emp].id === 3) {
        console.log(employees[emp]);
    };
};
