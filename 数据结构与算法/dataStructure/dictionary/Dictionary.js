class Dictionary {
  constructor() {
    this.dataStore = []; // 为什么用数组？因为对象不能排序
  }

  set(key, value) {
    this.dataStore[key] = value;
  }

  get(key) {
    return this.dataStore[key];
  }

  remove(key) {
    return this.dataStore[key];
  }

  count() {
    let n = 0;
    for (let key in Object.keys(this.dataStore)) ++n;
    return n;
  }

  clear() {
    for (let key in this.dataStore) {
      delete this.dataStore[key];
    }
  }

  sort() {
    return this.dataStore.sort();
  }
}

let dic = new Dictionary();
dic.set('b', { x: 1 });
dic.set('a', 1);
