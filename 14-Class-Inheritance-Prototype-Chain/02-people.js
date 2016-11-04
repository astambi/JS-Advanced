function people() {
    class Employee {
        constructor(name, age) {
            if (new.target === Employee)
                throw new Error("Cannot instantiate directly");
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }
        work() {
            let currentTask = this.tasks.shift();
            console.log(this.name + currentTask);
            this.tasks.push(currentTask);
        }
        getSalary() {
            return this.salary;
        }
        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a simple task.');
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a complicated task.');
            this.tasks.push(' is taking time off work.');
            this.tasks.push(' is supervising junior workers.');
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks.push(' scheduled a meeting.');
            this.tasks.push(' is preparing a quarterly report.');
        }
        getSalary() {
            return this.salary + this.dividend;
        }
    }

    return {Employee, Junior, Senior, Manager};
}

// let Junior = people().Junior;
// let junior = new Junior('Junior', 22);
// junior.salary = 1000;
// junior.work();
// junior.collectSalary();
//
// let Senior = people().Senior;
// let senior = new Senior('Senior', 35);
// senior.salary = 5000;
// for (let i = 0; i < 3; i++)
//     senior.work();
// senior.collectSalary();
//
// let Manager = people().Manager;
// let manager = new Manager('Manager', 50);
// manager.dividend = 10000;
// manager.salary = 10000;
// for (let i = 0; i < 2; i++)
//     manager.work();
// manager.collectSalary();