export function mergeSort(A: number[]): number[] {
  if (A.length <= 1) return A;
  const mid = Math.floor(A.length / 2);
  const leftArr = mergeSort(A.slice(0, mid));
  const rightArr = mergeSort(A.slice(mid));
  return merge(leftArr, rightArr);
}

function merge(leftArr: number[], rightArr: number[]) {
  const mergedArr: number[] = [];
  while (leftArr.length && rightArr.length) {
    const smallerElement =
      leftArr[0] < rightArr[0] ? leftArr.shift() : rightArr.shift();
    smallerElement && mergedArr.push(smallerElement);
  }
  return [...mergedArr, ...leftArr, ...rightArr];
}
