let n = 25;
let m = 5;

let count = 0;
while (n !== 1) {
  n = n % m ? n - 1 : parseInt(n / m);
  count += 1;
}

console.log(count);
