const n = 5; // data 길이
const m = 8;
const k = 3; // 최대 반복 가능한 길이
const data = [2, 4, 5, 4, 6];
data.sort((a, b) => b - a);

const first = data[0];
const second = data[1];

// 수열 사용
// 가장 큰 수가 더해지는 횟수 계산
const firstCount = parseInt(m / (k + 1)) * k;
firstCount += m % (k + 1);

const answer = firstCount * first + (m - firstCount) * second;

// let answer = first;

// for (let i = 1; i < m; i++) {
//   answer += i % k ? first : second;
// }

console.log(answer);
