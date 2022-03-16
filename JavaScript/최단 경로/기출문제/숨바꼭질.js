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

const n = 6;
const m = 7;
const start = 1;

const input = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
];

const graph = Array.from({ length: n + 1 }, () => []);
const distance = Array.from({ length: n + 1 }, () => Infinity);

for (const [a, b] of input) {
  graph[a].push([1, b]);
  graph[b].push([1, a]);
}

const dijkstra = (start) => {
  const minHeap = new MinHeap();
  minHeap.push([0, start]);
  distance[start] = 0;

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

dijkstra(start);

distance.shift();
const max = Math.max(...distance);
const max_count = distance.filter((dist) => dist === max).length;

console.log(max, max_count);
