const array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

// 전체를 순회한다.
for (let i = 0; i < array.length; i++) {
  // i부터 끝까지 중 최소값을 선택해서 i번째 값과 바꾼다.
  const minNumber = Math.min(...array.slice(i));
  const minNumberIndex = array.indexOf(minNumber);

  const temp = array[i];
  array[i] = array[minNumberIndex];
  array[minNumberIndex] = temp;
}

console.log(array);
