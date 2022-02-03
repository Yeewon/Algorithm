const n = 4; // 노드의 개수
const m = 7; // 간선의 개수
// [a, b, c] : a에서 b번 노드로 가는 비용이 c
const input = [
  [1, 2, 4],
  [1, 4, 6],
  [2, 1, 3],
  [2, 3, 7],
  [3, 1, 5],
  [3, 4, 4],
  [4, 3, 2],
];

const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));

// 자기 자신에서 자기 자신으로 가는 비용은 0으로 초기화
for (let a = 1; a < n + 1; a++) {
  for (let b = 1; b < n + 1; b++) {
    if (a === b) {
      graph[a][b] = 0;
    }
  }
}

// 각 간선에 대한 정보를 입력받아, 그 값으로 초기화
for (const [a, b, c] of input) {
  graph[a][b] = c;
}

// 점화식에 따라 플로이드 워셜 알고리즘을 수행
for (let k = 1; k < n + 1; k++) {
  for (let a = 1; a < n + 1; a++) {
    for (let b = 1; b < n + 1; b++) {
      graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
    }
  }
}

// 수행된 결과를 출력
for (let a = 1; a < n + 1; a++) {
  for (let b = 1; b < n + 1; b++) {
    console.log(graph[a][b] === Infinity ? "INFINITY" : graph[a][b]);
  }
}
