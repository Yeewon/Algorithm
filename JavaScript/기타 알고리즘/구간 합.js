const n = 5;
const data = [10, 20, 30, 40, 50];

let sum_value = 0;
const prefix_sum = [0];
for (const num of data) {
  sum_value += num;
  prefix_sum.push(sum_value);
}

console.log(prefix_sum);

const left = 3;
const right = 4;
console.log(prefix_sum[right] - prefix_sum[left - 1]);
