class CircleLinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// 单链表
// find
// append, prepend,
// insert, remove
// advance, back
// size, indexOf, getHead, toString
export default class CircleLinkedList {
  constructor() {
    this.head = new CircleLinkedListNode('head');
    this.head.next = this.head;

    this.tail = null;
  }

  // 查找
  find(value) {
    let currNode = this.head;
    let headValue = this.head.value;

    while (
      currNode.next &&
      currNode.next.value !== headValue &&
      currNode.next.value !== value
    ) {
      currNode = currNode.next;
    }

    return currNode.next;
  }

  // 查找上一个节点
  findPrevious(value) {
    let currNode = this.head;
    let headValue = this.head.value;

    while (
      currNode.next &&
      currNode.next.value !== headValue &&
      currNode.next.value !== value
    ) {
      currNode = currNode.next;
    }

    return currNode;
  }

  // 在表尾添加节点
  append(value) {
    const newNode = new CircleLinkedListNode(value, this.head);

    // 如果没有尾节点
    if (!this.tail) {
      this.head.next = newNode;
      this.tail = newNode;

      return this;
    }

    // 建立连接
    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  // 在表头添加节点
  prepend(value) {
    const newNode = new CircleLinkedListNode(value, this.head);

    // 如果没有尾节点
    if (!this.tail) {
      this.head.next = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.head = newNode;

    return this;
  }

  // 在某个节点之后插入节点
  insert(newValue, value) {
    let currNode = this.find(value);
    let newNode = new CircleLinkedListNode(newValue);

    // 建立连接
    newNode.next = currNode.next;
    currNode.next = newNode;

    return this;
  }

  // 移除节点
  remove(value) {
    let currNode = this.find(value);
    let prevNode = this.findPrevious(value);

    // 建立连接后，删除当前节点
    prevNode.next = currNode.next;
    currNode = null;
  }

  // 向前移动
  advance(n, currNode = this.head) {
    while (n-- && currNode) {
      currNode = currNode.next;
    }

    return currNode;
  }

  // 链表长度
  size() {
    let len = 1;
    let currNode = this.head;
    let headValue = this.head.value;

    while (currNode && currNode.next.value !== headValue) {
      currNode = currNode.next;
      len++;
    }

    return len;
  }

  // 获取索引
  indexOf(value) {
    let index = 0;
    let currNode = this.head;
    let headValue = this.head.value;

    while (
      currNode &&
      currNode.next.value !== headValue &&
      currNode.value !== value
    ) {
      currNode = currNode.next;
      index++;
    }

    return index;
  }

  // 获取头节点
  getHead() {
    return this.head;
  }

  // 输出链表内容
  toString() {
    let values = [];
    let currNode = this.head;
    let headValue = this.head.value;

    do {
      values.push({
        value: currNode.value,
        next: currNode.next ? currNode.next.value : ''
      });
      currNode = currNode.next;
    } while (currNode && currNode.value !== headValue);

    console.log(values);
  }
}
