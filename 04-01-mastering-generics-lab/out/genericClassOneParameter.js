"use strict";
// ! Generic class with 1 type parameter
Object.defineProperty(exports, "__esModule", { value: true });
class StorageBox {
    items = [];
    constructor(initialItem) {
        this.items = initialItem;
    }
    getAll() {
        return this.items;
    }
    getFirstItem() {
        return this.items[0];
    }
    getLastItem() {
        return this.items[this.items.length - 1];
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    reverseItems() {
        this.items.reverse();
    }
    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
}
const box1 = new StorageBox(['daniel', 'anna']);
box1.addItem('gencho');
box1.addItem('ivancho');
box1.removeItem('daniel');
box1.reverseItems();
console.log(box1.getAll());
console.log(box1.getLastItem());
console.log(box1.getFirstItem());
const box2 = new StorageBox([12, 5, 1]);
box2.addItem(-200);
box2.removeItem(5);
console.log(box2.getAll());
//# sourceMappingURL=genericClassOneParameter.js.map