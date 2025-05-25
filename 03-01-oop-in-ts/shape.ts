class Shape {
    draw() { return 'Drawing Shape' }
}

class Circle extends Shape {
   override draw(): string {
        return `${super.draw()} + Drawing circle`;
    }
}

let shape = new Shape();
let circle = new Circle();

console.log(shape.draw());
console.log(circle.draw());
