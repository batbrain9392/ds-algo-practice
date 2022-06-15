export function tapeEquilibrium(A: number[]): number {
  if (A.length === 2) {
    return Math.abs(A[0] - A[1]);
  }
  const sum = A.reduce((s, n) => s + n, 0);
  let minimumDifference = Number.POSITIVE_INFINITY;
  let leftSum = 0;
  for (let i = 0; i < A.length - 1; i++) {
    leftSum += A[i];
    const rightSum = sum - leftSum;
    const difference = Math.abs(leftSum - rightSum);
    if (!difference) {
      return 0;
    }
    if (difference < minimumDifference) {
      minimumDifference = difference;
    }
  }
  return minimumDifference;
}
