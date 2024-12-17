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

// Convert Number and Object to String
const num = 123;
console.log(num, num.toString());

const obj = {
  name: "Zeshan",
  course: "DSA with Zeshan",
};
console.log(obj, JSON.stringify(obj));

// Split and Join
console.log(str.split(""));
const subString = str.split(" ");
console.log(subString.join(" "));

// String Start and End
console.log(str.startsWith("Vishal")); // true
console.log(str.endsWith("Developer")); // true

// Trim and Case Conversion
const trimStr = str.trim();
const trimStrStart = str.trimStart();
const trimStrEnd = str.trimEnd();
console.log(trimStr, trimStr.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());

// Concatenate Strings
const lastName = "Shaikh";
console.log(firstName + lastName);
console.log(`${firstName} ${lastName} is a Best Developer`);
console.log(firstName.concat(lastName, " is a", " Best"));
