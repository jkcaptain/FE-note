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

    for (let i = 0; i < this.total; i++) {
      const value = `solider-${i}`;
      if (i === 0) {
        list.head.value = value;
      } else {
        list.append(value);
      }
    }
  }

  start() {
    this.init();

    let { list } = this;

    while (list.size() !== 2) {
      const currNode = list.advance(this.rule);
      list.remove(currNode.value);
    }
  }
}

// 数学解法
function jcMath(n, m) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans = (ans + m) % i;
  }
  console.log(ans + 1);  
}

// 递归解法
