const DFS = (graph, start, visited) => {
  visited[start] = true;
  console.log(start);

  for (const i of graph[start]) {
    !visited[i] && DFS(graph, i, visited);
  }
};

const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

const visited = Array(9).fill(false);

DFS(graph, 1, visited);
