var obj1 = { a: 10};
var new_obj = Object.assign({}, obj1);
console.log(new_obj);
//output- Object { a:10 }

//Here in the properties of object "obj1"

var obj1 = {a:10};
var obj2 = {b:20};
var obj3 = {c:30};
var new_obj = Object.assign(obj1, obj2, obj3);
console.log(new_obj);
//output- Object { a:10, b:20, c:30}

