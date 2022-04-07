export function cyclicRotation(A: number[], K: number) {
  if (!A.length || A.length === 1 || K === A.length) return A;
  const result = [...A];
  for (let i = 0; i < K; i++) {
    const lastElement = result.pop();
    lastElement !== undefined && result.unshift(lastElement);
  }
  return result;
}
