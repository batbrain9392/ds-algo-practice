export function binaryGap(N: number) {
  const binaryN = N.toString(2).split('');
  const gaps = getAllGaps(binaryN);
  return gaps.length ? Math.max(...gaps) : 0;
}

function getAllGaps(binaryN: string[]) {
  const gaps = [];
  let count = 0;
  for (let i = 1; i < binaryN.length; i++) {
    if (binaryN[i] === '0') {
      ++count;
    } else {
      if (count) {
        gaps.push(count);
        count = 0;
      }
    }
  }
  return gaps;
}
