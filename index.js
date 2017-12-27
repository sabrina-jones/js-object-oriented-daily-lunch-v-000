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
      //returns array of deliveries that include meal
    });
  }
  customers(){
    return this.deliveries().filter(delivery=>{
      return delivery.customer();
      //iterates over deliveries and returns array of customers
    });
  }
  static byPrice(){
    return store.meals.sort((meal1, meal2)=>{
      return meal1.price < meal2.price;
    });
  }
}
