function getData() {
    let x = document.getElementById('abc');
    x.innerHTML = "Hello, Good Afternoon"

    let name = document.getElementById('xyz').innerHTML;
    console.log(name);

    document.getElementById('Alpha').innerHTML = name
}