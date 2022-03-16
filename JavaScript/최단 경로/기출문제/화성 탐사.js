// 힙 자료구조 사용
class MinHeap {
  constructor() {
    this.heap = [];
    this.size = this.heap.length;
  }

  push(value) {
    this.heap.push(value);
    this.size++;
    this.moveUp();
  }

  pop() {
    if (this.size === 0) return;
    if (this.size === 1) {
      this.size--;
      return this.heap.pop();
    }
    const minValue = this.heap[0];

    this.heap[0] = this.heap.pop();
    this.size--;
    this.moveDown(0);

    return minValue;
  }

  moveUp() {
    let curIdx = this.size - 1;
    while (curIdx > 0) {
      const parentIdx = Math.floor((curIdx - 1) / 2);

      if (this.heap[parentIdx][0] <= this.heap[curIdx][0]) break;

      [this.heap[parentIdx], this.heap[curIdx]] = [
        this.heap[curIdx],
        this.heap[parentIdx],
      ];

      curIdx = parentIdx;
    }
  }

  moveDown(curIdx = 0) {
    const leftIdx = 2 * curIdx + 1;
    const rightIdx = 2 * curIdx + 2;
    let minIdx = curIdx;

    if (leftIdx < this.size && this.heap[leftIdx][0] < this.heap[minIdx][0]) {
      minIdx = leftIdx;
    }

    if (rightIdx < this.size && this.heap[rightIdx][0] < this.heap[minIdx][0]) {
      minIdx = rightIdx;
    }

    if (minIdx !== curIdx) {
      [this.heap[curIdx], this.heap[minIdx]] = [
        this.heap[minIdx],
        this.heap[curIdx],
      ];
      this.moveDown(minIdx);
    }
  }
}

const start = 0;
// const n = 3;
// const input = [
//   [5, 5, 4],
//   [3, 9, 1],
//   [3, 2, 7],
// ];

const n = 5;
const input = [
  [3, 7, 2, 0, 1],
  [2, 8, 0, 9, 1],
  [1, 2, 1, 8, 1],
  [9, 8, 9, 2, 0],
  [3, 6, 5, 1, 5],
];

// (n * i) + j
const graph = Array.from({ length: n * n }, () => []);
const distance = Array.from({ length: n * n }, () => Infinity);

const DIRECTION = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

for (let x = 0; x < n; x++) {
  for (let y = 0; y < n; y++) {
    const now = n * x + y;

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = DIRECTION[i];
      const [nx, ny] = [x + dx, y + dy];

      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

      const cost = input[nx][ny];
      const dest = n * nx + ny;
      graph[now].push([cost, dest]);
    }
  }
}

const dijkstra = () => {
  const minHeap = new MinHeap();
  minHeap.push([input[0][0], 0]);
  distance[0] = input[0][0];

  while (minHeap.size) {
    const [now_dist, now] = minHeap.pop();

    if (distance[now] < now_dist) continue;

    graph[now].forEach(([dest_dist, dest]) => {
      const cost = now_dist + dest_dist;

      if (distance[dest] > cost) {
        distance[dest] = cost;
        minHeap.push([cost, dest]);
      }
    });
  }
};

dijkstra(0);

console.log(distance);
