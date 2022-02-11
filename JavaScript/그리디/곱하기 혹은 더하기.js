// +와 x를 넣어 결과적으로 가장 큰 수를 구하는 프로그램

const s = "567";
let result = 0;

// +기보다 x가 무조건 커지지 않을까?
// 예외 : 0, 1인 경우에는 +를 해야 커진다.

for (const c of s) {
  const number = Number(c);
  if ([0, 1].includes(number) || [0, 1].includes(result)) {
    result += number;
  } else {
    result *= number;
  }
}

console.log(result);
