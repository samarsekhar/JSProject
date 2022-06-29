function emp(id,name,salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
}
e = new emp(103,"Shyam",30000);
console.log(e.id+" "+e.name+" "+e.salary);
