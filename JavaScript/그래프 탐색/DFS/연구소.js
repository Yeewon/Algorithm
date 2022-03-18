// 0 = 빈칸, 1 = 벽, 2 = 바이러스
// 벽 3개 꼭 세워야 한다.
// 0 영역 크기 최댓값 = 2 영역 크기 최솟값

const n = 7;
const m = 7;
const data = [
  [2, 0, 0, 0, 1, 1, 0],
  [0, 0, 1, 0, 1, 2, 0],
  [0, 1, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0],
];

let result = 0;

const temp = [];
for (let i = 0; i < n; i++) {
  const arr = Array(m).fill(0);
  temp.push(arr);
}

// 4가지 이동 방향에 대한 리스트
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// dfs를 이용해 각 바이러스가 사방으로 퍼지도록 하기
const virus_dfs = (x, y) => {
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    // 상, 하, 좌, 우 중에서 바이러스가 퍼질 수 있는 경우
    if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
      if (temp[nx][ny] === 0) {
        // 바이러스 배치
        temp[nx][ny] = 2;
        // 재귀적으로 수행
        virus(nx, ny);
      }
    }
  }
};

// bfs를 이용해 각 바이러스가 사방으로 퍼지도록 하기
const virus_bfs = (x, y) => {
  const queue = [[x, y]];

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (temp[nx][ny] === 0) {
        temp[nx][ny] = 2;
        queue.push([nx, ny]);
      }
    }
  }
};

// 현재 맵에서 안전 영역의 크기를 계산하는 메서드
const get_scroe = () => {
  let scroe = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (temp[i][j] === 0) {
        scroe++;
      }
    }
  }
  return scroe;
};

const dfs = (count) => {
  // 울타리가 3개 설치된 경우
  if (count === 3) {
    // 벽을 설치한 뒤의 리스트 생성
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        temp[i][j] = data[i][j];
      }
    }
    // 각 바이러스 위치에서 전파 진행
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (temp[i][j] === 2) {
          virus_dfs(i, j);
        }
      }
    }
    // 안전 영역의 최댓값 계산 후 갱신
    result = Math.max(result, get_scroe());
    return;
  }

  // 빈 공간에 울타리 설치
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (data[i][j] === 0) {
        data[i][j] = 1;
        count++;
        dfs(count);

        data[i][j] = 0;
        count--;
      }
    }
  }
};

dfs(0);
console.log(result);
