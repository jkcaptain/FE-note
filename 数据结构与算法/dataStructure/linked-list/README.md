## 链表

#### 数组的优势与劣势

优势：随机访问

劣势：长度固定（JS 例外，数组被实现成了对象）。

#### 链表操作

`newNode`: 要操作的节点
`deleteNode`: 要删除的节点

```
插入
1. newNode 的 next 指向 要插入元素的 next。
2. 要插入元素的 next 指向 newNode

删除
1. 将 deleteNode 的前驱节点的 next 指向 后驱节点
2. 将 deleteNode 设为 null
```

#### 单向链表

代码：[LinkedList.js](./LinkedList.js)

```

```

#### 双向链表

代码：[DoublyLinkedList.js](./DoublyLinkedList.js)

```

```

#### 单向循环链表

```javascript
head.next = head;
```

#### 双向循环链表

#### 约瑟夫环

解题思路：`使用循环链表`

代码：[CircleLinkedList.js](./CircleLinkedList.js)
