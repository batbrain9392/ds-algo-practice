import { quickSort } from './index';

describe('quickSort', () => {
  it('quickSort([5, 2, 8, 9, 1, 6, 3]) to be [1, 2, 3, 5, 6, 8, 9]', () => {
    expect(quickSort([5, 2, 8, 9, 1, 6, 3])).toEqual([1, 2, 3, 5, 6, 8, 9]);
  });
  it('quickSort([5, 2, 8, 2]) to be [2, 2, 5, 8]', () => {
    expect(quickSort([5, 2, 8, 2])).toEqual([2, 2, 5, 8]);
  });
  it('quickSort([9]) to be [9]', () => {
    expect(quickSort([9])).toEqual([9]);
  });
  it('quickSort([]) to be []', () => {
    expect(quickSort([])).toEqual([]);
  });
  it('quickSort([9, 9, 9, 9, 9]) to be [9, 9, 9, 9, 9]', () => {
    expect(quickSort([9, 9, 9, 9, 9])).toEqual([9, 9, 9, 9, 9]);
  });
});
