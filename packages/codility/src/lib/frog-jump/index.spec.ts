import { frogJump } from './index';

describe('frogJump', () => {
  it('frogJump(10, 85, 30) to be 3', () => {
    expect(frogJump(10, 85, 30)).toBe(3);
  });
  it('frogJump(10, 10, 30) to be 0', () => {
    expect(frogJump(10, 10, 30)).toBe(0);
  });
  it('frogJump(10, 11, 30) to be 1', () => {
    expect(frogJump(10, 11, 30)).toBe(1);
  });
});
