import DoublyLinkedList from '../DoublyLinkedList';

// 测试双链表
let doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.append('body');
doublyLinkedList.append('div1');
doublyLinkedList.append('div2');
doublyLinkedList.prepend('html');

doublyLinkedList.insert('p1', 'div1');
doublyLinkedList.insert('p2', 'p1');

doublyLinkedList.remove('p1');
doublyLinkedList.remove('p2');
doublyLinkedList.toString();

test('doublyLinkedList size === 4', () => {
  expect(doublyLinkedList.size()).toBe(4);
});

test('doublyLinkedList.index(body) === 1', () => {
  expect(doublyLinkedList.indexOf('body')).toBe(1);
});

test('doublyLinkedList.index(div1) === 2', () => {
  expect(doublyLinkedList.indexOf('div1')).toBe(2);
});

test('doublyLinkedList advance and back', () => {
  const currNode = doublyLinkedList.back(2);
  expect(currNode.value).toBe('body');
  expect(doublyLinkedList.advance(1, currNode).value).toBe('div1');
});
