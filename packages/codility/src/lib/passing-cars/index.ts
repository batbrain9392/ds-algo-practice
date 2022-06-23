// Assumption - passing cars can only start with cars going east.
// @example
// - [0, 1] has 1 passing car
// - [1, 0] has 0 passing cars

const EAST = 0;
const WEST = 1;

export function passingCars(A: number[]): number {
  // if there's only one car, then there's no possibility of passing cars
  if (A.length === 1) return 0;

  // passing cars can only start with cars going east
  if (A.length === 2) return +(A[0] === EAST && A[1] === WEST);

  // find the first car going east
  let c = -1;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === EAST) {
      c = i;
      break;
    }
  }

  // no car going east
  if (c === -1) return 0;

  // count the number of passing cars
  let numberOfCarsGoingEast = 1;
  let numberOfPassingCars = 0;
  for (let i = c + 1; i < A.length; i++) {
    if (A[i] === EAST) {
      numberOfCarsGoingEast++;
    } else {
      numberOfPassingCars += numberOfCarsGoingEast;
      if (numberOfPassingCars > 1_000_000_000) return -1;
    }
  }
  return numberOfPassingCars;
}
