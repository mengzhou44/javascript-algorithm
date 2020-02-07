const { Node } = require('./_linked-list');

class Dog {
    constructor(name) {
        this.name = name;
    }
}

class Cat {
    constructor(name) {
        this.name = name;
    }
}

class AnimalShelter {
    constructor() {
        this.head = null;
    }

    enqueue(animal) {
        if (this.head === null) {
            this.head = new Node(animal);
        } else {
            let node = this.head;
            while (node.next !== null) {
                node = node.next;
            }
            node.next = new Node(animal);
        }
    }

    dequeueAny() {
        if (this.head === null) return null;

        let temp = this.head;
        this.head = this.head.next;
        return temp.data;
    }

    dequeueDog() {
        return this.dequeueDogOrCat(typeof Dog);
    }

    dequeueCat() {
        if (this.head === null) return null;

        if (this.head.data instanceof Cat) {
            let temp = this.head;
            this.head = this.head.next;
            return temp.data;
        }
        let previous = this.head;
        let current = this.head.next;
        while (current !== null) {
            if (current.data instanceof Cat) {
                previous.next = current.next;
                return current.data;
            }
            previous = current;
            current = current.next;
        }
        return null;
    }
    dequeueDog() {
        if (this.head === null) return null;

        if (this.head.data instanceof Dog) {
            let temp = this.head;
            this.head = this.head.next;
            return temp.data;
        }
        let previous = this.head;
        let current = this.head.next;
        while (current !== null) {
            if (current.data instanceof Dog) {
                previous.next = current.next;
                return current.data;
            }
            previous = current;
            current = current.next;
        }
        return null;
    }
}

let animalShelter = new AnimalShelter();

animalShelter.enqueue(new Dog('dog1'));
animalShelter.enqueue(new Dog('dog2'));
animalShelter.enqueue(new Dog('dog3'));
animalShelter.enqueue(new Cat('cat1'));
animalShelter.enqueue(new Cat('cat2'));
animalShelter.enqueue(new Dog('dog4'));



let animal = animalShelter.dequeueAny();
console.log(animal); //dog1

animal = animalShelter.dequeueCat();
console.log(animal); //cat1
