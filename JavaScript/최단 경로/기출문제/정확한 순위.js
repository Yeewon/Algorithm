const n = 6;
const m = 6;
const input = [
  [1, 5],
  [3, 4],
  [4, 2],
  [4, 6],
  [5, 2],
  [5, 4],
];

const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));

for (let a = 1; a < n + 1; a++) {
  graph[a][a] = 0;
}

for (const [a, b] of input) {
  graph[a][b] = 1;
}

for (let k = 1; k < n + 1; k++) {
  for (let a = 1; a < n + 1; a++) {
    for (let b = 1; b < n + 1; b++) {
      graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
    }
  }
}

console.log(graph);

let result = 0;
for (let i = 1; i < n + 1; i++) {
  let count = 0;
  for (let j = 1; j < n + 1; j++) {
    if (graph[i][j] !== Infinity || graph[j][i] !== Infinity) {
      count++;
    }
  }
  if (count === n) {
    result++;
  }
}

console.log(result);
