// STACK - Last In First Out (LIFO)

export default class Stack {
  constructor(array = [], maxSize = Infinity) {
    this.array = array;
    this.maxSize = maxSize;
  }

  push(element) {
    if (!element) throw new Error("Can't push an empty element");
    if (this.isFull())
      throw new Error(`The stack is full - maxSize is set to: ${this.maxSize}`);
    this.array.push(element);
  }

  pop() {
    if (this.isEmpty()) throw new Error("Can't pop from an empty stack");
    else this.array.pop();
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  isFull() {
    return this.array.length === this.maxSize;
  }

  isEmpty() {
    return this.array.length < 1;
  }
}
