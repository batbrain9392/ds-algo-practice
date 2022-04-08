export function permutationMissingElement(A: number[]): number {
  if (A.length === 1) return 1;
  if (A.length === 2) {
    if (A[0] === 1 || A[1] === 1) return 2;
    return 1;
  }
  const greatestNumberInArray = A.length + 1;
  const sumOfNNumbers =
    (greatestNumberInArray * (greatestNumberInArray + 1)) / 2;
  let result = sumOfNNumbers;
  for (let i = 0; i < A.length; i++) {
    result -= A[i];
  }
  return result;
}
