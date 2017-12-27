let customerId = 0;
let deliveryId = 0;
let mealId = 0;
let employerId = 0;
let store = {drivers: [], deliveries:[], meals: [], employers: [], customers: []}

class Delivery {
  constructor(meal={}, customer={}){
    this.id = ++deliveryId
    this.mealId = meal.id;
    this.customerId = customer.id;
    store.deliveries.push(this);
  }
  customer(){
    return store.customers.find(customer=>{
      return customer.id === this.customerId;
    })
  }
  meal(){
    return store.meals.find(meal=>{
      return meal.id === this.mealId;
    })
  }
}

class Meal {
  constructor(title, price){
    this.id = ++mealId;
    this.title = title;
    this.price = price;
    store.meals.push(this);
  }
  deliveries(){
    return store.deliveries.filter(delivery=>{
      return delivery.mealId === this.id;
    });
  }
  customers(){
    return this.deliveries().filter(delivery=>{
      return delivery.customer();
    });
  }
  static byPrice(){
    return store.meals.sort((meal1, meal2)=>{
      return meal1.price < meal2.price;
    });
  }
}

class Customer {
  constructor(name, employer={}){
    this.id = ++customerId;
    this.name = name;
    this.employerId = employer.id;
    store.customers.push(this);
  }
  deliveries(){
    return store.deliveries.filter(delivery=>{
      return delivery.customerId === this.id;
    });
  }
  meals(){
    //customer has meals through delivery
    return this.deliveries().map(delivery=>{
      return delivery.meal();
    })
  }
  totalSpent() {
    return this.meals().reduce(function(sum, meal) {
      return sum + meal.price;
    }, 0);
  }
}