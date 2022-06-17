export function frogRiverOne(X: number, A: number[]) {
  const expectedTotal = (X * (X + 1)) / 2;
  const set = new Set<number>();
  let setTotal = 0;
  for (let i = 0; i < A.length; i++) {
    if (!set.has(A[i])) {
      set.add(A[i]);
      setTotal += A[i];
      if (set.size === X && setTotal === expectedTotal) return i;
      if (set.size > X) break;
    }
  }
  return -1;
}
