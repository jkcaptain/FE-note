// LIFO
export default class Stack {
  constructor() {
    this.dataStore = [];
    this.top = 0;
  }

  push(value) {
    this.dataStore[this.top++] = value;
  }

  pop() {
    return this.dataStore[--this.top];
  }

  // 返回栈顶元素
  peek() {
    return this.dataStore[this.top - 1];
  }

  clear() {
    this.top = 0;
  }
}
