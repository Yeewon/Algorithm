const d = new Array(100);

// 탑다운 방식
const fibo_topdown = (x) => {
  if (x === 1 || x === 2) {
    return 1;
  }
  if (d[x]) {
    return d[x];
  }
  d[x] = fibo(x - 1) + fibo(x - 2);
  return d[x];
};

// 보텀업 방식
const fibo_bottomup = (n) => {
  d[1] = 1;
  d[2] = 1;
  for (let i = 3; i < n + 1; i++) {
    d[i] = d[i - 1] + d[i - 2];
  }
  return d[n];
};

const solution = () => {
  console.log(fibo_bottomup(4));
};
