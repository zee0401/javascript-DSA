class myArray {
  constructor() {
    (this.length = "0"), (this.data = {});
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }
}
const newArray = new myArray();

newArray.push("apple");
newArray.push("mango");
newArray.push("banana");