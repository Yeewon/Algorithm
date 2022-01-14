const s = "K1KA5CB7";
let alpha = "";
let number = 0;

//  알파벳은 오름차순으로 정렬, 숫자 더한 값은 이어서 출력

for (const char of s) {
  isNaN(char) ? (alpha += char) : (number += Number(char));
}

let sortedAlpha = alpha.split("").sort().join("");
number && (sortedAlpha += String(number));

console.log(sortedAlpha);
