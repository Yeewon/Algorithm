// https://programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
  return !(
    x %
    String(x)
      .split("")
      .reduce((acc, cur) => {
        return acc + Number(cur);
      }, 0)
  );
}
