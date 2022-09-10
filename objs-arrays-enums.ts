const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
} = {
    name: "Max",
    age: 31,
    hobbies: ["sports", "cooking"],
    role: [2, "author"]
}

enum Role {ADMIN, READ_ONLY, AUTHOR = 5};

const person2 = {
    name: "Joe",
    age: 33,
    hobbies: ["eating", "philosophy"],
    role: Role.ADMIN
}


let favoriteActivities: string[]
favoriteActivities = ["sports"]

person.role.push("admin")

console.log(person)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

console.log(person2)

if (person2.role === Role.ADMIN) {
    console.log(`this is a read only message for ${Role[0].toLowerCase()}`)
}