// https://programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  let answer = 0;
  const sum = String(n)
    .split("")
    .reduce((acc, cur) => {
      return acc + Number(cur);
    }, 0);
  return sum;
}
