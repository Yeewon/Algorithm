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

const v = 3;
const e = 3;
const input = [
  [1, 2],
  [1, 3],
  [2, 3],
];

const parent = Array(v + 1).fill(0);

for (let i = 1; i < v + 1; i++) {
  parent[i] = i;
}

let cycle = false;

for (let i = 0; i < e; i++) {
  const [a, b] = input[i];
  if (find_parent(a) === find_parent(b)) {
    cycle = true;
    break;
  } else {
    union_parent(parent, a, b);
  }
}

console.log(cycle ? "사이클 발생" : "사이클 발생하지 않음");
