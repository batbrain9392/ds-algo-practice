export function oddOccurrencesInArray(A: number[]) {
  if (A.length === 1) return A[0];
  const result = new Set<number>();
  A.forEach((v) => (!result.has(v) ? result.add(v) : result.delete(v)));
  return [...result].pop();
}
