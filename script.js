// Complete the js code
// car Constructor Function
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// add getMakeModel method to the Car prototype
Car.prototype.getMakeModel = function() {
  return `${this.make} ${this.model}`;
};

// sportsCar Constructor Function (inherits from Car)
function SportsCar(make, model, topSpeed) {
  // Call the Car constructor with make and model
  Car.call(this, make, model);
  
  // add the new property topSpeed
  this.topSpeed = topSpeed;
}

// inherit the Car prototype into SportsCar prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// add getTopSpeed method to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
