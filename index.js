let customerId = 0;
let deliveryId = 0;
let mealId = 0;
let employerId = 0;
let store = {drivers: [], deliveries:[], meals: [], employers: [], customers: []}

class Customer {
    constructor(name, employer) {
        this.id = ++customerId;
        if (name) {this.name = name};
        if (employer) {this.employerId = employer.id};
        store.customers.push(this);
    }
