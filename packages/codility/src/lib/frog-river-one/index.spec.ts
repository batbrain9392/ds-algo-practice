import { frogRiverOne } from './index';

describe('frogRiverOne', () => {
  it('frogRiverOne(5, [1, 3, 6, 4, 2, 3, 5, 4]) to be 6', () => {
    expect(frogRiverOne(5, [1, 3, 6, 4, 2, 3, 5, 4])).toBe(6);
  });
  it('frogRiverOne(5, [1, 3, 1, 4, 6, 3, 5, 4]) to be -1', () => {
    expect(frogRiverOne(5, [1, 3, 1, 4, 6, 3, 5, 4])).toBe(-1);
  });
  it('frogRiverOne(7, [1, 3, 1, 4, 2, 3, 5, 4]) to be -1', () => {
    expect(frogRiverOne(7, [1, 3, 1, 4, 2, 3, 5, 4])).toBe(-1);
  });
  it('frogRiverOne(1, [1]) to be 0', () => {
    expect(frogRiverOne(1, [1])).toBe(0);
  });
});
