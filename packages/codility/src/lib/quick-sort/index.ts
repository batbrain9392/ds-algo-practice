export function quickSort(A: number[]): number[] {
  if (A.length <= 1) return A;
  const { pivot, newArr } = partition([...A]);
  const leftArr = newArr.slice(0, pivot);
  const rightArr = newArr.slice(pivot + 1);
  const result = [...quickSort(leftArr), newArr[pivot], ...quickSort(rightArr)];
  return result;
}

function partition(A: number[]): {
  pivot: number;
  newArr: number[];
} {
  const last = A.length - 1;
  const pivot = A[last];
  let left = 0;
  let right = last - 1;
  while (left <= right) {
    while (A[left] < pivot) left++;
    while (A[right] > pivot) right--;
    if (left <= right) {
      swap(A, left, right);
      left++;
      right--;
    }
  }
  swap(A, left, A.length - 1);
  return { pivot: left, newArr: A };
}

function swap(A: number[], i: number, j: number) {
  const temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}
