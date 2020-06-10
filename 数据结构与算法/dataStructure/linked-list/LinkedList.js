class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// 单链表
// find, findPrevious,
// append, prepend,
// insert, remove
// advance, back
// size, indexOf, getHead, toString
export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // 查找
  find(value) {
    let currNode = this.head;

    while (currNode && currNode.value !== value) {
      currNode = currNode.next;
    }

    return currNode;
  }

  // 查找上一个节点
  findPrevious(value) {
    let currNode = this.head;

    while (currNode.next && currNode.next.value !== value) {
      currNode = currNode.next;
    }

    return currNode;
  }

  // 在表尾添加节点
  append(value) {
    const newNode = new LinkedListNode(value);

    // 如果未定义头节点
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  // 在表头添加节点
  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);

    this.head = newNode;

    // 如果未定义尾节点
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  // 在某个节点之后插入节点
  insert(newValue, value) {
    let currNode = this.find(value);
    let newNode = new LinkedListNode(newValue);

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

  // 向后移动 - 需要双向链表
  back(n) {}

  // 链表长度
  size() {
    let len = 0;
    let currNode = this.head;

    while (currNode) {
      currNode = currNode.next;
      len++;
    }

    return len;
  }

  // 获取索引
  indexOf(value) {
    let currNode = this.head;
    let index = 0;

    while (currNode && currNode.value !== value) {
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

    while (currNode) {
      values.push({
        value: currNode.value,
        next: currNode.next ? currNode.next.value : ''
      });
      currNode = currNode.next;
    }

    console.log(values);
  }
}
