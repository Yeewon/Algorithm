const n = 5; // 데이터의 개수 n
const m = 5; // 찾고자 하는 부분합 n
const data = [1, 2, 3, 2, 5];

let count = 0;
let interval_sum = 0;
let end = 0;

for (let start = 0; start < n; start++) {
  while (interval_sum < m && end < n) {
    interval_sum += data[end];
    end++;
  }
  if (interval_sum === m) {
    count++;
  }
  interval_sum -= data[start];
}

console.log(count);
