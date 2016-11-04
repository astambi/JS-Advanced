function extendPrototype(ClassToExtend) {
    ClassToExtend.prototype.species = "Human";
    ClassToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}

// test
class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    toString() {
        let className = this.constructor.name;
        return `${className} (name: ${this.name}, email: ${this.email})`;
    }
}
class Student extends Person {
    constructor(name, email, course) {
        super(name, email);
        this.course = course;
    }
    toString() {
        let baseStr = super.toString().slice(0, -1);
        return `${baseStr}, course: ${this.course})`;
    }
}
extendPrototype(Person);
let p = new Person("Maria", "maria@gmail.com");
let s = new Student("Anna", "anna@gmail.com", 3);
console.log(p.toSpeciesString());
console.log(s.toSpeciesString());