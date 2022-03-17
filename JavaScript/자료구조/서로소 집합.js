// 특정 원소가 속한 집합 찾기
const find_parent = (parent, x) => {
  if (parent[x] !== x) {
    parent[x] = find_parent(parent, parent[x]);
  }
  return parent[x];
};

// 두 원소가 속한 집합을 합치기
const union_parent = (parent, a, b) => {
  a = find_parent(parent, a);
  b = find_parent(parent, b);

  if (a < b) {
    parent[b] = a;
  } else {
    parent[a] = b;
  }
};

const v = 6; // 노드의 개수
const e = 4; // 간선(union 연산)의 개수
const input = [
  [1, 4],
  [2, 3],
  [2, 4],
  [5, 6],
];

const parent = Array(v + 1).fill(0); // 부모 테이블 초기화

// 부모 테이블 상에서, 부모를 자기 자신으로 초기화
for (let i = 1; i < v + 1; i++) {
  parent[i] = i;
}

// union 연산을 각각 수행
input.forEach(([a, b]) => union_parent(parent, a, b));

console.log(parent);
