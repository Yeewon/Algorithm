let N = 8;
const M = 5;
const weights = [1, 5, 4, 3, 2, 4, 5, 2];

const counts = Array.from({ length: M + 1 }, () => 0);

weights.forEach((weight) => counts[weight]++);

let result = 0;

// 각 무게애 대하여 처리
for (const count of counts) {
  N -= count;
  result += count * N;
}

console.log(result);
