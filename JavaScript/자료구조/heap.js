class Heap {
  constructor() {
    this.heap = [];
    this.size = this.heap.length;
  }

  // 삽입연산 : 힙을 구성
  push(value) {
    this.heap.push(value);
    this.size++;
    this.moveUp();
  }

  // 삭제연산 : 최솟값을 뽑아내는 연산
  pop() {
    if (this.size === 0) return;
    if (this.size === 1) {
      this.size--;
      return this.heap.pop();
    }

    // 최솟값을 저장
    const minValue = this.heap[0];
    // 힙의 가장 마지막 요소를 루트에 저장
    this.heap[0] = this.heap.pop();
    // 루트노드 부터 아래로 대소 비교 시작하여 위치 조정
    this.size--;
    this.moveDown(0);

    return minValue;
  }

  // 힙의 하단에서 부터 상단으로 값을 변경한다.
  moveUp() {
    // 힙의 맨 마지막 요소에 값이 추가 되었으므로
    let curIdx = this.size - 1;

    // 최솟값을 가장 최상단으로 올리는 작업을 반복
    while (curIdx > 0) {
      const parentIdx = Math.floor((curIdx - 1) / 2);

      if (this.heap[parentIdx] <= this.heap[curIdx]) break;

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
    if (leftIdx < this.size && this.heap[leftIdx] < this.heap[minIdx]) {
      minIdx = leftIdx;
    }

    // 힙의 왼쪽 자식으로 인덱스 바뀌어 있어도 오른쪽이 더 작은 요소였다면 오른쪽 인덱스 요소로 변경된다.
    if (rightIdx < this.size && this.heap[rightIdx] < this.heap[minIdx]) {
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

// 최소 힙
const minHeap = new Heap();

[4, 7, 6, 5, 2, 9, 1, 3, 2, 3].forEach((number) => minHeap.push(number));

const minHeapResult = [];
while (minHeap.size !== 0) {
  minHeapResult.push(minHeap.pop());
}
console.log(minHeapResult);

// 최대 힙
const maxHeap = new Heap();

[4, 7, 6, 5, 2, 9, 1, 3, 2, 3].forEach((number) => maxHeap.push(-1 * number));

const maxHeapResult = [];
while (maxHeap.size !== 0) {
  maxHeapResult.push(-1 * maxHeap.pop());
}

console.log(maxHeapResult);
