import { bowlingGameScorer } from './index';

describe('bowlingGameScorer', () => {
  it('bowlingGameScorer([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) to equal 20', () => {
    expect(
      bowlingGameScorer([
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ])
    ).toBe(20);
  });
  it('bowlingGameScorer([6, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) to equal 29', () => {
    expect(
      bowlingGameScorer([
        6, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ])
    ).toBe(29);
  });
  it('bowlingGameScorer([10, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) to equal 30', () => {
    expect(
      bowlingGameScorer([
        10, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ])
    ).toBe(30);
  });
  it('bowlingGameScorer([10, 0, 10, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) to equal 49', () => {
    expect(
      bowlingGameScorer([
        10, 0, 10, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ])
    ).toBe(49);
  });
  it('bowlingGameScorer([10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 10, 10]) to equal 300', () => {
    expect(
      bowlingGameScorer([
        10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 10,
        10,
      ])
    ).toBe(300);
  });
  it('bowlingGameScorer([5, 4, 8, 2, 10, 0, 10, 0, 1, 0, 9, 1, 0, 10, 10, 0, 6, 4, 7, 3, 10]) to equal 149', () => {
    expect(
      bowlingGameScorer([
        5, 4, 8, 2, 10, 0, 10, 0, 1, 0, 9, 1, 0, 10, 10, 0, 6, 4, 7, 3, 10,
      ])
    ).toBe(149);
  });
});
