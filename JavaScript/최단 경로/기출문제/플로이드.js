const n = 5;
const m = 14;

const input = [
  [1, 2, 2],
  [1, 3, 3],
  [1, 4, 1],
  [1, 5, 10],
  [2, 4, 2],
  [3, 4, 1],
  [3, 5, 1],
  [4, 5, 3],
  [3, 5, 10],
  [3, 1, 8],
  [1, 4, 2],
  [5, 1, 7],
  [3, 4, 2],
  [5, 2, 4],
];

const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));

for (let a = 1; a < n + 1; a++) {
  graph[a][a] = 0;
}

for (const [a, b, c] of input) {
  graph[a][b] = Math.min(graph[a][b], c);
}

for (let k = 1; k < n + 1; k++) {
  for (let a = 1; a < n + 1; a++) {
    for (let b = 1; b < n + 1; b++) {
      graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
    }
  }
}

console.log(graph);
