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

// create a subclass
class Student extends Person {
    constructor(name, age, major) {
        // call its parent to get its properties
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        // turn major into a boolean
        return !!this.major;
    }

    // override getDescription
    getDescription()
    {
        let description = super.getDescription();
        description += this.hasMajor() ? ` Their major is ${this.major}.` : '';
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    //override getGretting
    getGreeting()
    {
        let greeting = super.getGreeting();
        greeting += this.homeLocation ? ` I am vising from ${this.homeLocation}.` : '';
        return greeting;
    }
}

const me = new Person('Amy Plant', 50);
console.log(me.getGreeting());
console.log(me.getDescription());

const anonymous = new Person();
console.log(anonymous.getGreeting());
console.log(anonymous.getDescription());

const student = new Student('Joy Sen', 43);
console.log(student.getDescription());

const traveler = new Traveler('MJ Brummitt', 62, 'Milwaukee');
console.log(traveler.getGreeting());