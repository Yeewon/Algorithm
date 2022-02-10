const dfs = (x, y, graph) => {
  if (x <= -1 || x >= n || y <= -1 || y >= m) {
    return false;
  }

  if (graph[x][y] === 0) {
    graph[x][y] = 1;

    dfs(x - 1, y, graph);
    dfs(x + 1, y, graph);
    dfs(x, y - 1, graph);
    dfs(x, y + 1, graph);

    return true;
  }
  return false;
};

const solution = (n, m, graph) => {
  let result = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(i, j, graph) === true) {
        result += 1;
      }
    }
  }
  return result;
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
