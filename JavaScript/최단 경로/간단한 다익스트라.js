const n = 6; // 노드의 개수
const m = 11; // 간선의 개수
const start = 1; // 시작 노드 번호
// [a, b, c] : a에서 b번 노드로 가는 비용이 c
const input = [
  [1, 2, 2],
  [1, 3, 5],
  [1, 4, 1],
  [2, 3, 3],
  [2, 4, 2],
  [3, 2, 3],
  [3, 6, 5],
  [4, 3, 3],
  [4, 5, 1],
  [5, 3, 1],
  [5, 6, 2],
];

const graph = Array.from({ length: n + 1 }, () => []);

// 방문한 적이 있는지 체크하는 목적의 리스트
const visited = Array.from({ length: n + 1 }, () => false);
// 최단 거리 테이블을 모두 무한으로 초기화
const distance = Array.from({ length: n + 1 }, () => Infinity);

for (let i = 0; i < m; i++) {
  const [a, b, c] = input[i];
  graph[a].push([b, c]);
}

// 방문하지 않은 노드 중에서, 가장 최단 거리가 짧은 노드의 번호를 반환
function get_smallest_node() {
  let min_value = Infinity;
  let index = 0;

  for (let i = 1; i < n + 1; i++) {
    if (distance[i] < min_value && !visited[i]) {
      min_value = distance[i];
      index = i;
    }
  }
  return index;
}

function dijkstra(start) {
  // 시작 노드에 대해서 초기화, 방문처리
  distance[start] = 0;
  visited[start] = true;

  for (const [dest, dist] of graph[start]) {
    distance[dest] = dist;
  }

  // 시작 노드를 제외한 전체 n-1개의 노드에 대해 반복
  for (let i = 0; i < n - 1; i++) {
    // 현재 최단 거리가 가장 짧은 노드를 꺼내서, 방문 처리
    now = get_smallest_node();
    visited[now] = true;
    // 현재 노드와 연결된 다른 노드를 확인
    for (const [dest, dist] of graph[now]) {
      const cost = distance[now] + dist;
      if (cost < distance[dest]) {
        distance[dest] = cost;
      }
    }
  }
}

dijkstra(start);

// 모든 노드로 가기 위한 최단 거리를 출력
for (let i = 1; i < n + 1; i++) {
  console.log(distance[i] === Infinity ? "INFINITY" : distance[i]);
}
