"use strict";
function printEmployeeInfo(person) {
    console.log("Name: " + person.name);
    if ("privileges" in person) {
        console.log("Privileges: " + person.privileges);
    }
    if ("startDate" in person) {
        console.log("start date: " + person.startDate);
    }
}
const e1 = {
    name: "Max",
    privileges: ['create-server'],
    startDate: new Date()
};
printEmployeeInfo(e1);
printEmployeeInfo({ name: "Joe", startDate: new Date() });
function ad(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log("Loading cargo..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(33);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving with speed of " + speed + " mph");
}
moveAnimal({ type: "bird", flyingSpeed: 42 });
const paragraph = document.querySelector('p');
const paragraph2 = document.getElementById('message-output');
const paragraph3 = document.getElementById('message-output');
paragraph2.value = "Hi there!";
paragraph3.value = "Hi again";
//# sourceMappingURL=app.js.map