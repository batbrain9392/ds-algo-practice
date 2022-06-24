export function distinct(A: number[]): number {
  if (A.length === 1) return 1;
  return new Set(A).size;
}
