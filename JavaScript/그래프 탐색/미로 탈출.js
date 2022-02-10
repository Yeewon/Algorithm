const bfs = (n, m, graph, start) => {
  // 이동할 네 가지 방향 정의 (상, 하, 좌, 우 )
  const moves = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const queue = [start];

  while (queue.length) {
    // 하나의 원소를 뽑아 출력
    const [x, y] = queue.shift();
    // 현재 위치에서 4가지 방향으로 위치 확인
    for (const [dx, dy] of moves) {
      nx = x + dx;
      ny = y + dy;
      // 범위를 벗어난 경우 무시
      if (nx <= -1 || nx >= n || ny <= -1 || ny >= m) {
        continue;
      }
      // 벽인 경우 무시
      if (graph[nx][ny] === 0) {
        continue;
      }
      // 해당 노드를 처음 방문하는 경우에만 최단 거리 기록
      if (graph[nx][ny] === 1) {
        graph[nx][ny] = graph[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
};

const solution = (n, m, graph) => {
  bfs(n, m, graph, [0, 0]);
  // 가장 오른쪽 아래까지의 최단 거리 반환
  return graph[n - 1][m - 1];
};

const n = 5;
const m = 6;
const graph = [
  [1, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];

console.log(solution(n, m, graph));
