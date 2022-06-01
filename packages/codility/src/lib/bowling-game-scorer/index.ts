export function bowlingGameScorer(arr: number[]) {
  let finalScore = 0;
  for (let i = 0; i < arr.length - 1; i = i + 2) {
    const slice = arr.slice(i, i + 5);
    const scoreForRound = getScoreForRound(slice);
    finalScore += scoreForRound;
  }
  return finalScore;
}

function getScoreForRound(arr: number[]) {
  const scoreForRound = arr[0] + arr[1];
  // normal round
  if (scoreForRound < 10) {
    return scoreForRound;
  }
  // spare
  if (arr[0] !== 10 || arr.length === 3) {
    return scoreForRound + arr[2];
  }
  // strike
  if (arr[2] !== 10) {
    return scoreForRound + arr[2] + arr[3];
  }
  // next one is also a strike
  if (arr[4]) {
    return scoreForRound + arr[2] + arr[4];
  }
  return scoreForRound + arr[2] + arr[3];
}
