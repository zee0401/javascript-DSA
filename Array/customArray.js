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

  shift() {
    const firstItem = this.data[0];

    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  unShift(data) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = data;
    // this.data[]
    this.length++;
  }
  deleteCustomIndex(index) {
    const item = this.data[index];

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];

    this.length--;
    console.log(item);
  }
}
const newArray = new myArray();

newArray.push("apple");
newArray.push("mango");
newArray.push("banana");

// console.log(newArray.get(2))

newArray.pop();
newArray.shift();
newArray.ubShift("orange");
newArray.deleteCustomIndex(1);
console.log(newArray);
