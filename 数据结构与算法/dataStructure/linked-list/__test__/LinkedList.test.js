import LinkedList from '../LinkedList';

// 测试单链表
let linkedList = new LinkedList();

linkedList.append('body');
linkedList.append('div1');
linkedList.append('div2');
linkedList.prepend('html');

linkedList.insert('p1', 'div1');
linkedList.insert('p2', 'p1');

linkedList.remove('p1');
linkedList.toString();

test('linkedList size === 5', () => {
  expect(linkedList.size()).toBe(5);
});

test('linkedList.index(body) === 1', () => {
  expect(linkedList.indexOf('body')).toBe(1);
});

test('linkedList.index(div1) === 2', () => {
  expect(linkedList.indexOf('div1')).toBe(2);
});
