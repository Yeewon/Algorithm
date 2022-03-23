// map에 0이 있는지 확인
const hasZero = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes(0)) {
      return true;
    }
  }
  return false;
};

// 소용돌이 이동 방향 회전
const changeDirection = (MOVE, clockwise) => {
  if (clockwise) {
    MOVE.push(MOVE[0]);
    MOVE.shift();
  } else {
    MOVE.unshift(MOVE[3]);
    MOVE.pop();
  }
  return MOVE;
};

function solution(n, clockwise) {
  let clock = Array.from(Array(n), () => Array(n).fill(0));

  // 시작점
  const NOW = [
    [0, 0],
    [0, n - 1],
    [n - 1, n - 1],
    [n - 1, 0],
  ];

  // 시작점 1로 초기화
  for (cont[(x, y)] of NOW) {
    clock[x][y] = 1;
  }

  // 방향에따른 방향 회전
  let MOVE = clockwise
    ? [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
      ]
    : [
        [1, 0],
        [0, -1],
        [-1, 0],
        [0, 1],
      ];

  // 배열에 채울 정수
  let number = 2;

  while (true) {
    // 4개의 시작점에서 출발해서 다 채워질 때까지 회전
    for (let i = 0; i < 4; i++) {
      const [x, y] = NOW[i];
      const [dx, dy] = MOVE[i];

      let nx = x + dx;
      let ny = y + dy;

      // 다음 칸이 채워져 았다면,
      if (clock[nx][ny] !== 0) {
        // 모두 다 채워진 경우
        // 2가지 경우 -> 한 점에서 모여 끝나는 경우, 4 점 모두 다 채워지고 끝나는 경우
        if (i === 1 || (i === 0 && !hasZero(clock))) {
          return clock;
        }
        // 소용돌이 방향 회전한다.
        MOVE = changeDirection(MOVE, clockwise);

        const [dx, dy] = MOVE[i];
        nx = x + dx;
        ny = y + dy;
      }

      // 다음 칸 채워져 있지 않다면 채우고 NOW update
      clock[nx][ny] = number;
      NOW[i] = [nx, ny];
    }
    // 채울 숫자 update
    number++;
  }
}

const n = 5;
const clockwise = true;
console.log(solution(n, true));
