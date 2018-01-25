class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // template string
        return `Hi. I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

const me = new Person('Amy Plant', 50);
console.log(me.getGreeting());
console.log(me.getDescription());

const anonymous = new Person();
console.log(anonymous.getGreeting());
console.log(anonymous.getDescription());