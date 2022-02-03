const n = 5; // 노드
const m = 7; // 간선
const x = 4; // 목적지
const k = 5; // 경유
const input = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 4],
  [3, 4],
  [3, 5],
  [4, 5],
];

// 플로이드 워셜을 이용
//  a->k, k->x 의 최단 거리 구한다.

const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));

for (let a = 1; a < n + 1; a++) {
  for (let b = 1; b < n + 1; b++) {
    if (a === b) {
      graph[a][b] = 0;
    }
  }
}

for (const [a, b] of input) {
  graph[a][b] = 1;
  graph[b][a] = 1;
}

for (let k = 1; k < n + 1; k++) {
  for (let a = 1; a < n + 1; a++) {
    for (let b = 1; b < n + 1; b++) {
      graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
    }
  }
}

const distance = graph[1][k] + graph[k][x];

console.log(distance === Infinity ? -1 : distance);
