// n이 100만 이하의 정수이다.
// 순서대로 확인해서 있으면 yes, 없으면 no
function binary_search(array, target, start, end) {
  if (start > end) {
    return -1;
  }
  const mid = parseInt((end + start) / 2);

  if (array[mid] === target) {
    return mid;
  } else if (array[mid] > target) {
    return binary_search(array, target, start, mid - 1);
  } else {
    return binary_search(array, target, mid + 1, end);
  }
}

const n = 5;
const partNumbers = [8, 5, 7, 9, 2];

const m = 3;
const requestNumbers = [5, 7, 9];

const answer = [];

// 이진탐색 이용
partNumbers.sort((a, b) => a - b);
for (const requestNumber of requestNumbers) {
  const result = binary_search(
    partNumbers,
    requestNumber,
    0,
    partNumbers.length - 1
  );
  answer.push(result === -1 ? "no" : "yes");
}

// set 이용
const partNumberSet = new Set(partNumbers);
for (const requestNumber of requestNumbers) {
  answer.push(partNumberSet.has(requestNumber) ? "yes" : "no");
}

console.log(answer);
