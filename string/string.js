// Length of a String

let firstName = "Vaishali";
console.log(firstName.length);

// -----------------------------------------

// Access String Element
console.log(firstName.charAt(2)); // i
console.log(firstName[2]); // i
console.log(firstName.charCodeAt(2)); // 115 (Ascii Code)

// -----------------------------------

// Check Presence of Character
console.log(firstName.includes("r")); // false (& if present it return true)
console.log(firstName.indexOf("i")); // 2 (& if not present it return -1)
console.log(firstName.lastIndexOf("i")); // 7

// -------------------------------------------------

// Convert Number and Object to String
const num = 123;
console.log(num, num.toString());

const obj = {
  name: "Zeshan",
  course: "DSA with Zeshan",
};
console.log(obj, JSON.stringify(obj));

// ----------------------------------------

// Replace Substring
const str = "Zeshan is Best Frontend Developer. Aman is Best Developer. ";
console.log(str.replace("Zeshan", "Aman")); // "Zeshan is Best Frontend Developer. Aman is Best Developer. "
console.log(str.replaceAll("Zeshan", "Aman")); // "Zeshan is Best Frontend Developer. Zeshan is Best Developer. "

// Concatenate Strings
const lastName = "Rajput";
console.log(firstName + lastName);
console.log(`${firstName} ${lastName} is a Best Developer`);
console.log(firstName.concat(lastName, " is a", " Best"));
