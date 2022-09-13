"use strict";
var _a;
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
function addThis(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const callAddThis = addThis("Max", "Christ");
callAddThis.split(' ');
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
const errorBag = {
    id: "1",
    email: "No a valid email",
    username: "Username must contain more than three and less than 12 characters"
};
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: "CEO", description: "It's my company, I do what I want!" }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userStuff = null;
const storedData = userStuff !== null && userStuff !== void 0 ? userStuff : "Default";
console.log(storedData);
//# sourceMappingURL=app.js.map