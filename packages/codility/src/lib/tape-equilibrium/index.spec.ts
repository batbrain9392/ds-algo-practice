import { tapeEquilibrium } from './index';

describe('tapeEquilibrium', () => {
  it('tapeEquilibrium([3, 1, 2, 4, 3]) to be 1', () => {
    expect(tapeEquilibrium([3, 1, 2, 4, 3])).toBe(1);
  });
  it('tapeEquilibrium([1, 3]) to be 2', () => {
    expect(tapeEquilibrium([1, 3])).toBe(2);
  });
});
