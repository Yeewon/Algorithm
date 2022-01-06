function solution(s) {
  const stack = [];
  // s를 모두 돈다.
  for (const c of s) {
    if (x === "(") {
      count += 1;
    } else {
      count -= 1;
    }
  }
  return count;
}

solution("(())");
