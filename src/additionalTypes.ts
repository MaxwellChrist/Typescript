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

function addThis(a: number, b: number): number;
function addThis(a: string, b: string): string;
function addThis(a: number, b: string): string;
function addThis(a: string, b: number): string;
function addThis(a: Combinable, b: Combinable) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString()
    }
    return a + b
}

const callAddThis = addThis("Max", "Christ")
callAddThis.split(' ')

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
const paragraph3 = document.getElementById('message-output')! as HTMLInputElement;
paragraph2.value = "Hi there!"
paragraph3.value = "Hi again"

interface ErrorContainer {
    [key: string]: string
    id: string
}

const errorBag: ErrorContainer = {
    id: "1",
    email: "No a valid email",
    username: "Username must contain more than three and less than 12 characters"
}

const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: "CEO", description: "It's my company, I do what I want!" }
}
console.log(fetchedUserData?.job?.title)

const userStuff = null
const storedData = userStuff ?? "Default"
console.log(storedData)