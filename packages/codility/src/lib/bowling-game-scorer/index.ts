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
  // either normal round spare
  // or the last round was a strike
  if (arr[0] !== 10 || arr.length === 3) {
    return scoreForRound + arr[2];
  }
  // normal round strike where next one was not a strike
  if (arr[2] !== 10) {
    return scoreForRound + arr[2] + arr[3];
  }
  // normal round strike where next one is also a strike
  return scoreForRound + arr[2] + arr[4];
}
