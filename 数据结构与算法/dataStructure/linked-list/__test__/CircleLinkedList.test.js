import CircleLinkedList from '../CircleLinkedList';

// 测试单链表
let circleLinkedList = new CircleLinkedList();

circleLinkedList.append('body');
circleLinkedList.append('div1');
circleLinkedList.append('div2');
circleLinkedList.prepend('html');

circleLinkedList.insert('p1', 'div1');
circleLinkedList.insert('p2', 'p1');

circleLinkedList.remove('p1');
circleLinkedList.toString();

test('circleLinkedList size === 6', () => {
  expect(circleLinkedList.size()).toBe(6);
});

test('circleLinkedList.index(body) === 2', () => {
  expect(circleLinkedList.indexOf('body')).toBe(2);
});

test('circleLinkedList.index(div1) === 3', () => {
  expect(circleLinkedList.indexOf('div1')).toBe(3);
});

test('circleLinkedList.findPrevious(div1) === body', () => {
  expect(circleLinkedList.findPrevious('div1').value).toBe('body');
});
