// 10, 2
function solution(brown, yellow) {
  let total = brown + yellow;

  for (let yellowHeight = 1; yellowHeight <= yellow; yellowHeight++) {
    if (yellow % yellowHeight) continue;

    let yellowWidth = yellow / yellowHeight;
    if ((yellowHeight + 2) * (yellowWidth + 2) === total)
      return [yellowWidth + 2, yellowHeight + 2];
  }
}
