import JosephCircle from '../JosephCircle';

test('new JosephCircle(3, 3).start === [16, 31]', () => {
  const c1 = new JosephCircle(41, 3);
  c1.start();

  expect(c1.list.head.value).toBe('solider-16');
  expect(c1.list.head.next.value).toBe('solider-31');
});
