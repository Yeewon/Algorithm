const solution = (n, array) => {
  let answer = 0;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      let left = j > 0 ? array[i - 1][j - 1] : 0;
      let right = j < i ? array[i - 1][j] : 0;

      array[i][j] += Math.max(left, right);
    }
  }
  return Math.max(...array[n - 1]);
};

console.log(
  solution(5, [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]])
);
