// ! Generic class with 1 type parameter

class StorageBox<T> {
    items: T[] = [];

    constructor(initialItem: T[]) {
        this.items = initialItem;
    }

    getAll(): T[] {
        return this.items;
    }

    getFirstItem(): T {
        return this.items[0];
    }

    getLastItem(): T {
        return this.items[this.items.length - 1];
    }

    addItem(newItem: T): void {
        this.items.push(newItem);
    }

    reverseItems(): void {
        this.items.reverse();
    }

    removeItem(item: T): void {
        const index = this.items.indexOf(item);

        if(index !== -1) {
            this.items.splice(index, 1);
        }
    }
}

const box1 = new StorageBox<string>(['daniel', 'anna']);
box1.addItem('gencho');
box1.addItem('ivancho');
box1.removeItem('daniel');
box1.reverseItems();
console.log(box1.getAll());
console.log(box1.getLastItem());
console.log(box1.getFirstItem());

const box2 = new StorageBox<number>([12, 5, 1]);
box2.addItem(-200);
box2.removeItem(5);
console.log(box2.getAll());
