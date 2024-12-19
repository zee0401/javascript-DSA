// How do you create an empty array in JavaScript?
const arr = [1, 2, 3, 4, "Hello", { name: "Vishal" }, [1, 2, 3], 4];
const arr2 = new Array("23", 223, "Zeshan");
console.log(arr2);

// How do you access the first and last elements of an array?
const firstElement = arr[0]; // O(1)
const arrLength = arr.length;
const lastElement = arr[arrLength - 1];
console.log(firstElement, arrLength, lastElement);

// How do you remove the last element from an array?
const lastElement1 = arr.pop(); // O(1)
console.log(arr, lastElement1);

// How do you add an element to the start of an array?
arr.unshift(0); // O(N)
console.log(arr);
