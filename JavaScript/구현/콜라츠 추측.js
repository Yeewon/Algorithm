// https://programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
  let count = 0;
  while (count < 500) {
    if (num === 1) {
      return count;
    }
    num = num % 2 ? num * 3 + 1 : num / 2;
    count++;
  }
  return -1;
}
