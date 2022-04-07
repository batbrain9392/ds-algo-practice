import { oddOccurrencesInArray } from './index';

test('oddOccurrencesInArray([9, 3, 9, 3, 9, 7, 9]) to be 7', () => {
  expect(oddOccurrencesInArray([9, 3, 9, 3, 9, 7, 9])).toBe(7);
});
test('oddOccurrencesInArray([9]) to be 9', () => {
  expect(oddOccurrencesInArray([9])).toBe(9);
});
test('oddOccurrencesInArray([9, 3, 9, 3, 9]) to be 9', () => {
  expect(oddOccurrencesInArray([9, 3, 9, 3, 9])).toBe(9);
});
