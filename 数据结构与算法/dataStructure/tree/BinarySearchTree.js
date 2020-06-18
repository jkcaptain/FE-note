class BSTNode {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  show() {
    return this.data;
  }
}

// 二叉查找树的特性：相对较小的值在根节点左边，相对较大的值在根节点右边
class BST {
  constructor() {
    this.root = null;
  }

  // 插入节点 - 如果没有根节点，赋值给根节点。如果有根节点，判断是大于还是小于根节点，小于的话往左遍历，大于的话往右遍历
  insert(data) {
    let node = new BSTNode(data, null, null);

    if (this.root === null) {
      this.root = node;
    } else {
      let current = this.root;
      let parent;

      while (true) {
        parent = current;

        if (data < current.data) {
          current = current.left;
          if (current === null) {
            parent.left = node;
            break;
          }
        } else {
          current = current.right;
          if (current === null) {
            parent.right = node;
            break;
          }
        }
      }
    }
  }

  // 删除节点
  remove(data) {}

  // 中序遍历 - 按照节点的键值，以升序方式查找。 也就是先左子树，到根节点，再到右子树
  inOrder(node) {
    if (node) {
      this.inOrder(node.left);
      console.log(node.show());
      this.inOrder(node.right);
    }
  }

  // 先序遍历 - 先访问根节点，然后以同样的方式访问左子树和右子树。
  preOrder(node) {
    if (node) {
      console.log(node.show());
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  // 后序遍历 - 先访问叶子节点，从左子树到右子树，再到根节点。
  postOrder(node) {
    if (node) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.show());
    }
  }

  // 查找给定值
  getNode(data) {}

  // 查找最大值
  getMax() {}

  // 查找最小值
  getMin() {}
}

let nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log('Inorder traversal: ');

nums.inOrder(nums.root);
console.log('-------------------------');
nums.preOrder(nums.root);
console.log('-------------------------');
nums.postOrder(nums.root);
