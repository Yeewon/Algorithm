// https://programmers.co.kr/learn/courses/30/lessons/12916
function solution(s) {
  return (
    s
      .toLowerCase()
      .split("")
      .filter((c) => c === "p").length ===
    s
      .toLowerCase()
      .split("")
      .filter((c) => c === "y").length
  );
}
