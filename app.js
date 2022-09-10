var person = {
    name: "Max",
    age: 31,
    hobbies: ["sports", "cooking"],
    role: [2, "author"]
};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person2 = {
    name: "Joe",
    age: 33,
    hobbies: ["eating", "philosophy"],
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ["sports"];
person.role.push("admin");
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
console.log(person2);
if (person2.role === Role.ADMIN) {
    console.log("this is a read only message for ".concat(Role[0].toLowerCase()));
}
