function solution(answers) {
  let n = 1260;
  let count = 0;
  const array = [500, 100, 50, 10];
  for (const coin of array) {
    count += parseInt(n / coin);
    n %= coin;
  }
  console.log(count);
}
