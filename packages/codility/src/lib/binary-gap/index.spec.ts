import { binaryGap } from './index';

describe('binaryGap', () => {
  it('binaryGap(1041) to equal 5', () => {
    expect(binaryGap(1041)).toBe(5);
  });
  it('binaryGap(15) to equal 0', () => {
    expect(binaryGap(15)).toBe(0);
  });
  it('binaryGap(32) to equal 0', () => {
    expect(binaryGap(32)).toBe(0);
  });
  it('binaryGap(9) to equal 2', () => {
    expect(binaryGap(9)).toBe(2);
  });
  it('binaryGap(529) to equal 4', () => {
    expect(binaryGap(529)).toBe(4);
  });
  it('binaryGap(20) to equal 1', () => {
    expect(binaryGap(20)).toBe(1);
  });
});
