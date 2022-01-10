// https://programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  return absolutes.reduce((acc, cur, index) => {
    const calculated = cur * (signs[index] ? 1 : -1);
    return acc + calculated;
  }, 0);
}
