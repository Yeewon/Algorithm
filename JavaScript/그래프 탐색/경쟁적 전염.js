const n = 3;
const k = 2;

// s초 후 (x,y) 에 존재하는 바이러스 번호 출력
const s = 2;
const x = 3;
const y = 2;

const data = [
  [1, 0, 2],
  [0, 0, 0],
  [3, 0, 0],
];

const temp = [];

for (let i = 0; i < n; i++) {
  const arr = Array(n).fill(0);
  temp.push(arr);
}

const d = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const virus = (x, y, temp) => {
  let selected_virus = Infinity;

  for (const [dx, dy] of d) {
    const nx = x + dx;
    const ny = y + dy;

    if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
    if (data[nx][ny] === 0) continue;

    selected_virus = Math.min(selected_virus, data[nx][ny]);
  }

  temp[x][y] = selected_virus === Infinity ? 0 : selected_virus;
};

const solution = () => {
  for (let t = 0; t < s; t++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        temp[i][j] = data[i][j];
      }
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (data[i][j] === 0) {
          virus(i, j, temp);
        }
      }
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        data[i][j] = temp[i][j];
      }
    }
  }

  return data[x - 1][y - 1];
};

console.log(solution());
