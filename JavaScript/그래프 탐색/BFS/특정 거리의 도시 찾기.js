// 모든 도로의 거리는 1 이라는 조건 덕분에 BFS를 사용하여 간단히 해결할 수 있다.

const N = 4;
const M = 4;
const K = 2;
const start = 1;

const road = [
  [1, 2],
  [1, 3],
  [2, 3],
  [2, 4],
];

const bfs = (graph, start, distance) => {
  const queue = [start];
  distance[start] = 0;

  while (queue.length) {
    const now = queue.shift();
    graph[now].forEach((nextNode) => {
      if (distance[nextNode] === -1) {
        distance[nextNode] = distance[now] + 1;
        queue.push(nextNode);
      }
    });
  }
};

const solution = () => {
  const graph = Array.from({ length: N + 1 }, () => []);
  const distance = Array.from({ length: N + 1 }, () => -1);

  road.forEach(([A, B]) => {
    graph[A].push(B);
  });

  bfs(graph, start, distance);

  for (let i = 0; i < N + 1; i++) {
    if (distance[i] === K) {
      console.log(i);
    }
  }
};
