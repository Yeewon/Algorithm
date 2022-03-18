const bfs = (n, m, x, y, graph) => {
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  const queue = [[x, y]];
  graph[x][y] = 1;

  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m || graph[nx][ny] === 1)
        continue;

      graph[nx][ny] = 1;
      queue.push([nx, ny]);
    }
  }
  return true;
};

const solution = (n, m, graph) => {
  let answer = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 0) {
        if (bfs(n, m, i, j, graph) === true) {
          answer += 1;
        }
      }
    }
  }
  return answer;
};

const n = 4;
const m = 5;
const graph = [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
];

console.log(solution(n, m, graph));
