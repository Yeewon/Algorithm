// 시간 초과
function solution1(s) {
  while (s.length) {
    for (let i = 1; i < s.length; i++) {
      if (s[i - 1] === s[i]) {
        s = s.slice(0, i - 1) + s.slice(i + 1);
      }
      if (i === s.length - 1) {
        return 0;
      }
    }
  }
  return 1;
}

// 스택 이용 : 통과
function solution(s) {
  const stack = [];

  for (const char of s) {
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.length ? 0 : 1;
}

console.log(solution("baabaa"));
console.log(solution("cdcd"));
