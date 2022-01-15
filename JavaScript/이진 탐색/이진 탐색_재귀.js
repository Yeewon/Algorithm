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

const array = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];
const target = 4;
const result = binary_search(array, target, 0, array.length - 1);

console.log(result);
