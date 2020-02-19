class Tower {
    constructor() {
        this.disks = [];
    }

    isEmpty() {
        return this.disks.length === 0;
    }

    peek() {
        return this.disks[this.disks.lenth - 1];
    }

    add(d) {
        if (!this.isEmpty() && this.peek() < d) {
            throw 'Error placing disk';
        }
        this.disks.push(d);
    }

    moveTopTo(t) {
        let disk = this.disks.pop();
        t.add(disk);
    }

    moveDisks(quantity, destination, buffer) {
        if (quantity <= 0) return;
        this.moveDisks(quantity - 1, buffer, destination);
        this.moveTopTo(destination);
        buffer.moveDisks(quantity - 1, destination, this);
    }
}

let tower = new Tower();
tower.add(3);
tower.add(2);
tower.add(1);

let buffer = new Tower();
let dest = new Tower();

tower.moveDisks(3, dest, buffer);

console.log(tower);
console.log(dest);
