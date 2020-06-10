// FIFO
export default class Queue {
  constructor() {
    this.dataStore = [];
  }

  enqueue(value) {
    this.dataStore[this.top++] = value;
  }

  // 先进先出
  dequeue() {
    return this.dataStore.shift();
  }

  front() {
    return this.dataStore[0];
  }

  back() {
    return this.dataStore[this.dataStore.length - 1];
  }

  toString() {}

  empty() {}
}
