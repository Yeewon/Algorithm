function solution(numbers) {
  let sum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((a, b) => a + b, 0);
  for (const num of numbers) {
    sum -= num;
  }
  return sum;
}
