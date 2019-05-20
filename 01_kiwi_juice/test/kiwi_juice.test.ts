import Solution from '../kiwi_juice';

test('kiwi_juice example1', () => {
  expect(Solution.solve([20, 20], [5, 8], [0], [1])).toEqual([0, 13]);
});

test('kiwi_juice example2', () => {
  expect(Solution.solve([10, 10], [5, 8], [0], [1])).toEqual([3, 10]);
});

test('kiwi_juice example3', () => {
  expect(
    Solution.solve([30, 20, 10], [10, 5, 5], [0, 1, 2], [1, 2, 0])
  ).toEqual([10, 10, 0]);
});

test('kiwi_juice example4', () => {
  expect(
    Solution.solve(
      [14, 35, 86, 58, 25, 62],
      [6, 34, 27, 38, 9, 60],
      [1, 2, 4, 5, 3, 3, 1, 0],
      [0, 1, 2, 4, 2, 5, 3, 1]
    )
  ).toEqual([0, 14, 65, 35, 25, 35]);
});

test('kiwi_juice example5', () => {
  expect(
    Solution.solve(
      [700000, 800000, 900000, 1000000],
      [478478, 478478, 478478, 478478],
      [2, 3, 2, 0, 1],
      [0, 1, 1, 3, 2]
    )
  ).toEqual([0, 156956, 900000, 856956]);
});
