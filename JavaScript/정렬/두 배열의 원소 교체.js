const n = 5;
const k = 3;
const A = [1, 2, 5, 4, 3];
const B = [5, 5, 6, 6, 5];

let answer = 0;

// A의 최솟값 k부터 끝까지 n-k개 더한다.
// B의 최댓값 k개를 더한다.

A.sort((a, b) => a - b); // 1,2,3,4,5
B.sort((a, b) => b - a); // 5,5,5,6,6

for (let i = k; i < A.length; i++) {
  answer += A[i];
}

for (let i = 0; i < k; i++) {
  answer += B[i];
}

console.log(answer);
