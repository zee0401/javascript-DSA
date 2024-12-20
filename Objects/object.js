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

// Checking if a key exists in the object
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("last Name")); // false
