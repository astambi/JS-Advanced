function inheritingToString() {
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
    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
        toString() {
            let baseStr = super.toString().slice(0, -1);
            return `${baseStr}, subject: ${this.subject})`;
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
    return {Person, Student, Teacher};
}

let Person = inheritingToString().Person;
let Student = inheritingToString().Student;
let Teacher = inheritingToString().Teacher;
let p = new Person("Maria", "maria@gmail.com");
let t = new Teacher("Ivan", "iv@yahoo.com", "PHP");
let s = new Student("Anna", "anna@gmail.com", 3);
console.log(p.toString());
console.log(t.toString());
console.log(s.toString());