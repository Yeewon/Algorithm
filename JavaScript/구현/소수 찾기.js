function solution(numbers) {
  const numberList = numbers.split("");
  const result = [];

  for (let i = 1; i <= numberList.length; i++) {
    const candidates = getPermutations(numberList, i);

    for (const candidate of candidates) {
      const number = parseInt(candidate.join(""));
      if (isPrime(number) && !result.includes(number)) {
        result.push(number);
      }
    }
  }

  return result.length;
}

// 모든 경우의 수 (순열)
const getPermutations = (array, n) => {
  const results = [];
  // 1개씩 선택할 때, 바로 모든 배열의 원소 반환
  if (n === 1) return array.map((value) => [value]);

  array.forEach((fixed, index, origin) => {
    // fixed를 제외한 나머지 배열
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    // 나머지에 대해 수열
    const permutations = getPermutations(rest, n - 1);
    // 돌아온 순열에 대해 fixed를 붙인 배열
    const attached = permutations.map((permutation) => [fixed, ...permutation]);
    results.push(...attached);
  });

  return results;
};

const isPrime = (number) => {
  if (number === 0 || number === 1) return false;

  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false;
  }
  return true;
};

// console.log(solution("17"));
console.log(solution("011"));
