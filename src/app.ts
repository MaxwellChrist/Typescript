type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date
}

type ElevatedEmployee = Admin & Employee

type UnknownEmployee = Employee | Admin

function printEmployeeInfo(person: UnknownEmployee) {
    console.log("Name: " + person.name)
    if ("privileges" in person) {
        console.log("Privileges: " + person.privileges)
    }
    if ("startDate" in person) {
        console.log("start date: " + person.startDate)
    }
}

const e1: ElevatedEmployee = {
    name: "Max",
    privileges: ['create-server'],
    startDate: new Date()
}

printEmployeeInfo(e1)
printEmployeeInfo({name: "Joe", startDate: new Date()})

type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric

function ad(a: Combinable, b: Combinable) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString()
    }
    return a + b
}

class Car {
    drive() {
        console.log("Driving...")
    }
}

class Truck {
    drive() {
        console.log("Driving a truck...")
    }
    loadCargo(amount: number) {
        console.log("Loading cargo..." + amount)
    }
}

type Vehicle = Car | Truck
const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
    vehicle.drive()
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(33)
    }
}

useVehicle(v1)
useVehicle(v2)

interface Bird {
    type: "bird"
    flyingSpeed: number;
}

interface Horse {
    type: "horse"
    runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
    let speed
    switch(animal.type) {
        case "bird":
            speed = animal.flyingSpeed
            break
        case "horse":
            speed = animal.runningSpeed
            break
    }
    console.log("Moving with speed of " + speed + " mph")
}

moveAnimal({type: "bird", flyingSpeed: 42})

const paragraph = document.querySelector('p');
const paragraph2 = <HTMLInputElement>document.getElementById('message-output');
const paragraph3 = document.getElementById('message-output') as HTMLInputElement;
paragraph2.value = "Hi there!"
paragraph3.value = "Hi again"
