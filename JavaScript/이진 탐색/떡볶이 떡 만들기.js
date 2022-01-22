// 0과 최댓값 사이의 값
// 이진 탐색

function solution() {
  const n = 4;
  const m = 6; // 적어도 m만큼의 떡을 얻는다.
  const array = [19, 15, 10, 17];

  let start = 0;
  let end = Math.max(...array);

  let result = 0;

  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    const total = array.reduce(
      (acc, cur) => acc + (cur > mid ? cur - mid : 0),
      0
    );

    if (total < m) {
      end = mid - 1;
    } else {
      result = mid;
      start = mid + 1;
    }
  }
  console.log(result);
}
