const solution = () => {
  //   const n = 3;
  //   const m = 4;
  //   const array = [
  //     [1, 3, 3, 2],
  //     [2, 1, 4, 1],
  //     [0, 6, 4, 7],
  //   ];

  const n = 4;
  const m = 4;
  const array = [
    [1, 3, 1, 5],
    [2, 2, 4, 1],
    [5, 0, 2, 3],
    [0, 6, 1, 2],
  ];

  let answer = 0;

  for (let j = 1; j < m; j++) {
    for (let i = 0; i < n; i++) {
      // array[i-1][j-1], array[i][j-1], array[i+1][j-1] 중 최댓값 선택
      const leftUp = i > 0 ? array[i - 1][j - 1] : 0;
      const leftDown = i > n - 2 ? 0 : array[i + 1][j - 1];

      array[i][j] += Math.max(leftUp, array[i][j - 1], leftDown);

      // 마지막 열 중 최댓값 출력
      if (j === m - 1) {
        answer = Math.max(answer, array[i][j]);
      }
    }
  }

  return answer;
};
