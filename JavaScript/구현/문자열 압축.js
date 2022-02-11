const solution = (s) => {
  let answer = s.length;

  for (let step = 1; step < parseInt(s.length / 2) + 1; step++) {
    let compressed = "";
    let prev = s.slice(0, step);
    let repeat = 1;

    // 단위(step) 크기만큼 증가시키며 이전 문자열과 비교
    for (let j = step; j < s.length; j += step) {
      let next = s.slice(j, j + step);
      // 이전 상태와 동일하다면 반복 횟수(repeat) 증가
      if (prev === next) {
        repeat++;
      } else {
        // 다른 문자열이 나왔다면 (더 이상 압축하지 못하는 경우라면)
        compressed += (repeat > 1 ? String(repeat) : "") + prev;
        prev = next; // 다시 상태 초기화
        repeat = 1;
      }
    }
    compressed += (repeat > 1 ? String(repeat) : "") + prev;
    answer = Math.min(answer, compressed.length);
  }
  return answer;
};

console.log(solution("abcdcdeabcfcfcf"));
console.log(solution("aabbaccc"));
console.log(solution("ababcdcdababcdcd"));
console.log(solution("abcabcdede"));
console.log(solution("abcabcabcabcdededededede"));
console.log(solution("xababcdcdababcdcd"));
