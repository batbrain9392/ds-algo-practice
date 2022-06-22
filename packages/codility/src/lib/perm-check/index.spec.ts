import { permCheck } from './index';

describe('permCheck', () => {
  it('permCheck([4, 1, 3, 2]) to be 1', () => {
    expect(permCheck([4, 1, 3, 2])).toBe(1);
  });
  it('permCheck([4, 1, 3]) to be 0', () => {
    expect(permCheck([4, 1, 3])).toBe(0);
  });
  it('permCheck([1]) to be 1', () => {
    expect(permCheck([1])).toBe(1);
  });
  it('permCheck([2]) to be 0', () => {
    expect(permCheck([2])).toBe(0);
  });
  it('permCheck([1, 2]) to be 1', () => {
    expect(permCheck([1, 2])).toBe(1);
  });
  it('permCheck([1, 1]) to be 0', () => {
    expect(permCheck([1, 1])).toBe(0);
  });
});
