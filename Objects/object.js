// Creating an object
const person = {
  name: "Vishal",
  age: 21,
  isEducator: true,
  skills: ["C++", "JavaScript", "ReactJS"],
  projects: {
    "Frontend Freaks": "Frontend Development Project",
  },
  code: function () {
    return "start coding";
  },
  walk: () => {
    return "start walking";
  },
};

// Accessing properties using Dot Operator
console.log(person.age); // 21

// Accessing properties using []
console.log(person["name"]); // Vishal

// Checking if a key exists in the object
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("last Name")); // false

// Adding, deleting, and updating keys
person.name = "Vivek"; // Updating name key
person.location = "New Delhi"; // Adding location Key
delete person.projects; // Deleting projects key
console.log(person);

// Shallow Copy
const person2 = person;
person2.isEducator = false;

// Deep Copy
const person3 = Object.assign({}, person);

// Nested Objects still do shallow copy here, there for we use lodash cloneDeep method(out of scope for this course)
person3.skills = null;

// Using freeze and seal methods
Object.freeze(person); // User can't add or delete or update keys
console.log(person);
console.log(Object.isFrozen(person)); // true
