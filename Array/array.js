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

// How do you remove the first element from an array?
arr.shift(); // O(N)
console.log(arr);

// How do you loop through an array in JavaScript?
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach((x, i) => {
  console.log(x);
});

for (let x of arr) {
  console.log(x);
}

// How to concatenate two arrays in JavaScript?
const newArr = [...arr, ...arrE];
const newArr2 = arr.concat(arrE);
console.log(newArr, newArr2);

// How can you check if two arrays are equal?
const isArrayEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;

  // One Line solution
  // return arr1.length === arr2.length && arr1.every((ele, i) => arr1[i] === arr2[i]);
};

console.log(isArrayEqual([1, 2, 3], [1, 2, 3]));
