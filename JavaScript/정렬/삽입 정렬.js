const array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

for (let i = 0; i < array.length; i++) {
  //  인덱스 i부터 1까지 1씩 감소하며 반복하는 문법
  for (let j = i; j > 0; j--) {
    if (array[j] < array[j - 1]) {
      const temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;
    } else {
      break;
    }
  }
}

console.log(array);
