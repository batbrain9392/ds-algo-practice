export function permCheck(A: number[]): number {
  if (A.length === 1) return +(A[0] === 1);
  if (A.length === 2) return +(A[0] + A[1] === 3);
  const set = new Set(A);
  if (set.size < A.length) return 0;
  const greatestNumberInArray = A.length;
  const sumOfNNumbers =
    (greatestNumberInArray * (greatestNumberInArray + 1)) / 2;
  const arr = [...set];
  let sumOfGivenArray = 0;
  for (let i = 0; i < arr.length; i++) {
    sumOfGivenArray += arr[i];
    if (sumOfGivenArray > sumOfNNumbers) return 0;
  }
  return +(sumOfGivenArray === sumOfNNumbers);
}
