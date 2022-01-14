const n = 5;
const directions = ["R", "R", "R", "U", "D", "D"];
const move = {
  L: [0, -1],
  R: [0, 1],
  U: [-1, 0],
  D: [1, 0],
};

let x = 1;
let y = 1;

for (const direction of directions) {
  const [dx, dy] = move[direction];
  const nx = x + dx;
  const ny = y + dy;

  if (nx < 1 || ny < 1 || nx > n || ny > n) {
    continue;
  }

  x = nx;
  y = ny;
}

console.log(x, y);
