/*
[아이디어]
다이나믹 프로그래밍(Dynamic Programming) 진행 (보텀업)
D[i]까지의 최댓값 = D[i-1] 과 D[i-2]+D[i]의 값 중 최댓값
*/
const solution = () => {
  const array = [1, 3, 1, 5];
  const n = array.length;

  array[1] = Math.max(array[0], array[1]);

  for (let i = 2; i < n; i++) {
    array[i] = Math.max(array[i - 1], array[i - 2] + array[i]);
  }
  console.log(array[n - 1]);
};
