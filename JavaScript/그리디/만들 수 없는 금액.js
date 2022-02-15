const n = 5;
const units = [3, 2, 1, 1, 9];

// 1. 화폐 단위 기준으로 오름차순 정렬
// 2. 1부터 특정한 금액을 만들 수 있는지 확인

let target = 1;
units.sort((a, b) => a - b);

for (let i = 0; i < n; i++) {
  const unit = units[i];
  if (target < unit) {
    break;
  }
  target += unit;
}

console.log(target);
