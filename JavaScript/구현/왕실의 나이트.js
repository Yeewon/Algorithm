const n = "a1";
const row = Number(n[1]);
const column = n.charCodeAt(0) - 97 + 1;
let count = 0;

// 수평 두칸 이동 후 수직 한칸
// 수직 두칸 이동 후 수평 한칸
const move = [
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
];

for (const [dx, dy] of move) {
  const nx = column + dx;
  const ny = column + dy;
  if (nx < 1 || nx > 8 || ny < 1 || ny > 8) {
    continue;
  }
  count += 1;
}

console.log(count);
