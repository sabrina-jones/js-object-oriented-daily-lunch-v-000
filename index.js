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