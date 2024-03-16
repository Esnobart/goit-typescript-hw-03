class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random()
    }

    getSignature() {
        return this.signature
    }
}

class Person {
    private key: Key

    constructor(key: Key) {
        this.key = key
    }

    getKey() {
        return this.key
    }
}

abstract class House {
    protected door: boolean = false;
    protected key: Key;
    protected tentas: Person[] = [];

    comeIn(person: Person) {
        if (this.door) {
            this.tentas.push(person)
         }else {
            console.log("The door is closed.")
        }
    }

    abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
        } else {
            console.log("This key doesn't fit")
        }
    }
}

const key = new Key();

const house = new MyHouse();
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};