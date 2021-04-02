const solution = require('./solution');

test('returns 162534', () => {
  expect(solution(123456)).toBe(162534);
});

test('returns 103', () => {
  expect(solution(130)).toBe(103);
});

