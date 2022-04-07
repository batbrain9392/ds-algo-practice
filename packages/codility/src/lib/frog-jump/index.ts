export function frogJump(X: number, Y: number, D: number) {
  if (Y === X) return 0;
  return Math.ceil((Y - X) / D);
}
