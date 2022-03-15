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

const n = 3; // 도시의 개수
const m = 2; // 통로의 개수
const c = 1; // 메시지를 보내고자 하는 도시
const input = [
  [1, 2, 4],
  [1, 3, 2],
];

// 다익스트라
const graph = Array.from({ length: n + 1 }, () => []);
const distance = Array.from({ length: n + 1 }, () => Infinity);

for (const [a, b, c] of input) {
  graph[a].push([c, b]);
}

function dijkstra(start) {
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
}

dijkstra(c);

console.log(distance);

// 모두 받는 데까지 걸리는 시간
let maxValue = 0;
// 메시지를 받는 도시의 총 개수
let count = 0;

distance.forEach((dist, index) => {
  if (dist !== Infinity) {
    count++;
    maxValue = Math.max(dist, maxValue);
  }
});

console.log(count - 1, maxValue);
