function solution(array, commands) {
  var answer = [];
  commands.map((command) => {
    const [start, end, target] = command;
    const sliced = array.slice(start - 1, end);
    sliced.sort((a, b) => a - b);
    answer.push(sliced[target - 1]);
  });
  return answer;
}
