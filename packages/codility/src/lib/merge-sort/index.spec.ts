import { mergeSort } from './index';

describe('mergeSort', () => {
  it('mergeSort([5, 2, 8, 9, 1, 6, 3]) to be [1, 2, 3, 5, 6, 8, 9]', () => {
    expect(mergeSort([5, 2, 8, 9, 1, 6, 3])).toEqual([1, 2, 3, 5, 6, 8, 9]);
  });
  it('mergeSort([5, 2, 8, 2]) to be [2, 2, 5, 8]', () => {
    expect(mergeSort([5, 2, 8, 2])).toEqual([2, 2, 5, 8]);
  });
  it('mergeSort([9]) to be [9]', () => {
    expect(mergeSort([9])).toEqual([9]);
  });
  it('mergeSort([]) to be []', () => {
    expect(mergeSort([])).toEqual([]);
  });
  it('mergeSort([9, 9, 9, 9, 9]) to be [9, 9, 9, 9, 9]', () => {
    expect(mergeSort([9, 9, 9, 9, 9])).toEqual([9, 9, 9, 9, 9]);
  });
});
