class Reactangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // Getter 
    get area() {
        return this.calcArea();
    }

    //Method
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Reactangle(20, 30);

console.log(square.area);