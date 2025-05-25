"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    draw() { return 'Drawing Shape'; }
}
class Circle extends Shape {
    draw() {
        return `${super.draw()} + Drawing circle`;
    }
}
let shape = new Shape();
let circle = new Circle();
console.log(shape.draw());
console.log(circle.draw());
//# sourceMappingURL=shape.js.map