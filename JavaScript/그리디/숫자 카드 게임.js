const n = 2;
const m = 4;

const card = [
  [7, 3, 1, 8],
  [3, 3, 3, 4],
];

let answer = 0;

for (const numbers of card) {
  answer = Math.max(Math.min(...numbers), answer);
}

console.log(answer);
