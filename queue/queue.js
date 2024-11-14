class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }
}

let myQueue = new Queue(0);
// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.dequeue();
// console.log(myQueue);
