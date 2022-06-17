export function frogRiverOne(X: number, A: number[]) {
  const set = new Set<number>();
  for (let i = 0; i < A.length; i++) {
    if (A[i] <= X) {
      set.add(A[i]);
      if (set.size === X) return i;
    }
  }
  return -1;
}
