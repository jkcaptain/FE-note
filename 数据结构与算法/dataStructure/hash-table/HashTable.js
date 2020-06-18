// 碰撞处理 1. 开链法 2. 线性寻址法

class HashTable {
  constructor() {
    this.table = new Array(137);
  }

  get(key) {
    return this.table[this.betterHash(key)];
  }

  put(data) {
    let pos = this.betterHash(data);
    this.table[pos] = data;
  }

  show() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i + ':' + this.table[i]);
      }
    }
  }

  simpleHash(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data.charCodeAt(i);
    }
    total = total % this.table.length;
    console.log(total);
    return parseInt(total);
  }

  // 基于 霍纳算法 - 避免散列碰撞
  betterHash(data) {
    const H = 37; // 添加一个质数
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += H * total + data.charCodeAt(i);
    }
    total = total % this.table.length;
    console.log(total);
    return parseInt(total);
  }
}

let hashTable = new HashTable();
hashTable.put('Clayton');
hashTable.put('Raymond');

hashTable.simpleHash('Clayton');
hashTable.simpleHash('Raymond');

hashTable.betterHash('Clayton');
hashTable.betterHash('Raymond');

// 开链法 - 存储单元 使用数组
class HashTableChains extends HashTable {
  constructor() {
    super();
    this.buildChains();
  }

  buildChains() {
    for (let i = 0; i < this.table.length; i++) {
      this.table[i] = new Array();
    }
  }

  put(data) {
    let pos = this.betterHash(data);
    let index = 0;
    if (this.table[pos][index] === undefined) {
      this.table[pos][index] = data;
    } else {
      while (this.table[pos][index] !== undefined) {
        index++;
      }
      this.table[pos][index] = data;
    }
  }
}

// 线性寻址法 - 用一个新变量(数组)将值存储起来
