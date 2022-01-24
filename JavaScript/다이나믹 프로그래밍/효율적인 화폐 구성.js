const solution = () => {
  const n = 2;
  const m = 15;
  const array = [2, 3];

  // 다이나믹 프로그래밍(Dynamic Programming) 진행(보텀업)
  const d = Array.from({ length: m + 1 }, () => 10001);
  d[0] = 0;

  for (let i = 0; i < n; i++) {
    const current = array[i];
    for (let j = current; j < m + 1; j++) {
      if (d[j - current] !== 10001) {
        d[j] = Math.min(d[j], d[j - current] + 1);
      }
    }
  }

  return d[m] === 10001 ? -1 : d[m];
};
