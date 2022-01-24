function solution(numbers) {
  numbers.sort((a, b) => {
    const first = String(a) + String(b);
    const second = String(b) + String(a);

    return Number(second) - Number(first);
  });

  return Number(numbers.join("")) ? numbers.join("") : "0";
}

console.log(solution([3, 30, 34, 5, 9]));
