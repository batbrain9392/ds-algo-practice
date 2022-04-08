import { permutationMissingElement } from './index';

describe('permutationMissingElement', () => {
  it('permutationMissingElement([2, 3, 1, 5]) to be 4', () => {
    expect(permutationMissingElement([2, 3, 1, 5])).toBe(4);
  });
  it('permutationMissingElement([2]) to be 1', () => {
    expect(permutationMissingElement([2])).toBe(1);
  });
  it('permutationMissingElement([1, 3]) to be 2', () => {
    expect(permutationMissingElement([1, 3])).toBe(2);
  });
  it('permutationMissingElement([3, 2]) to be 1', () => {
    expect(permutationMissingElement([3, 2])).toBe(1);
  });
});
