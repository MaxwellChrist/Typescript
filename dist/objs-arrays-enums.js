"use strict";
const person = {
    name: "Max",
    age: 31,
    hobbies: ["sports", "cooking"],
    role: [2, "author"]
};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 5] = "AUTHOR";
})(Role || (Role = {}));
;
const person2 = {
    name: "Joe",
    age: 33,
    hobbies: ["eating", "philosophy"],
    role: Role.ADMIN
};
let favoriteActivities;
favoriteActivities = ["sports"];
person.role.push("admin");
console.log(person);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
console.log(person2);
if (person2.role === Role.ADMIN) {
    console.log(`this is a read only message for ${Role[0].toLowerCase()}`);
}
//# sourceMappingURL=objs-arrays-enums.js.map