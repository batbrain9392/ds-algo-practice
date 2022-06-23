import { passingCars } from './index';

describe('passingCars', () => {
  it('passingCars([0, 1, 0, 1, 1]) to be 5', () => {
    expect(passingCars([0, 1, 0, 1, 1])).toBe(5);
  });
  it('passingCars([1]) to be 0', () => {
    expect(passingCars([1])).toBe(0);
  });
  it('passingCars([0, 1]) to be 1', () => {
    expect(passingCars([0, 1])).toBe(1);
  });
  it('passingCars([1, 0]) to be 0', () => {
    expect(passingCars([1, 0])).toBe(0);
  });
  it('passingCars([0, 0, 0]) to be 0', () => {
    expect(passingCars([0, 0, 0])).toBe(0);
  });
});
