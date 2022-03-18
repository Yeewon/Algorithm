// 특정한 노드를 방문한 뒤에 연결된 모든 노드들도 방문
const dfs = (x, y, graph) => {
  // 주어진 범위를 벗어나는 경우에는 즉시 종료
  if (x <= -1 || x >= n || y <= -1 || y >= m) {
    return false;
  }

  // 현재 노드를 아직 방문하지 않았다면
  if (graph[x][y] === 0) {
    // 해당 노드를 방문 처리
    graph[x][y] = 1;

    // 상, 하, 좌, 우 의 위치들도 모드 재귀적으로 호출
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
