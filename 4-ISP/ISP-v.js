class IVehicle {
  drive() {
    throw new Error("Method not implemented.");
  }

  fly() {
    throw new Error("Method not implemented.");
  }
}

class Car extends IVehicle {
  drive() {
    console.log("The car is driving.");
  }

  fly() {
    throw new Error("A car cannot fly.");
  }
}

class Airplane extends IVehicle {
  drive() {
    throw new Error("An airplane cannot drive.");
  }

  fly() {
    console.log("The airplane is flying.");
  }
}

const airplane = new Airplane();
// airplane.fly();
airplane.drive();
