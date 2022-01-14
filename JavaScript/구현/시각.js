const n = 5;
let count = 0;

for (let t = 0; t < n + 1; t++) {
  for (let m = 0; m < 60; m++) {
    for (let s = 0; s < 60; s++) {
      if ((String(t) + String(m) + String(s)).includes("3")) {
        count += 1;
      }
    }
  }
}

console.log(count);
