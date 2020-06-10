class DoublyLinkedListNode {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

// 双链表
// find, findPrevious,
// append, prepend,
// insert, remove
// advance, back
// size, indexOf, getHead, toString
export default class DoublyLinkedList {
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
    let currNode = this.find(value);

    return currNode.prev;
  }

  // 在表尾添加节点
  append(value) {
    const newNode = new DoublyLinkedListNode(value, this.tail);

    // 如果未定义头节点
    if (!this.head) {
      this.head = newNode;
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
    const newNode = new DoublyLinkedListNode(value, null, this.head);

    this.head.prev = newNode;
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
    let newNode = new DoublyLinkedListNode(newValue, currNode, currNode.next);

    // 建立连接
    currNode.next.prev = newNode;
    currNode.next = newNode;

    return this;
  }

  // 移除节点
  remove(value) {
    let currNode = this.find(value);
    let prevNode = currNode.prev;

    // 建立连接后，删除当前节点
    prevNode.next = currNode.next;
    currNode.next.prev = prevNode;
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
  back(n, currNode = this.tail) {
    while (n-- && currNode) {
      currNode = currNode.prev;
    }

    return currNode;
  }

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
        prev: currNode.prev ? currNode.prev.value : '',
        next: currNode.next ? currNode.next.value : ''
      });
      currNode = currNode.next;
    }

    console.log(values);
  }
}
