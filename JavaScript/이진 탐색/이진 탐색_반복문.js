function binary_search(array, target, start, end) {
  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

const array = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];
const target = 4;
const result = binary_search(array, target, 0, array.length - 1);

console.log(result);
