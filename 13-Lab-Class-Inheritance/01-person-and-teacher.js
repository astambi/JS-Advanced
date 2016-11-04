function personAndTeacherClasses() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }
    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }
    return {Person, Teacher};
}

let Person = personAndTeacherClasses().Person;
let Teacher = personAndTeacherClasses().Teacher;
let p = new Person("Maria", "maria@gmail.com");
let t = new Teacher("Ivan", "iv@yahoo.com", "PHP");
console.log(`Person: ${p.name} (${p.email})`);
console.log(`Teacher: ${t.name}(${t.email}), teaches ${t.subject}`);