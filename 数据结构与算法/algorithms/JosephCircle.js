// 约瑟夫环
// n 个人围成一圈，数到 m 会被杀掉

// 链表解法
import CircleLinkedList from '../dataStructure/linked-list/CircleLinkedList';

export default class JosephCircle {
  constructor(n, m) {
    this.total = n;
    this.rule = m;
    this.list = new CircleLinkedList();
  }

  init() {
    let { list } = this;

    for (let i = 1; i <= this.total; i++) {
      const value = `solider-${i}`;
      if (i === 1) {
        list.head.value = value;
      } else {
        list.append(value);
      }
    }
  }

  start() {
    this.init();

    let { list } = this;

    let currNode = undefined;
    while (list.size() !== 2) {
      currNode = list.advance(this.rule - 1, currNode);

      list.remove(currNode.value);
      currNode = currNode.next;

      list.display();
    }

    list.toString();
  }
}

// 数学解法

// 递归解法
