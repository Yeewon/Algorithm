const n = 5;
const fears = [2, 3, 1, 2, 2];

let answer = 0;
let count = 0;

fears.sort((a, b) => a - b);

for (const fear of fears) {
  count++;
  if (count >= fear) {
    count = 0;
    answer++;
  }
}

console.log(answer);
