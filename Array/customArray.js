class myArray {
  constructor() {
    (this.length = "0"), (this.data = {});
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }
  pop() {
    delete this.data[-1];
    this.length--;
  }

  get(index) {
    return this.data[index];
  }
}
const newArray = new myArray();

newArray.push("apple");
newArray.push("mango");
newArray.push("banana");

// console.log(newArray.get(2))

newArray.pop();
console.log(newArray);
