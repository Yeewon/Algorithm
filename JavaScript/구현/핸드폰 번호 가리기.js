// https://programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
  const phone_number_length = phone_number.length;
  return (
    "*".repeat(phone_number_length - 4) +
    phone_number.slice(phone_number_length - 4)
  );
}
