const solution = () => {
  // bottom-up
  const n = 26;
  const d = new Array(30001);
  d[1] = 0;

  for (let i = 2; i < n + 1; i++) {
    // 1을 빼는 경우
    d[i] = d[i - 1] + 1;

    // 2로 나누어 떨어지는 경우
    if (i % 2 === 0) {
      d[i] = Math.min(d[i], d[parseInt(i / 2)] + 1);
    }

    // 3으로 나누어 떨어지는 경우
    if (i % 3 === 0) {
      d[i] = Math.min(d[i], d[parseInt(i / 3)] + 1);
    }

    // 5로 나누어 떨어지는 경우
    if (i % 5 === 0) {
      d[i] = Math.min(d[i], d[parseInt(i / 5)] + 1);
    }
  }

  console.log(d[n]);
};
