'use strict'
class Employee {
    constructor(...props) {
        this.id = props[0];
        this.firstName = props[1];
        this.lastName = props[2];
        this.taxId = props[3];
        this.salary = props[4];
    }
    generatePaySlip() {
        return `Employee ID: ${this.id} \nName: ${this.firstName} ${this.lastName}\nTax ID: ${this.taxId}\nPay: ${this.salary / 12}`;
    }
}

class Manager extends Employee {
    constructor(...props) {
        super(...props)
        this.managedEmployees = [];
    }
    addManagedEmployee(anEmployee) {
        this.managedEmployees.push(anEmployee);
    }
    removeManagedEmployee(anEmployee) {
        this.managedEmployees.splice(this.managedEmployees.indexOf(anEmployee), 1);
    }
}

let jim = new Employee(3, 'Jim', 'Humble', 10654, 80000);
let jane = new Employee(2, 'Jane', 'Lesbon', 10457, 70000);
let rami = new Manager(1, 'Rami', 'Montiero', 10452, 83000);

console.log(jim);
console.log(jane);
console.log(rami);

rami.addManagedEmployee(jim);

rami.addManagedEmployee(jane);

console.log(rami);

rami.removeManagedEmployee(jim);

console.log(rami);

rami.generatePaySlip();
