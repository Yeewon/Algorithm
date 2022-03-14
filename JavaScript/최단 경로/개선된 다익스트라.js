// 힙 자료구조 사용

class MinHeap {
  constructor() {
    this.heap = [];
    this.size = this.heap.length;
  }

  insert(value) {
    this.heap.push(value);
    this.size++;
    this.moveUp();
  }

  // [cost, index]
  pop() {
    if (this.size === 0) return;
    if (this.size === 1) {
      this.size--;
      return this.heap.pop();
    }
    const min = this.heap[0];

    this.heap[0] = this.heap.pop();
    this.size--;
    this.moveDown(0);

    return min;
  }

  // 힙의 하단에서 부터 상단으로 값을 변경한다.
  moveUp() {
    // 힙의 맨 마지막 요소에 값이 추가 되었으므로
    let curIdx = this.heap.length - 1;

    // 최솟값을 가장 최상단으로 올리는 작업을 반복
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

  // 힙의 상단에서 부터 하단으로 값을 변경한다.
  moveDown(curIdx = 0) {
    const leftIdx = 2 * curIdx + 1;
    const rightIdx = 2 * curIdx + 2;
    let minIdx = curIdx;

    // 힙의 왼쪽 자식과 변경 여부
    if (leftIdx < this.size && this.heap[leftIdx][0] < this.heap[minIdx][0]) {
      minIdx = leftIdx;
    }

    // 힙의 왼쪽 자식으로 인덱스 바뀌어 있어도 오른쪽이 더 작은 요소였다면 오른쪽 인덱스 요소로 변경된다.
    if (rightIdx < this.size && this.heap[rightIdx][0] < this.heap[minIdx][0]) {
      minIdx = rightIdx;
    }
    // swap 후 재귀 호출울 통해 계속 값 변경
    if (minIdx !== curIdx) {
      [this.heap[curIdx], this.heap[minIdx]] = [
        this.heap[minIdx],
        this.heap[curIdx],
      ];

      this.moveDown(minIdx);
    }
  }
}

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
const distance = Array.from({ length: n + 1 }, () => Infinity);

input.forEach(([a, b, c]) => {
  graph[a].push([c, b]);
});

const dijkstra = (start) => {
  const heap = new MinHeap();
  heap.insert([0, start]);
  distance[start] = 0;

  while (heap.size) {
    const [now_dist, now] = heap.pop();

    if (distance[now] < now_dist) continue;

    graph[now].forEach(([dest_dist, dest]) => {
      const cost = now_dist + dest_dist;
      if (distance[dest] > cost) {
        distance[dest] = cost;
        heap.insert([cost, dest]);
      }
    });
  }
};

dijkstra(start);
console.log(distance);
