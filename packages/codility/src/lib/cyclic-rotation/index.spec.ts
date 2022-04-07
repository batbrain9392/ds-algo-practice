import { cyclicRotation } from './index';

describe('cyclicRotation', () => {
  it('cyclicRotation([3, 8, 9, 7, 6], 3) to equal [9, 7, 6, 3, 8]', () => {
    expect(cyclicRotation([3, 8, 9, 7, 6], 3)).toEqual([9, 7, 6, 3, 8]);
  });
  it('cyclicRotation([0, 0, 0], 1) to equal [0, 0, 0]', () => {
    expect(cyclicRotation([0, 0, 0], 1)).toEqual([0, 0, 0]);
  });
  it('cyclicRotation([1, 2, 3, 4], 4) to equal [1, 2, 3, 4]', () => {
    expect(cyclicRotation([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
  });
  it('cyclicRotation([], 1) to equal []', () => {
    expect(cyclicRotation([], 1)).toEqual([]);
  });
  it('cyclicRotation([0], 5) to equal [0]', () => {
    expect(cyclicRotation([0], 5)).toEqual([0]);
  });
});
