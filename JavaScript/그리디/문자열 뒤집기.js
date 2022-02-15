const s = "00011001010100010000";

// 최소 뒤집기 횟수로 모두 같은 숫자로 만들기
// 연속된 0 과 1의 부분집합 개수를 구한다.
// 최솟값을 출력한다.

const s_array = s.split("");

let now = "";
const count = [0, 0];

while (s_array.length) {
  const char = s_array.pop();
  if (now !== char) {
    count[char]++;
    now = char;
  }
}

console.log(Math.min(...count));
