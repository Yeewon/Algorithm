const n = 3;
const number = [3, 4, 5];
const operator = [1, 0, 1, 0];
let [add, sub, mul, div] = operator;

let max_value = -Infinity;
let min_value = Infinity;

const dfs = (i, now) => {
  // 모든 연산자를 다 사용한 경우, 최솟값과 최댓값 업데이트
  if (i === n) {
    min_value = Math.min(min_value, now);
    max_value = Math.max(max_value, now);
  } else {
    // 각 연산자에 대하여 재귀적으로 수행
    if (add > 0) {
      add--;
      dfs(i + 1, now + number[i]);
      add++;
    }
    if (sub > 0) {
      sub--;
      dfs(i + 1, now - number[i]);
      sub++;
    }
    if (mul > 0) {
      mul--;
      dfs(i + 1, now * number[i]);
      mul++;
    }
    if (div > 0) {
      div--;
      dfs(i + 1, parseInt(now / number[i]));
    }
  }
};

const solution = () => {
  dfs(1, number[0]);
  return [max_value, min_value];
};

console.log(solution());
