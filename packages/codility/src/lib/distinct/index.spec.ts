import { distinct } from './index';

describe('distinct', () => {
  it('distinct([2, 1, 1, 2, 3, 1]) to be 3', () => {
    expect(distinct([2, 1, 1, 2, 3, 1])).toBe(3);
  });
  it('distinct([1]) to be 1', () => {
    expect(distinct([1])).toBe(1);
  });
});
