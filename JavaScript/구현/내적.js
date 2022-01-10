// https://programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
  return a.reduce((acc, cur, index) => {
    return acc + cur * b[index];
  }, 0);
}
