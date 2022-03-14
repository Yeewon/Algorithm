function solution(rows, columns, queries) {
  const answer = [];
  let num = 0;

  let array = Array.from(new Array(rows + 1), () =>
    new Array(columns + 1).fill(0)
  );

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
      array[i][j] = (i - 1) * columns + j;
    }
  }

  queries.forEach(([x1, y1, x2, y2]) => {
    const stack = [];
    // 가로 오른쪽 이동 : (x1, y1) ~ (x1, y2-1) => (0, +1)
    for (let ny = y1; ny < y2; ny++) stack.push(array[x1][ny]);

    // 세로 아래 이동 : (x1, y2) ~ (x2-1, y2) => (+1, 0)
    for (let nx = x1; nx < x2; nx++) stack.push(array[nx][y2]);

    // 가로 왼쪽 이동 : (x2, y2) ~ (x2, y1-1) => (0, -1)
    for (let ny = y2; ny > y1; ny--) stack.push(array[x2][ny]);

    // 세로 위 이동 : (x2, y1) ~ (x1-1, y1) => (-1, 0)
    for (let nx = x2; nx > x1; nx--) stack.push(array[nx][y1]);

    // 정답 찾기
    answer.push(Math.min(...stack));

    // 오른쪽으로 한칸씩 shift
    const temp = stack.pop();
    stack.unshift(temp);

    // 이동한 값 삽입
    for (let ny = y1; ny < y2; ny++) array[x1][ny] = stack.shift();
    for (let nx = x1; nx < x2; nx++) array[nx][y2] = stack.shift();
    for (let ny = y2; ny > y1; ny--) array[x2][ny] = stack.shift();
    for (let nx = x2; nx > x1; nx--) array[nx][y1] = stack.shift();
  });

  return answer;
}
